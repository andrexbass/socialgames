/*!
 * 
 * Angle - Bootstrap Admin App + jQuery
 * 
 * Version: 3.0.0
 * Author: @themicon_co
 * Website: http://themicon.co
 * License: https://wrapbootstrap.com/help/licenses
 * 
 */


(function(window, document, $, undefined){

  
  // jQuery's dom.ready doesn't work as usual in this scenario. 
  // This simple snippet will collect all module functions to be executed when templates are ready
  // similar to a dom.ready handler but can be executed manually later.
  // App.run() is executed in file /lib/rendered.js to catch the ready state of the main layout
  
  window.App = {
    ready: function(callback){
      if (!this.modules)
        this.modules = [];
      if(typeof callback === 'function')
        this.modules.push(callback);
    },
    run: function(){
      var mods = this.modules;
      for(var cb in mods) {
        mods[cb]();
      }
    }
  };


  App.ready(function(){

    // Restore body classes
    // ----------------------------------- 
    var $body = $('body');
    new StateToggler().restoreState( $body );
    
    // enable settings toggle after restore
    $('#chk-fixed').prop('checked', $body.hasClass('layout-fixed') );
    $('#chk-collapsed').prop('checked', $body.hasClass('aside-collapsed') );
    $('#chk-boxed').prop('checked', $body.hasClass('layout-boxed') );
    $('#chk-float').prop('checked', $body.hasClass('aside-float') );
    $('#chk-hover').prop('checked', $body.hasClass('aside-hover') );

    // When ready display the offsidebar
    $('.offsidebar.hide').removeClass('hide');

  }); // doc ready


})(window, document, window.jQuery);
