(function(){
  const placeholders = Array.from(document.querySelectorAll('[data-include]'));
  if(!placeholders.length){
    document.dispatchEvent(new CustomEvent('layout:components-loaded'));
    return;
  }

  const includeFiles = {
    header: 'includes/header.html',
    footer: 'includes/footer.html'
  };
  const cache = {};

  function loadInclude(name){
    const file = includeFiles[name];
    if(!file) return Promise.reject(new Error('Unknown layout include: ' + name));
    if(!cache[file]){
      cache[file] = fetch(file, { credentials: 'same-origin' }).then(function(response){
        if(!response.ok) throw new Error('Failed to load include ' + file + ' (' + response.status + ')');
        return response.text();
      });
    }
    return cache[file];
  }

  const tasks = placeholders.map(function(placeholder){
    const name = (placeholder.getAttribute('data-include') || '').trim().toLowerCase();
    return loadInclude(name).then(function(markup){
      placeholder.outerHTML = markup;
    }).catch(function(error){
      console.error(error);
    });
  });

  Promise.all(tasks).finally(function(){
    document.dispatchEvent(new CustomEvent('layout:components-loaded'));
  });
})();
