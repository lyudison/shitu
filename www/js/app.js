// Ionic Shitu App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'shitu' is the name of this angular module app (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'shitu.services' is found in services.js
// 'shitu.controllers' is found in controllers.js
angular.module('shitu', ['ionic', 'shitu.controllers', 'shitu.services'])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
  .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html',
    controller: 'TabCtrl'
  })

  // Each tab has its own nav history stack:
  .state('tab.home', {
    url: '/home',
    views: {
      'tab-home': {
        templateUrl: 'templates/tab-home.html',
        controller: 'HomeCtrl'
      }
    }
  })

  .state('tab.home.path', {
    url: '/path/:pathId',
    data: {
      path: {}
    },
    views: {
      'tab-home@tab': {
        templateUrl: 'templates/path-home.html',
        controller: 'PathHomeCtrl'
      }
    }
  })

  .state('tab.home.path.info', {
    url: '/info',
    views: {
      'tab-home@tab': {
        templateUrl: 'templates/path-info.html',
        controller: 'PathInfoCtrl'
      }
    }
  })

  .state('tab.home.path.travels', {
    url: '/travels',
    views: {
      'tab-home@tab': {
        templateUrl: 'templates/path-travels.html',
        controller: 'PathTravelsCtrl'
      }
    }
  })

  .state('tab.home.path.qna', {
    url: '/qna',
    views: {
      'tab-home@tab': {
        templateUrl: 'templates/path-qna.html',
        controller: 'PathQnaCtrl'
      }
    }
  })

  .state('tab.dest', {
    url: '/dest',
    views: {
      'tab-dest': {
        templateUrl: 'templates/tab-dest.html',
        controller: 'DestCtrl'
      }
    }
  })

  .state('tab.dest.path', {
    url: '/path/:pathId',
    data: {
      path: {}
    },
    views: {
      'tab-dest@tab': {
        templateUrl: 'templates/path-home.html',
        controller: 'PathHomeCtrl'
      }
    }
  })

  .state('tab.dest.path.info', {
    url: '/info',
    views: {
      'tab-dest@tab': {
        templateUrl: 'templates/path-info.html',
        controller: 'PathInfoCtrl'
      }
    }
  })

  .state('tab.dest.path.travels', {
    url: '/travels',
    views: {
      'tab-dest@tab': {
        templateUrl: 'templates/path-travels.html',
        controller: 'PathTravelsCtrl'
      }
    }
  })

  .state('tab.dest.path.qna', {
    url: '/qna',
    views: {
      'tab-dest@tab': {
        templateUrl: 'templates/path-qna.html',
        controller: 'PathQnaCtrl'
      }
    }
  })

  .state('tab.publish', {
    url: '/publish',
    views: {
      'tab-publish': {
        templateUrl: 'templates/tab-publish.html',
        controller: 'PublishCtrl'
      }
    }
  })
        
  .state('tab.community', {
    url: '/community',
    views: {
      'tab-community': {
        templateUrl: 'templates/tab-community.html',
        controller: 'CommunityCtrl'
      }
    }
  })

  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/home');

  // remove text in the back button
  // $ionicConfigProvider.backButton.text('');
})

.run(function($ionicPlatform) {

  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
});
