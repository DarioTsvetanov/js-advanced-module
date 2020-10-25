function solveClasses() {

    class Developer {

        constructor(firstName, lastName) {

            this.firstName = firstName;
            this.lastName = lastName;
            this.baseSalary = 1000;
            this.tasks = [];
            this.experience = 0;
        }

        addTask(id, taskName, priority) {

            let obj = {
                id,
                taskName,
                priority
            }

            if (priority == 'high') this.tasks.unshift(obj);
            else this.tasks.push(obj);

            return `Task id ${id}, with ${priority} priority, has been added.`
        }

        doTask() {

            this.tasks.shift();

            return `${this.firstName}, you have finished all your tasks. You can rest now.`;
        }

        getSalary() {

            return `${this.firstName} ${this.lastName} has a salary of: ${this.baseSalary}`;
        }

        reviewTasks() {

            let output = ['Tasks, that need to be completed:'];

            this.tasks.forEach(el => {

                output.push(`${el.id}: ${el.taskName} - ${el.priority}`);
            });

            return output.join('\n');
        }
    }

    class Junior extends Developer {

        constructor(firstName, lastName, bonus, experience) {

            super(firstName, lastName);

            this.baseSalary = 1000 + bonus;
            this.tasks = [];
            this.experience = experience;
        }

        learn(n) {

            this.experience += n;
        }
    }

    class Senior extends Developer {

        constructor(firstName, lastName, bonus, experience) {

            super(firstName, lastName);

            this.baseSalary = 1000 + bonus;
            this.tasks = [];
            this.experience = experience + 5;
        }

        changeTaskPriority(taskId) {

            let copy = [];

            this.tasks.forEach(el => {

                if (el.priority == 'high') {

                    copy.push({
                        id: el.id,
                        taskName: el.taskName,
                        priority: 'low' 
                     });
                }
                else if (el.priority == 'low') {

                    copy.unshift({
                        id: el.id,
                        taskName: el.taskName,
                        priority: 'high' 
                    });
                }
                console.log(el);
            });

            this.tasks = copy;

            return this.tasks[taskId];
        }
    }

    return {
        Developer,
        Junior,
        Senior
    }
}

let classes = solveClasses();
const developer = new classes.Developer("George", "Joestar");
/* console.log(developer.addTask(1, "Inspect bug", "low"));
console.log(developer.addTask(2, "Update repository", "high"));
console.log(developer.reviewTasks());
console.log(developer.getSalary());

const junior = new classes.Junior("Jonathan", "Joestar", 200, 2);
console.log(junior.getSalary()); */

const senior = new classes.Senior("Joseph", "Joestar", 200, 2);
senior.addTask(1, "Create functionality", "low");
senior.addTask(2, "Update functionality", "high");
console.log(senior.changeTaskPriority(1)["priority"]);