(function () {
    "use strict";
    function CookiesCtrl($cookies, $uibModalInstance) {
        this.setUsername = function (username) {
            $uibModalInstance.close($cookies.put('blocChatCurrentUser', username));
        };
    }

    angular
        .module('Chat-With-Me')
        .controller('CookiesCtrl', ['$cookies', '$uibModalInstance', CookiesCtrl]);
}());
