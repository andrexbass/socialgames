
Router.configure({
  layoutTemplate: 'layout', 
  loadingTemplate: 'loading'
});

Router.map(function(){

  this.route('singleview', {
    path: '/'
  });

  this.route('submenu', {
    path: '/sub/menu'
  });


});
