function solve() {

    class Employee {

        constructor(name, age) {
            if (new.target === Employee) {

                throw new Error('Cannot instantiate directly.');
            }
            this.name = name;
            this.age = age;
            this.salary = 0;
            this.tasks = [];
        }

        work() {

           let currentTask = this.tasks.shift();

           console.log(`${this.name} ${currentTask}`);

           this.tasks.push(currentTask);
        }

        collectSalary() {

            console.log(`${this.name} received ${this.dividend ? this.salary + this.dividend : this.salary} this month.`);
        }

        getSalary() {
            
            return this.salary;
        }
    }

    class Junior extends Employee {

        constructor(name, age) {

            super(name, age);

            this.tasks.push('is working on a simple task.');
        }
    }

    class Senior extends Employee {

        constructor(name, age) {

            super(name, age);

            this.tasks.push('is working on a complicated task.', 'is taking time off work.', 'is supervising junior workers.');
        }
    }

    class Manager extends Employee {

        constructor(name, age) {

            super(name, age);

            this.dividend = 0;
            this.tasks.push('scheduled a meeting.', 'is preparing a quarterly report.');
        }

        getSalary() {

            return (this.salary + this.dividend);
        }
    }

    return {
        Employee,
        Junior,
        Senior,
        Manager
    }
}
let result = solve();
var guy1 = new result.Junior('dragan', 23);
var guy1parent = Object.getPrototypeOf(Object.getPrototypeOf(guy1));
var guy2 = new result.Senior('petkan', 24);
var guy2parent = Object.getPrototypeOf(Object.getPrototypeOf(guy2));
var guy3 = new result.Manager('bojan', 25);
var guy3parent = Object.getPrototypeOf(Object.getPrototypeOf(guy3));
guy3.salary = 3000;
guy3.collectSalary();
guy3.dividend = 500;
console.log(guy3.dividend);
guy3.collectSalary();
guy1.collectSalary()