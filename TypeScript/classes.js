var Employee = /** @class */ (function () {
    function Employee(empId) {
        this.empId = empId;
    }
    return Employee;
}());
var emp = new Employee(12);
console.log(JSON.stringify(emp));
