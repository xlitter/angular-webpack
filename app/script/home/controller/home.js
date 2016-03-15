export default function HomeController($scope) {
  const vm = $scope;
  const formData = vm.formData = {};

  vm.setName = function setName() {
    formData.name = 'this is name from setName';
  };

  return vm;
}

HomeController.$inject = ['$scope'];
