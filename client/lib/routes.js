
Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading'
});

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

    this.route('matches', {
    path: '/matches'
    });

    this.route('places', {
        path: '/places'
    });

    this.route('rankings', {
        path: '/rankings'
    });

    this.route('timeline', {
        path: '/timeline'
    });
});
