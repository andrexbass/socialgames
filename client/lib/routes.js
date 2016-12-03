// Configure routes
Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading'
});

// Autenticate routes
Router.plugin('auth', {
  except: [
    'login'
  ]
});

// Maping of routes
Router.map(function(){

    this.route('singleview', {
    path: '/'
    });

    this.route('login', {
    path: '/login',
    layoutTemplate: ''
    });

    this.route('submenu', {
    path: '/sub/menu'
    });

    this.route('friends', {
        path: '/friends'
    });

    this.route('games', {
        path: '/games'
    });

    this.route('logs', {
    path: '/logs'
    });

    this.route('matches', {
    path: '/matches'
    });

    this.route('places', {
        path: '/places'
    });

    this.route('rankings', {
        path: '/rankings'
    });
});
