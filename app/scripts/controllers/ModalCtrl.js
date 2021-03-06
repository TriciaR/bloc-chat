(function() {
  function ModalCtrl($uibModalInstance, Room) {
      this.create = function() {
          Room.add(this.room);
          $uibModalInstance.dismiss('cancel');
      };
      
      this.cancel = function() {
          $uibModalInstance.dismiss('cancel');
      };
  };

  angular
      .module('blocChat')
      .controller('ModalCtrl', ['$uibModalInstance','Room', ModalCtrl]);
})();
