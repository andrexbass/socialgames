// Here we attach a our app initialization once the main layout has been rendered
// See also client/lib/app.init.js
if (Meteor.isClient) {
  
  Template.layout.rendered = function () {
      setTimeout(function(){
        App.run();
      }, 100)
  }
}