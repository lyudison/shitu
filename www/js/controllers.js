angular.module('shitu.controllers', ['ionic'])

.controller('TabCtrl', function($scope, $ionicModal) {
  
  $ionicModal.fromTemplateUrl('templates/tab-publish.html', {
    scope: $scope, 
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });

  $scope.openModal = function() {
    $scope.modal.show();
  };

  $scope.closeModal = function() {
    $scope.modal.hide();
  };

  $scope.$on('$destroy', function() {
    $scope.modal.remove();
  });

  $scope.$on('modal.hidden', function() {
    // some actions
  });

  $scope.$on('modal.removed', function() {
    // some actions
  });
})

.controller('HomeCtrl', function($scope, pathManager, ugcManager) {

  $scope.query = '';
  $scope.isSearch = false;
  $scope.filter = '';
  $scope.hotpaths = pathManager.getHotPaths();
  $scope.qnas = ugcManager.getHotQnas();

  $scope.hotRegions = [
    6, 7, 8, 4
  ];
  $scope.eastRegions = [
    0, 1,
  ];
  $scope.northRegions = [
    4,
  ];
  $scope.regions = [
    // east region
    {title: '江苏', checked: false},
    {title: '浙江', checked: false},
    // south region
    {title: '广东', checked: false},
    {title: '广西', checked: false},
    // north region
    {title: '陕西', checked: false},
    // northwestern region
    {title: '新疆', checked: false},
    // west region
    {title: '西藏', checked: false},
    {title: '四川', checked: false},
    {title: '云南', checked: false},
  ];

  $scope.sports = [
    {title: '徒步', checked: false},
    {title: '登山', checked: false},
    {title: '骑行', checked: false},
    {title: '滑雪', checked: false},
    {title: '攀岩', checked: false},
  ];

  $scope.durations = [
    {title: '过夜', checked: false},
    {title: '1-4天', checked: false},
    {title: '4-7天', checked: false},
    {title: '7天', checked: false},
  ];

  $scope.showSearchPanel = function() {
    $scope.isSearch = true;
  };

  $scope.removeSearchPanel = function() {
    $scope.isSearch = false;
  };

  $scope.search = function() {
    $scope.suggests = pathManager.getPathsByQuery($scope.query);
  };

  $scope.toggleFilter = function(name) {
    $scope.filter = ($scope.filter==name? '': name);
  };

  $scope.hasFilter = function() {
    for (var i = 0; i < $scope.regions.length; i++) {
      if ($scope.regions[i].checked) {
        return true;
      }
    }
    for (var i = 0; i < $scope.sports.length; i++) {
      if ($scope.sports[i].checked) {
        return true;
      }
    }
    for (var i = 0; i < $scope.durations.length; i++) {
      if ($scope.durations[i].checked) {
        return true;
      }
    }
    return false;
  };
})

.controller('PathHomeCtrl', function($scope, $state, $stateParams, pathManager, ugcManager) {

  console.log($stateParams.pathId);
  // load resources
  $scope.path = pathManager.getPathById($stateParams.pathId);
  $scope.tips = ugcManager.getAllTips($stateParams.pathId);
  $scope.comments = ugcManager.getHotComments($stateParams.pathId);

  // record the path id (should be saved in path object in the future)
  $scope.path.id = $stateParams.pathId;

  // share some data
  $state.current.data.path.name = $scope.path.name;
  $state.current.data.path.id = $scope.path.id;
})

.controller('PathInfoCtrl', function($rootScope, $scope, $state, pathManager, ugcManager, bingmapkey) {
  
  $scope.path = $state.current.data.path;

  // load path introduction
  $scope.path.intro = pathManager.getPathIntroById($scope.path.id);

  // dispose map when navigate to other page
  // $scope.$on('$destroy', function() {
  //   map.dispose();
  // });

  // load the bing map
  var mapOptions = {
    credentials: bingmapkey,
    mapTypeId: Microsoft.Maps.MapTypeId.aerial,
    center: new Microsoft.Maps.Location(22.556219, 114.118790), // shenzhen
    zoom: 12
  };
  var map = new Microsoft.Maps.Map(document.getElementById("map"), mapOptions);
})

.controller('PathTravelsCtrl', function($scope, $state) {
  $scope.path = $state.current.data.path;
})

.controller('PathQnaCtrl', function($scope, $state) {
  $scope.path = $state.current.data.path;
})

.controller('DestCtrl', function($scope, pathManager) {

  $scope.query = '';
  $scope.filter = '';
  $scope.hotpaths = pathManager.getHotPaths();

  $scope.hotRegions = [
    6, 7, 8, 4
  ];
  $scope.eastRegions = [
    0, 1,
  ];
  $scope.northRegions = [
    4,
  ];
  $scope.regions = [
    // east region
    {title: '江苏', checked: false},
    {title: '浙江', checked: false},
    // south region
    {title: '广东', checked: false},
    {title: '广西', checked: false},
    // north region
    {title: '陕西', checked: false},
    // northwestern region
    {title: '新疆', checked: false},
    // west region
    {title: '西藏', checked: false},
    {title: '四川', checked: false},
    {title: '云南', checked: false},
  ];

  $scope.sports = [
    {title: '徒步', checked: false},
    {title: '登山', checked: false},
    {title: '骑行', checked: false},
    {title: '滑雪', checked: false},
    {title: '攀岩', checked: false},
  ];

  $scope.durations = [
    {title: '过夜', checked: false},
    {title: '1-4天', checked: false},
    {title: '4-7天', checked: false},
    {title: '7天', checked: false},
  ];

  $scope.search = function() {
    $scope.suggests = pathManager.getPathsByQuery($scope.query);
  };

  $scope.toggleFilter = function(name) {
    $scope.filter = ($scope.filter==name? '': name);
  };

  $scope.hasFilter = function() {
    for (var i = 0; i < $scope.regions.length; i++) {
      if ($scope.regions[i].checked) {
        return true;
      }
    }
    for (var i = 0; i < $scope.sports.length; i++) {
      if ($scope.sports[i].checked) {
        return true;
      }
    }
    for (var i = 0; i < $scope.durations.length; i++) {
      if ($scope.durations[i].checked) {
        return true;
      }
    }
    return false;
  };
})

.controller('PublishCtrl', function($scope) {

})

.controller('CommunityCtrl', function($scope) {

})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
