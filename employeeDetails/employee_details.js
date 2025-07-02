
const employees = [
    {id: 1, name: "Adarsh", age: 22, department: "IT", salary: 500000},
    {id: 2, name: "Anjali", age: 25, department: "HR", salary: 60000},
    {id: 3, name: "Ravi", age: 30, department: "Finance", salary: 70000},
];

const employeesDetails = employees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.age} - ${employee.department} - ${employee.salary}</p>`).join("");
document.getElementById("employeesDetails").innerHTML = employeesDetails;

function calculateTotalSalaries() {
    const totalSalaries = employees.reduce((total, employee) => total + employee.salary, 0);
    alert(`Total Salaries: $${totalSalaries}`);
}

function displayHREmployees(){
    const hrEmployees = employees.filter((employee) => employee.department === "HR");
    const hrDetails = hrEmployees.map((employee, index) => `<p>${employee.name}: ${employee.age} - ${employee.department} - ${employee.salary}</p>`).join("");
    document.getElementById("hrEmployees").innerHTML = hrDetails;
}

function findEmployeeByID(employeeID) {
    const employee = employees.find((emp) => emp.id === employeeID);
    if (employee) {
        alert(`Employee Found: ${employee.name}, Age: ${employee.age}, Department: ${employee.department}, Salary: $${employee.salary}`);
    } 
    else {
        alert("Employee not found");
    }
}