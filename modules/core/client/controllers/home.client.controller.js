'use strict';

angular.module('core').controller('HomeController', ['$scope', 'Authentication',
  function ($scope, Authentication) {
    // This provides Authentication context.
    $scope.authentication = Authentication;

    $scope.itns = [
      {
        icon: '/images/san-francisco-1200xx2122-1194-0-111.jpg',
        name: 'SFO in a day',
        days: '1',
        type: 'Leisure',
        rating: '8/10',
        cost: '$$'
      },
      {
        icon: 'images/The.Holman.Ranch.jpg',
        name: 'Carmel valley/Monterey',
        days: '2',
        type: 'Outdoor activities',
        rating: '9/10',
        cost: '$'
      },
      {
        icon: '/images/310px-Miami_skyline.jpg',
        name: 'Miami',
        days: '3',
        type: 'Family fun',
        rating: '6/10',
        cost: '$$$'
      },
      {
        icon: '/images/Tahoe_North_Shore_from_the_East_Shore.jpg',
        name: 'Lake Tahoe',
        days: '1',
        type: 'Winter activities',
        rating: '10/10',
        cost: '$$'
      },
      {
        icon: '/images/411.jpg',
        name: 'Sausalito',
        days: '1',
        type: 'Leisure',
        rating: '7/10',
        cost: '$'
      }
    ];
  }
]);
