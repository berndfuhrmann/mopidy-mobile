angular.module('mopidy-mobile.ui', [
  'ionic',
  'pascalprecht.translate'
])

.factory('popoverMenu', function($filter, $ionicPopover) {
  var translate = $filter('translate');  // filter is synchronous

  return function(items, options) {
    var template = [];
    template.push('<ion-popover-view class="mopidy-mobile-menu">');
    template.push('<ion-content scroll="false">');  // TODO: options
    template.push('<ion-list>');
    angular.forEach(items, function(item) {
      if (item.model) {
        template.push('<ion-checkbox ng-model="' + item.model + '"');
      } else {
        template.push('<button class="item"');
      }
      if (item.change) {
        template.push(' ng-change="' + item.change + '"');
      }
      if (item.click) {
        template.push(' ng-click="' + item.click + '"');
      }
      if (item.disabled) {
        template.push(' ng-disabled="' + item.disabled + '"');
      }
      template.push('>');
      template.push(translate(item.text));
      if (item.hellip) {
        template.push('&hellip;');
      }
      template.push(item.model ? '</ion-checkbox>' : '</button>');
    });
    template.push('</ion-list>');
    template.push('</ion-content>');
    template.push('</ion-popover-view>');
    return $ionicPopover.fromTemplate(template.join(''), options);
  };
})

.factory('popup', function($filter, $rootScope, $ionicPopup) {
  var translate = $filter('translate');  // filter is synchronous

  return {
    alert: function(message) {
      return $ionicPopup.alert({
        title: translate(message),
        okText: translate('OK')
      });
    },
    confirm: function(message) {
      return $ionicPopup.confirm({
        title: translate(message),
        okText: translate('OK'),
        cancelText: translate('Cancel')
      });
    },
    prompt: function(text, placeholder) {
      return $ionicPopup.prompt({
        title: translate(text),
        inputPlaceholder: placeholder,
        okText: translate('OK'),
        cancelText: translate('Cancel')
      });
    },
    fromTemplateUrl: function(title, templateUrl) {
      var scope = $rootScope.$new(true);
      scope.data = {};
      return $ionicPopup.show({
        templateUrl: templateUrl,
        title: translate(title),
        scope: scope,
        buttons: [
          { text: translate('Cancel') },
          {
            text: translate('OK'),
            type: 'button-positive',
            onTap: function() {
              return scope.data;
            }
          }
        ]
      });
    }
  };
})

.factory('scroll', function($document, $log, $timeout, $ionicScrollDelegate) {
  return {
    anchorScroll: function(handle, id, shouldAnimate) {
      var left = 0, top = 0;
      for (var e = $document[0].getElementById(id); e; e = e.offsetParent) {
        left += e.offsetLeft;
        top += e.offsetTop;
      }
      $timeout(function() {
        $log.debug('anchorScroll', left, top);
        var delegate = $ionicScrollDelegate.$getByHandle(handle);
        if (delegate) {
          delegate.scrollTo(left, top - 100, shouldAnimate);
        }
      });
    }
  };
});
