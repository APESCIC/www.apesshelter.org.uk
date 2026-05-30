(function(){
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.main-nav');
  const megas = [...document.querySelectorAll('.mega')];

  function closeMega(mega){
    const btn = mega.querySelector('.mega-trigger');
    mega.classList.remove('open');
    if(btn) btn.setAttribute('aria-expanded','false');
  }

  function closeAllMegas(except){
    megas.forEach(function(mega){
      if(mega !== except) closeMega(mega);
    });
  }

  if(toggle && nav){
    toggle.addEventListener('click', function(e){
      e.stopPropagation();
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
      if(!open) closeAllMegas();
    });
  }

  megas.forEach(function(mega){
    const btn = mega.querySelector('.mega-trigger');
    const panel = mega.querySelector('.mega-panel');

    function setOpen(open){
      closeAllMegas(open ? mega : null);
      mega.classList.toggle('open', open);
      if(btn) btn.setAttribute('aria-expanded', String(open));
    }

    if(btn){
      btn.addEventListener('click', function(e){
        e.preventDefault();
        e.stopPropagation();
        setOpen(true);
      });

      btn.addEventListener('keydown', function(e){
        if(e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowDown'){
          e.preventDefault();
          setOpen(true);
          const firstLink = panel ? panel.querySelector('a, button') : null;
          if(firstLink && e.key === 'ArrowDown') firstLink.focus();
        }
        if(e.key === 'Escape'){
          e.preventDefault();
          closeMega(mega);
          btn.focus();
        }
      });
    }

    mega.addEventListener('click', function(e){
      e.stopPropagation();
    });

    if(panel){
      panel.addEventListener('keydown', function(e){
        if(e.key === 'Escape'){
          e.preventDefault();
          closeMega(mega);
          if(btn) btn.focus();
        }
      });
    }
  });

  document.addEventListener('click', function(e){
    megas.forEach(function(mega){
      if(!mega.contains(e.target)) closeMega(mega);
    });
  });

  document.addEventListener('keydown', function(e){
    if(e.key === 'Escape') closeAllMegas();
  });
})();


(function(){
  const helper=document.querySelector('[data-route-helper]');
  if(!helper) return;
  const result=helper.querySelector('#home-route-result');
  const actions=helper.querySelector('#home-route-actions');
  const routes={
    adopt:{message:'Recommended route: open the adoption hub. You can view adoptable animals, read the adoption process, check fees and start the reservation route.',actions:'<a class="button-gold" href="adoptions.html">Open adoptions</a><a class="button-secondary" href="services.html">View services</a>'},
    surrender:{message:'Recommended route: use shelter and surrender. This is for owners or keepers who can no longer safely care for their own animal.',actions:'<a class="button-gold" href="surrender.html">Open surrender route</a><a class="button-secondary" href="https://service.sheltermanager.com/asmservice?account=apes&method=online_form_html&formid=112" target="_blank" rel="noopener noreferrer">Start surrender form</a>'},
    rescue:{message:'Recommended route: use rescue services. This is for animals that are not yours, including stray, escaped, abandoned or unwanted exotic animals.',actions:'<a class="button-gold" href="rescues.html">Open rescue services</a><a class="button-secondary" href="contact.html">Contact APES</a>'},
    lost:{message:'Recommended route: register a lost pet. Provide species, description, photos, last known location and your contact details.',actions:'<a class="button-gold" href="contact.html#lost-found">Lost and found hub</a><a class="button-secondary" href="https://service.sheltermanager.com/asmservice?account=apes&method=online_form_html&formid=26" target="_blank" rel="noopener noreferrer">Register lost pet</a>'},
    found:{message:'Recommended route: report a found pet. Give location, condition, containment details and photos where safe.',actions:'<a class="button-gold" href="contact.html#lost-found">Lost and found hub</a><a class="button-secondary" href="https://service.sheltermanager.com/asmservice?account=apes&method=online_form_html&formid=25" target="_blank" rel="noopener noreferrer">Report found pet</a>'},
    sponsor:{message:'Recommended route: open sponsorships and donations. Your support helps food, care, treatment, enrichment and emergency rescue capacity.',actions:'<a class="button-gold" href="sponsorships.html">Open sponsorships</a><a class="button-secondary" href="donate.html">Donate</a>'},
    urgent:{message:'Recommended route: seek emergency, local authority animal warden or veterinary support first where there is immediate danger, injury or public safety risk. Then contact APES with details and any reference numbers.',actions:'<a class="button-gold" href="tel:03003020227">Call APES</a><a class="button-secondary" href="https://contact.apesshelter.org.uk/" target="_blank" rel="noopener noreferrer">Contact centre</a>'}
  };
  helper.querySelectorAll('input[name="home-route"]').forEach(input=>{
    input.addEventListener('change',()=>{
      const selected=routes[input.value];
      if(!selected) return;
      result.textContent=selected.message;
      actions.innerHTML=selected.actions;
    });
  });
})();


// v0.0.6 Beta generic filter controls and enhanced adoption fee calculator
(function(){
  document.querySelectorAll('[data-filter-group]').forEach(function(group){
    const buttons = Array.from(group.querySelectorAll('[data-filter]'));
    const cards = Array.from(group.querySelectorAll('[data-card]'));
    const search = group.querySelector('[data-search]');
    const count = group.querySelector('[data-count]');
    if(!buttons.length || !cards.length) return;
    let active = 'all';
    function update(){
      const term = search ? search.value.toLowerCase().trim() : '';
      let visible = 0;
      cards.forEach(function(card){
        const category = (card.getAttribute('data-category') || '').toLowerCase();
        const keywords = (card.getAttribute('data-keywords') || '').toLowerCase();
        const text = (card.textContent || '').toLowerCase() + ' ' + keywords;
        const show = (active === 'all' || category === active) && (!term || text.indexOf(term) !== -1);
        card.hidden = !show;
        if(show) visible += 1;
      });
      if(count){
        count.textContent = visible === cards.length ? 'Showing all' : 'Showing ' + visible + ' of ' + cards.length;
      }
    }
    buttons.forEach(function(button){
      button.addEventListener('click', function(){
        active = (button.getAttribute('data-filter') || 'all').toLowerCase();
        buttons.forEach(function(item){ item.classList.remove('active'); item.setAttribute('aria-selected','false'); });
        button.classList.add('active');
        button.setAttribute('aria-selected','true');
        update();
      });
    });
    if(search) search.addEventListener('input', update);
    update();
  });
})();

(function(){
  const calc = document.querySelector('[data-adoption-calculator]');
  if(!calc) return;
  const animalSelect = calc.querySelector('#adoptionAnimalFee');
  const addonInputs = Array.from(calc.querySelectorAll('[data-adoption-addon]'));
  const totalEl = calc.querySelector('#adoptionFeeTotal');
  const breakdownEl = calc.querySelector('#adoptionFeeBreakdown');
  const animalChip = calc.querySelector('#adoptionAnimalChip');
  const addonChip = calc.querySelector('#adoptionAddonChip');
  const adminFee = 15;
  function money(value){ return '£' + Number(value || 0).toLocaleString('en-GB'); }
  function selectedOptionLabel(){
    if(!animalSelect || !animalSelect.selectedOptions.length) return 'No animal selected';
    return animalSelect.selectedOptions[0].getAttribute('data-label') || animalSelect.selectedOptions[0].textContent.trim();
  }
  function update(){
    const animalFee = animalSelect ? Number(animalSelect.value || 0) : 0;
    const animalLabel = selectedOptionLabel();
    let addonTotal = 0;
    const lines = [];
    if(animalFee > 0){ lines.push(animalLabel + ': ' + money(animalFee)); }
    else { lines.push('Select an animal fee to complete the estimate.'); }
    lines.push('Admin fee: ' + money(adminFee));
    addonInputs.forEach(function(input){
      if(input.checked){
        const value = Number(input.value || 0);
        const label = input.getAttribute('data-label') || 'Add-on';
        addonTotal += value;
        lines.push(label + ': ' + money(value));
      }
    });
    const total = animalFee + adminFee + addonTotal;
    if(totalEl) totalEl.textContent = money(total);
    if(animalChip) animalChip.textContent = animalFee > 0 ? 'Animal: ' + animalLabel : 'Animal: not selected';
    if(addonChip) addonChip.textContent = 'Add-ons: ' + money(addonTotal);
    if(breakdownEl){
      breakdownEl.innerHTML = lines.map(function(line){ return '<li>' + line.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;') + '</li>'; }).join('');
    }
  }
  if(animalSelect) animalSelect.addEventListener('change', update);
  addonInputs.forEach(function(input){ input.addEventListener('change', update); });
  update();
})();


// v0.0.6 Beta advanced surrender page interactions
(function(){
  const page = document.querySelector('[data-surrender-page]');
  if(!page) return;

  const routeChoices = page.querySelectorAll('input[name="surrender-route"]');
  const routeResult = page.querySelector('#surrender-route-result');
  const routeActions = page.querySelector('#surrender-route-actions');
  const routeContent = {
    own: {
      message: 'Recommended route: use the surrender request form. This is for owners or keepers who can no longer safely care for their own animal.',
      actions: '<a class="surrender-button-gold" href="https://service.sheltermanager.com/asmservice?account=apes&method=online_form_html&formid=112" target="_blank" rel="noopener noreferrer">Open surrender form</a><a class="surrender-button-secondary" href="#surrender-readiness-checker">Check before applying</a>'
    },
    notmine: {
      message: 'Recommended route: use rescue services. This is more suitable for stray, escaped, abandoned or unwanted exotic animals that are not yours.',
      actions: '<a class="surrender-button-gold" href="rescues.html">Use rescue services</a><a class="surrender-button-secondary" href="https://contact.apesshelter.org.uk/" target="_blank" rel="noopener noreferrer">Contact APES</a>'
    },
    emergency: {
      message: 'Recommended route: contact the appropriate emergency service, local authority animal warden or veterinary practice first where there is immediate danger, injury or public safety risk. Then contact APES with reference details so the team can assess whether we can assist.',
      actions: '<a class="surrender-button-gold" href="tel:03003020227">Call APES</a><a class="surrender-button-secondary" href="https://contact.apesshelter.org.uk/" target="_blank" rel="noopener noreferrer">Contact APES</a>'
    },
    help: {
      message: 'Recommended route: contact APES or use live chat. The team can help you choose the correct route before you submit a form.',
      actions: '<a class="surrender-button-gold" href="https://contact.apesshelter.org.uk/" target="_blank" rel="noopener noreferrer">Contact APES</a><a class="surrender-button-secondary" href="tel:03003020227">Call APES</a>'
    }
  };
  routeChoices.forEach(function(choice){
    choice.addEventListener('change', function(){
      const selected = routeContent[choice.value];
      if(selected && routeResult && routeActions){
        routeResult.textContent = selected.message;
        routeActions.innerHTML = selected.actions;
      }
    });
  });

  const checks = Array.from(page.querySelectorAll('.surrender-check-item'));
  const progressFill = page.querySelector('#surrender-progress-fill');
  const checkerResult = page.querySelector('#surrender-checker-result');
  function updateReadiness(){
    if(!checks.length || !progressFill || !checkerResult) return;
    const complete = checks.filter(function(check){ return check.checked; }).length;
    const percentage = Math.round((complete / checks.length) * 100);
    progressFill.style.width = percentage + '%';
    if(percentage === 0){ checkerResult.textContent = 'Tick the checklist items to see your preparation progress.'; }
    else if(percentage < 50){ checkerResult.textContent = 'You are ' + percentage + '% prepared. Gather more information before submitting your surrender request.'; }
    else if(percentage < 100){ checkerResult.textContent = 'You are ' + percentage + '% prepared. You can start the form, but more detail may help APES assess faster.'; }
    else { checkerResult.textContent = 'You are ready to complete the surrender form. Remember: complete one request per pet.'; }
  }
  checks.forEach(function(check){ check.addEventListener('change', updateReadiness); });
  updateReadiness();

  const printButton = page.querySelector('#surrender-print-checklist');
  if(printButton) printButton.addEventListener('click', function(){ window.print(); });

  const tabs = Array.from(page.querySelectorAll('.surrender-tab'));
  const animalCards = Array.from(page.querySelectorAll('.surrender-animal-card'));
  const searchInput = page.querySelector('#surrender-animal-search');
  const animalCount = page.querySelector('#surrender-animal-count');
  let activeFilter = 'all';
  function updateAnimalCards(){
    const searchTerm = searchInput ? searchInput.value.toLowerCase().trim() : '';
    let visibleCount = 0;
    animalCards.forEach(function(card){
      const category = (card.getAttribute('data-category') || '').toLowerCase();
      const keywords = (card.getAttribute('data-keywords') || '').toLowerCase();
      const text = (card.textContent || '').toLowerCase() + ' ' + keywords;
      const matchesFilter = activeFilter === 'all' || category === activeFilter;
      const matchesSearch = !searchTerm || text.indexOf(searchTerm) !== -1;
      const show = matchesFilter && matchesSearch;
      card.hidden = !show;
      if(show) visibleCount += 1;
    });
    if(animalCount){
      animalCount.textContent = visibleCount === animalCards.length ? 'Showing all categories' : 'Showing ' + visibleCount + ' matching categor' + (visibleCount === 1 ? 'y' : 'ies');
    }
  }
  tabs.forEach(function(tab){
    tab.addEventListener('click', function(){
      activeFilter = (tab.getAttribute('data-filter') || 'all').toLowerCase();
      tabs.forEach(function(item){ item.classList.remove('active'); item.setAttribute('aria-selected','false'); });
      tab.classList.add('active'); tab.setAttribute('aria-selected','true');
      updateAnimalCards();
    });
  });
  if(searchInput) searchInput.addEventListener('input', updateAnimalCards);
  updateAnimalCards();

  page.querySelectorAll('.surrender-accordion-button').forEach(function(button){
    button.addEventListener('click', function(){
      const item = button.closest('.surrender-accordion-item');
      if(!item) return;
      const isOpen = item.classList.contains('open');
      item.classList.toggle('open');
      button.setAttribute('aria-expanded', String(!isOpen));
    });
  });
})();
