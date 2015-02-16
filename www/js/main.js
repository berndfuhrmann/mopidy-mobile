angular.module('mopidy-mobile', [
  'ionic',
  'ngCordova',
  'mopidy-mobile.connection',
  'mopidy-mobile.library',
  'mopidy-mobile.locales',
  'mopidy-mobile.logging',
  'mopidy-mobile.playback',
  'mopidy-mobile.playlists',
  'mopidy-mobile.settings',
  'mopidy-mobile.tracklist',
  'mopidy-mobile.ui'
])

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
  $stateProvider.state('tabs', {
    abstract: true,
    url: '/tabs',
    templateUrl: 'templates/tabs.html'
  });

  $urlRouterProvider.otherwise('/tabs/settings');
  // TODO: platform defaults/configurable?
  $ionicConfigProvider.tabs.position('bottom');
  $ionicConfigProvider.tabs.style('standard');
})

.config(function($provide) {
  $provide.decorator('connectionErrorHandler', function($delegate, $filter, $ionicPopup) {
    var translate = $filter('translate');
    var reset = false;

    return function(error, connection, callback) {
      try {
        $delegate.apply($delegate, arguments);
      } catch (e) {
        // default handler throws error
      }

      var options = {
        title: error.name || translate('Error'),
        subTitle: error.message || '',
        buttons: [{
          text: translate('Ignore'),
          type: 'button-assertive',
          onTap: function() { return false; }
        }, {
          text: translate('Retry'),
          type: 'button-positive',
          onTap: function() { return true; }
        }]
      };
      if (error.data && error.data.message) {
        options.template = '<pre>' + error.data.message + '</pre>';
      }
      return $ionicPopup.show(options).then(function(retry) {
        if (!retry) {
          throw error;
        }
        if (reset) {
          connection.reset();
        } else {
          reset = true;
        }
        return connection(callback, true).finally(function() {
          reset = false;
        });
      });
    };
  });
})

.run(function($rootScope, $filter, $window, $log, $ionicPlatform, $cordovaAppVersion) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the
    // accessory bar above the keyboard for form inputs)
    if ($window.cordova && $window.cordova.plugins.Keyboard) {
      $window.cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    //if (window.StatusBar) {
    //  // org.apache.cordova.statusbar required
    //  StatusBar.styleDefault();
    //}
    document.addEventListener('deviceready', function() {
      $log.log('deviceready');
      $cordovaAppVersion.getAppVersion().then(function(version) {
        $log.log('appVersion: ' + version);
      });
    }, false);
  });

  // FIXME: how to handle $stateChangeError
  //$rootScope.$on('$stateChangeError', popup.stateChangeError);
});
