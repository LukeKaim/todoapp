'use strict';

angular.module('todoWebApp')
    .service('TodoService', function ($http) {
        return {
            list: function () {
                return $http.get('/api/todo');
            },

            add: function (task) {
                return $http.post('/api/todo', {
                    task: task
                });
            },

            update: function (task_id, task) {
                return $http.put('/api/todo/' + task_id, task);
            },

            markAllComplete: function () {
                return $http.put('/api/todo');
            }
        }
    });
