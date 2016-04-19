angular.module('shitu.services', ['ionic'])

.factory('pathManager', function() {

  var paths = [
    {name: '洛克线A'},
    {name: '墨脱'},
    {name: '洛克线B'},
    {name: '喜马拉雅山'},
    {name: '莲花山'},
    {name: '翠竹公园'},
    {name: '黄石国家公园'},
    {name: '富士山'},
    {name: '川藏线'},
  ];

  return {
    getAllPaths: function() {
      return paths;
    },
    getPathsByQuery: function(query) {
      if (!query) {
        return [];
      }
      return paths.filter(function(item) {
        var itemDoesMatch = 
          item.name.toLowerCase().indexOf(query.toLowerCase()) > -1 ||
          item.name.toLowerCase().indexOf(query.toLowerCase()) > -1;
        return itemDoesMatch;
      });
      var result = [];
      for (var i = 0; i < 10; i++) {
        result.push({name: query.concat(i)});
      }
      return result;
    },
    getPathById: function(pathId) {
      return paths[pathId];
    },
    getPathIntroById: function(pathId) {
      return paths[pathId];
    },
    getHotPaths: function() {
      return paths;
    }
  };
})

.factory('ugcManager', function() {

  var qnas = [
    {
      title: '稻城的老司机哪里去找？', 
      author: 'tooyoung', 
      datetime: '2016/03/02 15:30 PM',
      nComment: 10 
    },
    {
      title: '稻城的老司机哪里去找？', 
      author: 'tooyoung', 
      datetime: '2016/03/02 15:30 PM',
      nComment: 10 
    }
  ];

  var tips = [
    {
      title: '墨脱地区连日大雨，解放大街前段严重塌方。大家小心！', 
      author: 'tooyoung', 
      datetime: '2016/03/02 15:30 PM',
      nComment: 3
    },
    {
      title: '墨脱地区连日大雨，解放大街前段严重塌方。大家小心！', 
      author: 'tooyoung', 
      datetime: '2016/03/02 15:30 PM',
      nComment: 3
    },
  ];

  var comments = [
    {
      author: 'tooyoung',
      date: '2016/03/02',
      content: '莲花圣境名不虚传，热带雨林，高原险境一股脑全部体验到了。景色并没有很宏伟，但一路经历很难忘。',
      roadRate: 3,
      weatherRate: 2,
      supplyRate: 4, 
      bodyRate: 5
    }
  ];

  return {
    getAllQnas: function(pathId) {
      return qnas;
    },
    getHotQnas: function() {
      return qnas;
    },
    getAllTips: function(pathId) {
      if (pathId == 1) {
        return tips;
      }
      return null;
    },
    getHotComments: function(pathId) {
      return comments;
    }
  };
})

.filter('makeRange', function() {
  return function(input) {
    var lowBound, highBound;
    switch (input.length) {
    case 1:
      lowBound = 0;
      highBound = parseInt(input[0]) - 1;
      break;
    case 2:
      lowBound = parseInt(input[0]);
      highBound = parseInt(input[1]);
      break;
    default:
      return input;
    }
    var result = [];
    for (var i = lowBound; i <= highBound; i++)
      result.push(i);
    return result;
  };
})

.directive('hideTabs', function($rootScope) {
  return {
    restrict: 'A',
    link: function(scope) {
      $rootScope.hideTabs = 'tabs-item-hide';
      scope.$on('$destroy', function() {
        $rootScope.hideTabs = '';
      });
    }
  };
})

.constant('bingmapkey','ArmaiPeeLH0o-1EEHgf_TY3iKyPf3r66ZdGKFwyuoKi9lXTzbIg-RZAhNSRyBJPt');
