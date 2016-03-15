
export default function ConsoleController($scope) {
  const vm = $scope;
  const formData = vm.formData = { message: 'abc' };

  vm.click = function click() {
    formData.message = 'this is message from console controller';
  };

  return vm;
}

ConsoleController.$inject = ['$scope'];
