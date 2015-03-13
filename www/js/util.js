angular.module('mopidy-mobile.util', [])

.constant('util', {
  contains: function(obj, value) {
    if (Array.isArray(obj)) {
      return obj.indexOf(value) >= 0;
    } else {
      for (var name in obj) {
        if (obj[name] === value) {
          return true;
        }
      }
      return false;
    }
  },

  remove: function(obj, value) {
    if (Array.isArray(obj)) {
      for (var i = obj.indexOf(value); i >= 0; i = obj.indexOf(value, i)) {
        obj.splice(i, 1);
      }
    } else {
      for (var name in obj) {
        if (obj[name] === value) {
          delete obj[name];
        }
      }
    }
    return obj;
  },

  zipObject: function(keys, values) {
    var obj = {};
    for (var i = 0, length = keys.length; i !== length; ++i) {
      obj[keys[i]] = values[i];
    }
    return obj;
  },

  fromKeys: function(keys, value) {
    var obj = {};
    for (var i = keys.length - 1; i >= 0; --i) {
      obj[keys[i]] = value;
    }
    return obj;
  },

  parseURI: function(uri) {
    var m = /^(?:([^:\/?#]+):)?(?:\/\/([^\/?#]*))?([^?#]*)(?:\?([^#]*))?(?:\#(.*))?/.exec(uri);
    if (m[2]) {
      Array.prototype.push.apply(m, /^(?:(.*)@)?(.*?)(?::(\d*))?$/.exec(m[2]));
    }
    return {
      scheme: m[1],
      authority: m[2],
      path: m[3],
      query: m[4],
      fragment: m[5],
      userinfo: m[7],
      host: m[8],
      port: m[9]
    };
  }
});