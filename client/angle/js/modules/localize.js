// TRANSLATION
// ----------------------------------- 

(function(window, document, $, undefined){

  var preferredLang = 'en';
  var storageKey    = 'jq-appLang';

  App.ready(function(){

    // detect saved language or use default
    var currLang = $.localStorage.get(storageKey) || preferredLang;

    // Set initial language
    setLanguage(currLang);

    // Listen for changes
    $('[data-set-lang]').on('click', function(){

      currLang = $(this).data('setLang');

      if ( currLang ) {
        
        setLanguage(currLang);

        activateDropdown($(this));
      }

    });
    

    function setLanguage(currLang) {
      TAPi18n.setLanguage(currLang);
      $.localStorage.set(storageKey, currLang);
    }

    // Set the current clicked text as the active dropdown text
    function activateDropdown(elem) {
      var menu = elem.parents('.dropdown-menu');
      if ( menu.length ) {
        var toggle = menu.prev('button, a');
        toggle.text ( elem.text() );
      }
    }

  });

})(window, document, window.jQuery);
