import { Meteor } from 'meteor/meteor';

// Configure routes
Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading'
});

// Autenticate routes
Router.plugin('auth', {
    except: [
        'login',
        'main'
    ]
});

// Maping of routes
Router.map(function(){

    this.route('main', {
        path: '/'
    });

    this.route('login', {
        path: '/login'
    });

    this.route('logoff', function() {
        Meteor.logout();
        Router.go('login');    
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
