class Company {

    constructor() {

        this.departments = [];

        this.bestDepartmentsArray = [];
    }

    addEmployee(name, salary, position, department) {

        for (let el of [name, salary, position, department]) {

            if (el == '' || el == null || el == undefined) {

                throw 'Invalid input!';
            }
        }

        salary = Number(salary);

        if (salary <= 0) {

            throw 'Invalid input!';
        }

        let searchedDepartment = this.departments.find(obj => obj.department == department);

        if (!searchedDepartment) {

            this.departments.push({
                name,
                salary,
                position,
                department,
            });

            this.bestDepartmentsArray.push({
                averageSalary: 0,
                salaries: [salary],
                department
            });
        }
        else {

            let searchBestDepartment = this.bestDepartmentsArray.find(obj => obj.department == department);

            searchBestDepartment.salaries.push(salary);

            this.departments.push({
                name,
                salary,
                position,
                department: department
            });
        }

        return `New employee is hired. Name: ${name}. Position: ${position}`;
    }

    bestDepartment() {

        if (this.departments.length == 0) return '';

        for (let key in this.bestDepartmentsArray) {

            if (!this.bestDepartmentsArray[key].salaries) continue;

            let sum = this.bestDepartmentsArray[key].salaries.reduce((a, b) => a + b, 0);

            this.bestDepartmentsArray[key].averageSalary = sum / this.bestDepartmentsArray[key].salaries.length;
        }

        this.bestDepartmentsArray.sort((a, b) => b.averageSalary - a.averageSalary);

        let bestDepartment = this.bestDepartmentsArray[0];

        this.departments = this.departments.filter(el => el.department == bestDepartment.department);

        this.departments.sort((a, b) => b.salary - a.salary || a.name.localeCompare(b.name));

        let output = '';

        output += `Best Department is: ${bestDepartment.department}`;
        output += `\nAverage salary: ${bestDepartment.averageSalary.toFixed(2)}`;

        for (let key in this.departments) {

            output += `\n${this.departments[key].name} ${this.departments[key].salary} ${this.departments[key].position}`;
        }

        return output;
    }
}

let c = new Company();
// c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
console.log(c.bestDepartment());

'Best department is: Human resources\nAverage salary: 1675.00\nStanimir 2000 engineer\nGosho 1350 HR'
'Best Department is: Human resources\nAverage salary: 1675.00\nStanimir 2000 engineer\nGosho 1350 HR'