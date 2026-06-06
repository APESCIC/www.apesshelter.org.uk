(function(){
  function initPrimaryNav(){
    const header = document.querySelector('.site-header');
    const toggle = header ? header.querySelector('.nav-toggle') : null;
    const close = header ? header.querySelector('.nav-close') : null;
    const shell = header ? header.querySelector('.main-nav-shell') : null;
    const panel = header ? header.querySelector('.main-nav-panel') : null;
    const overlay = header ? header.querySelector('.nav-overlay') : null;
    const nav = header ? header.querySelector('.main-nav') : null;
    const details = header ? Array.from(header.querySelectorAll('.mega-details')) : [];
    const desktopBreakpoint = window.matchMedia('(min-width: 981px)');
    const mobileBreakpoint = window.matchMedia('(max-width: 980px)');

    if(!header || !toggle || !close || !shell || !panel || !overlay || !nav || !details.length) return;
    if(header.getAttribute('data-nav-initialized') === 'true') return;
    header.setAttribute('data-nav-initialized', 'true');

    function syncSummary(detailsEl){
      const summary = detailsEl.querySelector('.mega-trigger');
      if(summary) summary.setAttribute('aria-expanded', String(detailsEl.open));
      detailsEl.closest('.mega').classList.toggle('open', detailsEl.open);
    }

    function closeOtherDetails(active){
      details.forEach(function(item){
        if(item !== active){
          item.open = false;
          syncSummary(item);
        }
      });
    }

    function closeAllDetails(){
      closeOtherDetails(null);
    }

    function setDetailOpen(detailsEl, open){
      detailsEl.open = open;
      syncSummary(detailsEl);
      if(open) closeOtherDetails(detailsEl);
    }

    function isNavOpen(){
      return shell.classList.contains('open');
    }

    function syncNavigationOffsets(){
      const headerRect = header ? header.getBoundingClientRect() : { bottom: 0, height: 0 };
      document.documentElement.style.setProperty('--mobile-nav-top', Math.max(Math.round(headerRect.bottom), 0) + 'px');
      document.documentElement.style.setProperty('--mega-panel-top', Math.max(Math.round(headerRect.height) + 10, 0) + 'px');
    }

    function setWidgetSuppression(active){
      document.body.classList.toggle('nav-open', active);
      document.body.classList.toggle('nav-widgets-suppressed', active);
    }

    function setPanelDisabled(disabled){
      if(disabled){
        panel.setAttribute('aria-hidden', 'true');
        panel.setAttribute('inert', '');
      } else {
        panel.removeAttribute('aria-hidden');
        panel.removeAttribute('inert');
      }
    }

    function setNavOpen(open, options){
      const settings = options || {};
      syncNavigationOffsets();
      if(!open) closeAllDetails();
      shell.classList.toggle('open', open);
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      overlay.hidden = !open;
      setPanelDisabled(!open);
      setWidgetSuppression(open);
      if(!open && settings.restoreFocus && document.contains(toggle)){
        toggle.focus();
      }
    }

    function closeNav(options){
      setNavOpen(false, options);
    }

    function openNav(){
      setNavOpen(true);
    }

    toggle.addEventListener('click', function(){
      if(isNavOpen()) closeNav();
      else openNav();
    });

    close.addEventListener('click', function(){
      closeNav({ restoreFocus: true });
    });
    overlay.addEventListener('click', function(){
      closeNav({ restoreFocus: true });
    });

    details.forEach(function(item){
      syncSummary(item);
      item.addEventListener('toggle', function(){
        syncSummary(item);
        if(item.open) closeOtherDetails(item);
      });
      const summary = item.querySelector('.mega-trigger');
      if(summary){
        summary.addEventListener('click', function(event){
          if(!mobileBreakpoint.matches) return;
          if(event.detail === 0) return;
          event.preventDefault();
          setDetailOpen(item, !item.open);
        });
        summary.addEventListener('keydown', function(event){
          if((event.key === 'Enter' || event.key === ' ') && mobileBreakpoint.matches){
            event.preventDefault();
            setDetailOpen(item, !item.open);
            return;
          }
          if(event.key === 'ArrowDown' && item.open){
            const firstLink = item.querySelector('.mega-panel a, .mega-panel button');
            if(firstLink){
              event.preventDefault();
              firstLink.focus();
            }
          }
        });
      }
    });

    nav.addEventListener('click', function(event){
      const link = event.target.closest('a[href]');
      if(!link) return;
      if(!shell.contains(link)) return;
      closeNav();
    });

    function handleEscape(event){
      if(event.key !== 'Escape') return;
      const openDetail = details.find(function(item){ return item.open; });
      if(openDetail){
        event.preventDefault();
        setDetailOpen(openDetail, false);
        const summary = openDetail.querySelector('.mega-trigger');
        if(summary) summary.focus();
        return;
      }
      if(isNavOpen()){
        event.preventDefault();
        closeNav({ restoreFocus: true });
      }
    }

    panel.addEventListener('keydown', handleEscape);
    document.addEventListener('keydown', handleEscape);

    document.addEventListener('click', function(event){
      if(header.contains(event.target)) return;
      closeAllDetails();
      if(isNavOpen()) closeNav({ restoreFocus: true });
    });

    function syncForViewport(){
      syncNavigationOffsets();
      if(desktopBreakpoint.matches){
        shell.classList.remove('open');
        overlay.hidden = true;
        setPanelDisabled(false);
        setWidgetSuppression(false);
        syncNavigationOffsets();
      } else {
        closeAllDetails();
        setPanelDisabled(!isNavOpen());
      }
    }

    function cleanupNavigationState(){
      closeNav();
      closeAllDetails();
      overlay.hidden = true;
      setPanelDisabled(!desktopBreakpoint.matches);
      setWidgetSuppression(false);
      syncNavigationOffsets();
    }

    if(typeof desktopBreakpoint.addEventListener === 'function'){
      desktopBreakpoint.addEventListener('change', syncForViewport);
    } else if(typeof desktopBreakpoint.addListener === 'function'){
      desktopBreakpoint.addListener(syncForViewport);
    }

    window.addEventListener('resize', syncForViewport);
    window.addEventListener('scroll', syncNavigationOffsets, { passive: true });
    window.addEventListener('load', syncForViewport);
    window.addEventListener('pagehide', cleanupNavigationState);
    window.addEventListener('beforeunload', cleanupNavigationState);
    window.addEventListener('pageshow', function(event){
      if(event.persisted){
        cleanupNavigationState();
      }
      syncForViewport();
    });

    setPanelDisabled(mobileBreakpoint.matches);
    syncForViewport();
  }

  initPrimaryNav();
  document.addEventListener('DOMContentLoaded', initPrimaryNav);
  document.addEventListener('layout:components-loaded', initPrimaryNav);
})();


(function(){
  document.addEventListener('click', function(event){
    const link = event.target.closest('a[data-popup-link]');
    if(!link) return;
    const href = link.getAttribute('href');
    if(!href) return;
    event.preventDefault();
    const width = Number(link.getAttribute('data-popup-width') || 960);
    const height = Number(link.getAttribute('data-popup-height') || 760);
    const left = Math.max(0, Math.round((window.screen.width - width) / 2));
    const top = Math.max(0, Math.round((window.screen.height - height) / 2));
    const features = [
      'popup=yes',
      'toolbar=no',
      'menubar=no',
      'location=yes',
      'status=no',
      'resizable=yes',
      'scrollbars=yes',
      'width=' + width,
      'height=' + height,
      'left=' + left,
      'top=' + top
    ].join(',');
    const opened = window.open(href, link.getAttribute('data-popup-link') || 'popup', features);
    if(!opened){
      window.location.href = href;
    }
  });
})();


// v0.0.20 Beta homepage development notice and live chat launcher
(function(){
  const chatFallbackUrl = 'https://contact.apes.org.uk/help/3459567754';
  const modal = document.querySelector('[data-development-modal]');
  const dismissButtons = modal ? Array.from(modal.querySelectorAll('[data-development-dismiss]')) : [];
  const storageKey = 'apesShelterDevelopmentNoticeDismissed';

  function openLiveChat(){
    if(window.$chatwoot && typeof window.$chatwoot.toggle === 'function'){
      window.$chatwoot.toggle('open');
      return;
    }
    if(window.$chatwoot && typeof window.$chatwoot.open === 'function'){
      window.$chatwoot.open();
      return;
    }
    window.open(chatFallbackUrl, 'apes-live-chat-fallback', 'popup=yes,width=960,height=760,scrollbars=yes,resizable=yes');
  }

  document.addEventListener('click', function(event){
    const trigger = event.target.closest('[data-open-live-chat]');
    if(!trigger) return;
    event.preventDefault();
    if(modal && modal.contains(trigger)){
      closeModal();
    }
    openLiveChat();
  });

  if(!modal) return;

  function storageDismissed(){
    try{
      return window.localStorage && window.localStorage.getItem(storageKey) === 'true';
    } catch(error){
      return false;
    }
  }

  function setDismissed(){
    try{
      if(window.localStorage) window.localStorage.setItem(storageKey, 'true');
    } catch(error){}
  }

  function closeModal(){
    setDismissed();
    modal.hidden = true;
    document.body.classList.remove('development-modal-open');
  }

  function openModal(){
    modal.hidden = false;
    document.body.classList.add('development-modal-open');
    const closeButton = modal.querySelector('.development-modal-close');
    if(closeButton) closeButton.focus();
  }

  dismissButtons.forEach(function(button){
    button.addEventListener('click', closeModal);
  });

  document.addEventListener('keydown', function(event){
    if(event.key === 'Escape' && !modal.hidden){
      closeModal();
    }
  });

  if(!storageDismissed()){
    window.setTimeout(openModal, 500);
  }
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
    sponsor:{message:'Recommended route: open the primate sponsorship page or donate directly. Your support helps food, care, treatment, enrichment and emergency rescue capacity.',actions:'<a class="button-gold" href="primate-sponsor.html">Open Primate Sponsor</a><a class="button-secondary" href="donate.html">Donate</a>'},
    urgent:{message:'Recommended route: seek emergency, local authority animal warden or veterinary support first where there is immediate danger, injury or public safety risk. Then contact APES with details and any reference numbers.',actions:'<a class="button-gold" href="tel:03003020227">Call APES</a><a class="button-secondary" href="https://contact.apes.org.uk/help/3459567754" data-popup-link="ticket" data-popup-width="960" data-popup-height="760">Open a ticket</a>'}
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
      message: 'Recommended route: use rescue services for non-owner exotic animal cases. If the animal is a dog or cat, use the Dog and Cat Rehoming page for official shelter links.',
      actions: '<a class="surrender-button-gold" href="dog-cat-rehoming.html">Dog & Cat Rehoming</a><a class="surrender-button-secondary" href="rescues.html">Use rescue services</a>'
    },
    emergency: {
      message: 'Recommended route: contact the appropriate emergency service, local authority animal warden or veterinary practice first where there is immediate danger, injury or public safety risk. Then contact APES with reference details so the team can assess whether we can assist.',
      actions: '<a class="surrender-button-gold" href="tel:03003020227">Call APES</a><a class="surrender-button-secondary" href="https://contact.apes.org.uk/help/3459567754" data-popup-link="ticket" data-popup-width="960" data-popup-height="760">Open a ticket</a>'
    },
    help: {
      message: 'Recommended route: contact APES or use live chat. The team can help you choose the correct route before you submit a form.',
      actions: '<a class="surrender-button-gold" href="https://contact.apes.org.uk/help/3459567754" data-popup-link="ticket" data-popup-width="960" data-popup-height="760">Open a ticket</a><a class="surrender-button-secondary" href="tel:03003020227">Call APES</a>'
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


// v0.0.7 Beta reusable accordion behaviour (used across multiple pages)
(function(){
  document.querySelectorAll('.accordion-button').forEach(function(button){
    button.addEventListener('click', function(){
      const item = button.closest('.accordion-item');
      if(!item) return;
      const isOpen = item.classList.contains('open');
      item.classList.toggle('open');
      button.setAttribute('aria-expanded', String(!isOpen));
    });
  });
})();


// v0.0.7 Beta copy-to-clipboard buttons (used on contact + other pages)
(function(){
  const buttons = Array.from(document.querySelectorAll('[data-copy-text]'));
  if(!buttons.length) return;

  function fallbackCopy(text){
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.setAttribute('readonly','');
    textarea.style.position = 'fixed';
    textarea.style.left = '-9999px';
    textarea.style.top = '0';
    document.body.appendChild(textarea);
    textarea.select();
    try{ document.execCommand('copy'); } catch(e){}
    document.body.removeChild(textarea);
  }

  function copy(text){
    if(navigator.clipboard && window.isSecureContext){
      return navigator.clipboard.writeText(text);
    }
    fallbackCopy(text);
    return Promise.resolve();
  }

  buttons.forEach(function(button){
    const originalLabel = button.textContent.trim() || 'Copy';
    button.addEventListener('click', function(){
      const text = button.getAttribute('data-copy-text') || '';
      if(!text) return;
      button.disabled = true;
      copy(text).then(function(){
        button.textContent = 'Copied!';
        setTimeout(function(){
          button.textContent = originalLabel;
          button.disabled = false;
        }, 1200);
      }).catch(function(){
        button.textContent = 'Copy failed';
        setTimeout(function(){
          button.textContent = originalLabel;
          button.disabled = false;
        }, 1400);
      });
    });
  });
})();


// v0.0.7 Beta Donate page impact explorer
(function(){
  const shell = document.querySelector('[data-donation-impact]');
  if(!shell) return;

  const amountEl = shell.querySelector('[data-impact-amount]');
  const listEl = shell.querySelector('[data-impact-list]');
  const range = shell.querySelector('input[type="range"]');
  const choiceButtons = Array.from(shell.querySelectorAll('[data-impact-choice]'));

  function money(value){ return '£' + Number(value || 0).toLocaleString('en-GB'); }

  function impactFor(amount){
    const value = Number(amount || 0);
    if(value <= 0){
      return {
        headline: 'Choose an amount to see examples.',
        items: ['Food, bedding, heating, equipment and enrichment all matter.']
      };
    }
    if(value < 10){
      return {
        headline: 'A small gift still helps.',
        items: ['Contributes towards daily care essentials.','Adds a little capacity for rescue responses.']
      };
    }
    if(value < 25){
      return {
        headline: 'A practical boost for day-to-day welfare.',
        items: ['Helps with supplies like bedding, heating top-ups or enrichment.','Supports intake prep and cleaning essentials.']
      };
    }
    if(value < 50){
      return {
        headline: 'Supports intake and ongoing care.',
        items: ['Can contribute towards equipment, enclosure repairs and specialist supplies.','Helps APES respond when urgent welfare cases arrive.']
      };
    }
    if(value < 100){
      return {
        headline: 'A meaningful contribution to welfare capacity.',
        items: ['Can contribute towards veterinary support and treatment costs.','Helps keep space, heat and care running for animals in the shelter.']
      };
    }
    return {
      headline: 'Helps build emergency rescue capacity.',
      items: ['Supports food, care, heating, equipment and treatment costs.','Helps APES keep space available for welfare cases.']
    };
  }

  function setActiveButton(amount){
    choiceButtons.forEach(function(btn){
      const value = Number(btn.getAttribute('data-impact-choice') || 0);
      btn.classList.toggle('active', value === Number(amount));
    });
  }

  function render(amount){
    const value = Math.max(0, Math.round(Number(amount || 0)));
    const impact = impactFor(value);
    if(amountEl) amountEl.textContent = money(value);
    if(listEl){
      listEl.innerHTML = [
        '<li><strong>' + impact.headline.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;') + '</strong></li>'
      ].concat(impact.items.map(function(item){
        return '<li>' + String(item).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;') + '</li>';
      })).join('');
    }
    if(range) range.value = String(value);
    setActiveButton(value);
  }

  if(range){
    range.addEventListener('input', function(){ render(range.value); });
  }
  choiceButtons.forEach(function(btn){
    btn.addEventListener('click', function(){
      const value = btn.getAttribute('data-impact-choice') || '0';
      render(value);
    });
  });

  render(range ? range.value : 25);
})();


// v0.0.7 Beta Contact page helper
(function(){
  const helper = document.querySelector('[data-contact-helper]');
  if(!helper) return;

  const result = helper.querySelector('#contact-route-result');
  const actions = helper.querySelector('#contact-route-actions');
  const routes = {
    adopt:{message:'Recommended route: browse adoptable animals and the adoption process first, then open a ticket if you have a specific question.',actions:'<a class="button-gold" href="adoptions.html">Open adoptions</a><a class="button-secondary" href="https://contact.apes.org.uk/help/3459567754" data-popup-link="ticket" data-popup-width="960" data-popup-height="760">Open a ticket</a>'},
    surrender:{message:'Recommended route: use the surrender form for owners or keepers. If you are unsure, open a ticket first.',actions:'<a class="button-gold" href="surrender.html">Open surrender route</a><a class="button-secondary" href="https://service.sheltermanager.com/asmservice?account=apes&method=online_form_html&formid=112" target="_blank" rel="noopener noreferrer">Start surrender form</a>'},
    rescue:{message:'Recommended route: use rescue services for animals that are not yours (stray, escaped, abandoned, unwanted).',actions:'<a class="button-gold" href="rescues.html">Open rescue services</a><a class="button-secondary" href="https://contact.apes.org.uk/help/3459567754" data-popup-link="ticket" data-popup-width="960" data-popup-height="760">Open a ticket</a>'},
    lost:{message:'Recommended route: register a lost pet so APES can record the case and route help.',actions:'<a class="button-gold" href="contact.html#lost-found">Lost and found hub</a><a class="button-secondary" href="https://service.sheltermanager.com/asmservice?account=apes&method=online_form_html&formid=26" target="_blank" rel="noopener noreferrer">Register lost pet</a>'},
    found:{message:'Recommended route: report a found pet so APES can record the details and advise.',actions:'<a class="button-gold" href="contact.html#lost-found">Lost and found hub</a><a class="button-secondary" href="https://service.sheltermanager.com/asmservice?account=apes&method=online_form_html&formid=25" target="_blank" rel="noopener noreferrer">Report found pet</a>'},
    general:{message:'Recommended route: open a support ticket for routed enquiries, updates, complaints, welfare questions and web support.',actions:'<a class="button-gold" href="https://contact.apes.org.uk/help/3459567754" data-popup-link="ticket" data-popup-width="960" data-popup-height="760">Open a ticket</a><a class="button-secondary" href="tel:03003020227">Call 0300 302 0227</a>'}
  };

  helper.querySelectorAll('input[name="contact-route"]').forEach(function(input){
    input.addEventListener('change', function(){
      const selected = routes[input.value];
      if(!selected || !result || !actions) return;
      result.textContent = selected.message;
      actions.innerHTML = selected.actions;
    });
  });
})();


// v0.0.7 Beta Rescue page helper
(function(){
  const helper = document.querySelector('[data-rescue-helper]');
  if(!helper) return;

  const result = helper.querySelector('#rescue-route-result');
  const actions = helper.querySelector('#rescue-route-actions');
  const routes = {
    notmine:{message:'Recommended route: use rescue services for exotic or wildlife cases that are not yours. If the animal is a dog or cat, use the Dog and Cat Rehoming page for official shelters and rescues.',actions:'<a class="button-gold" href="dog-cat-rehoming.html">Dog & Cat Rehoming</a><a class="button-secondary" href="https://contact.apes.org.uk/help/3459567754" data-popup-link="ticket" data-popup-width="960" data-popup-height="760">Request rescue support</a>'},
    wildlife:{message:'Recommended route: if injured or at risk, seek appropriate emergency or wildlife support first. Then contact APES with details so we can advise or signpost.',actions:'<a class="button-gold" href="tel:03003020227">Call APES</a><a class="button-secondary" href="https://contact.apes.org.uk/help/3459567754" data-popup-link="ticket" data-popup-width="960" data-popup-height="760">Open a ticket</a>'},
    public:{message:'Recommended route: public-sector and corporate cases should use the ticket route and include reference numbers and risk info.',actions:'<a class="button-gold" href="https://contact.apes.org.uk/help/3459567754" data-popup-link="ticket" data-popup-width="960" data-popup-height="760">Open a ticket</a><a class="button-secondary" href="contact.html">Contact page</a>'},
    mine:{message:'Recommended route: if this is your pet and you cannot safely care for them, use the surrender route instead of rescue services.',actions:'<a class="button-gold" href="surrender.html">Owner surrender</a><a class="button-secondary" href="https://service.sheltermanager.com/asmservice?account=apes&method=online_form_html&formid=112" target="_blank" rel="noopener noreferrer">Start surrender form</a>'}
  };

  helper.querySelectorAll('input[name="rescue-route"]').forEach(function(input){
    input.addEventListener('change', function(){
      const selected = routes[input.value];
      if(!selected || !result || !actions) return;
      result.textContent = selected.message;
      actions.innerHTML = selected.actions;
    });
  });
})();


// v0.0.7 Beta Sponsorship planner
(function(){
  const shell = document.querySelector('[data-sponsor-planner]');
  if(!shell) return;

  const amountEl = shell.querySelector('[data-sponsor-amount]');
  const noteEl = shell.querySelector('[data-sponsor-note]');
  const actions = shell.querySelector('[data-sponsor-actions]');
  const inputs = Array.from(shell.querySelectorAll('input[name="sponsor-plan"]'));

  function money(value){ return '£' + Number(value || 0).toLocaleString('en-GB'); }

  const plans = {
    5:{note:'A starter sponsorship helps with daily care essentials like food, bedding and enrichment.'},
    10:{note:'A steady monthly sponsorship helps with routine care and supplies.'},
    20:{note:'A generous plan helps with specialist diets, enrichment and equipment pressure.'},
    30:{note:'A major boost that helps build capacity for welfare cases and long-term residents.'}
  };

  function render(amount){
    const value = Number(amount || 0);
    if(amountEl) amountEl.textContent = money(value) + ' / month';
    const plan = plans[value] || plans[10];
    if(noteEl) noteEl.textContent = plan.note;
    if(actions){
      actions.innerHTML = '<a class="button-gold" href="primate-sponsor.html">Start sponsorship</a><a class="button-secondary" href="donate.html">One-off donation</a>';
    }
  }

  inputs.forEach(function(input){
    input.addEventListener('change', function(){ render(input.value); });
  });

  const checked = inputs.find(function(input){ return input.checked; });
  render(checked ? checked.value : 10);
})();


// v0.0.7 Beta Portal helper
(function(){
  const helper = document.querySelector('[data-portal-helper]');
  if(!helper) return;

  const result = helper.querySelector('#portal-route-result');
  const actions = helper.querySelector('#portal-route-actions');
  const routes = {
    signin:{message:'Recommended route: use MyAPES Account and keep your email address consistent with your application.',actions:'<a class="button-gold" href="https://myapes.me.uk" target="_blank" rel="noopener noreferrer">Open MyAPES</a><a class="button-secondary" href="contact.html">Contact page</a>'},
    help:{message:'Recommended route: open a ticket for routed support and include as much detail as you can.',actions:'<a class="button-gold" href="https://contact.apes.org.uk/help/3459567754" data-popup-link="ticket" data-popup-width="960" data-popup-height="760">Open a ticket</a><a class="button-secondary" href="contact.html">Contact page</a>'},
    update:{message:'Recommended route: if your query relates to a live case or application, use MyAPES Account where possible, otherwise open a ticket.',actions:'<a class="button-gold" href="https://myapes.me.uk" target="_blank" rel="noopener noreferrer">Open MyAPES</a><a class="button-secondary" href="https://contact.apes.org.uk/help/3459567754" data-popup-link="ticket" data-popup-width="960" data-popup-height="760">Open a ticket</a>'}
  };

  helper.querySelectorAll('input[name="portal-route"]').forEach(function(input){
    input.addEventListener('change', function(){
      const selected = routes[input.value];
      if(!selected || !result || !actions) return;
      result.textContent = selected.message;
      actions.innerHTML = selected.actions;
    });
  });
})();
