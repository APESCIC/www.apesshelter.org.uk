(function(){
  const supportedMarketingHosts = new Set([
    'www.apesshelter.org.uk',
    'apesshelter.org.uk'
  ]);
  const oneSignalAppId = '1d337087-6946-41fd-a6ce-e615bf18528a';
  const oneSignalSdkSrc = 'https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.page.js';

  function loadScript(key, src, attributes){
    const existing = document.querySelector('script[data-managed-script="' + key + '"]');
    if(existing) return Promise.resolve(existing);

    return new Promise(function(resolve, reject){
      const script = document.createElement('script');
      script.src = src;
      script.setAttribute('data-managed-script', key);
      Object.keys(attributes || {}).forEach(function(name){
        const value = attributes[name];
        if(value === true){
          script.setAttribute(name, name);
          script[name] = true;
        } else if(value !== false && value != null){
          script.setAttribute(name, String(value));
        }
      });
      script.addEventListener('load', function(){ resolve(script); }, { once: true });
      script.addEventListener('error', function(){
        reject(new Error('Failed to load third-party script: ' + src));
      }, { once: true });
      document.head.appendChild(script);
    });
  }

  function onSupportedMarketingHost(){
    return supportedMarketingHosts.has(window.location.hostname);
  }

  function initOneSignal(){
    if(!onSupportedMarketingHost()) return Promise.resolve(false);

    window.OneSignalDeferred = window.OneSignalDeferred || [];
    window.OneSignalDeferred.push(async function(OneSignal){
      try {
        await OneSignal.init({
          appId: oneSignalAppId
        });
      } catch (error){
        console.warn('OneSignal init skipped.', error);
      }
    });

    return loadScript('onesignal', oneSignalSdkSrc, { defer: true }).catch(function(error){
      console.warn(error.message);
      return false;
    });
  }

  function boot(){
    initOneSignal();
  }

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', boot, { once: true });
  } else {
    boot();
  }
})();
