var myApp = angular.module('myApp', []);

function MyCtrl($scope) {
    $scope.rows = [{
            "branch": "default",
            "comment": "",
            "name": "20141228.150706",
            "score": "0.45000",
            "time": "0.02"
        },
        {
            "branch": "default",
            "comment": "",
            "name": "20141226.022147",
            "score": "0.56000",
            "time": "6.00"
        },
        {
            "branch": "default",
            "comment": "",
            "name": "20141226.022112",
            "score": "0.56000",
            "time": "3.00"
        },
        {
            "branch": "default",
            "comment": "",
            "name": "20141226.021955",
            "score": "0.55000",
            "time": "3.00"
        },
        {
            "branch": "default",
            "comment": "",
            "name": "20141226.021920",
            "score": "0.49000",
            "time": "10.00"
        }
    ];
    $scope.cols = Object.keys($scope.rows[0]);
}