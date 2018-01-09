(function () {
    function ModalCtrl($uibModal, Room) {
        var modal = this;
        modal.newRoom = null;

        modal.create = function () {
            Room.add(modal.newRoom.name);
        };
    }

    angular
        .module('Chat-With-Me')
        .controller('ModalCtrl', ['$uibModal', 'Room', ModalCtrl]);
}());
