

class Employee{
    empId:number;
    constructor(empId:number){
    this.empId=empId;
    }
}

let emp = new Employee(12);
console.log(JSON.stringify(emp));
