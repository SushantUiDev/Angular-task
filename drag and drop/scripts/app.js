(function () {
    angular.module("myApp", []);

    angular.module("myApp")
        .controller("myCtrl", function ($scope) {
            //$scope.newTask={};
            $scope.items = [
                {
                    id: 1,
                    label: 'demo',
                    subItem: {
                        name: 'aSubItem'
                    }
                },
                {
                    id: 2,
                    label: 'analysis',
                    subItem: {
                        name: 'bSubItem'
                    }
                },
                {
                    id: 3,
                    label: 'draft',
                    subItem: {
                        name: 'bSubItem'
                    }
                },
                {
                    id: 4,
                    label: 'testing',
                    subItem: {
                        name: 'bSubItem'
                    }
               }];
            $scope.selected = $scope.items[0];
            console.log($scope.selected);

            $scope.listOfTask = [
                {
                    "category": "demo",
                    "taskName": "task1",
                    "description": "how are you.",
                    "analysis": "analyse1",
                    "draft": "sent",
                    "test": "ok"
            }
        ]

            $scope.analysisList = [
                {
                    "category": "demo",
                    "taskName": "task1",
                    "description": "how are you.",
                    "analysis": "analyse1",
                    "draft": "sent",
                    "test": "ok"
            }
        ]
            $scope.draftList = [
                {
                    "category": "demo",
                    "taskName": "task1",
                    "description": "how are you.",
                    "analysis": "analyse1",
                    "draft": "sent",
                    "test": "ok"
            }
        ]
            $scope.testingList = [
                {
                    "category": "demo",
                    "taskName": "task1",
                    "description": "how are you.",
                    "analysis": "analyse1",
                    "draft": "sent",
                    "test": "ok"
            }
        ]

            /*--== for demo task addedr =====*/
            $scope.addTask = function () {
                if ($scope.selected.label == "demo") {
                    console.log("demo here..");
                    $scope.listOfTask.push({
                        'category': $scope.category,
                        'taskName': $scope.taskName,
                        'description': $scope.description
                    });
                }
                if ($scope.selected.label == "analysis") {
                    console.log("analysis here..");
                    $scope.analysisList.push({
                        'category': $scope.category,
                        'taskName': $scope.taskName,
                        'description': $scope.description
                    });
                }
                if ($scope.selected.label == "draft") {
                    console.log("draft here..");
                    $scope.draftList.push({
                        'category': $scope.category,
                        'taskName': $scope.taskName,
                        'description': $scope.description
                    });
                }
                if ($scope.selected.label == "testing") {
                    console.log("testing here..");
                    $scope.testingList.push({
                        'category': $scope.category,
                        'taskName': $scope.taskName,
                        'description': $scope.description
                    });
                }
            }
        })
})();