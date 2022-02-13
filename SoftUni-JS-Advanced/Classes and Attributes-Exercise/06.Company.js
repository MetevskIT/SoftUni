class Company {

    constructor() {
        this.departments = {};
    }

    addEmployee(name, salary, position, department) {
        if (!name || !salary || !position || !department || Number(salary) < 0) {
            throw new Error('Invalid input!')
        } else {
            if (!this.departments[department]) {
                this.departments[department] = {};
                this.departments[department]['arr'] = [];
                this.departments[department]['avrage'] = () => {
                    let result = 0;
                    for (const element of this.departments[department]['arr']) {

                        result += element.salary;
                    }
                    return result / this.departments[department]['arr'].length;
                }

                this.departments[department]['sort'] = () => {
                    this.departments[department]['arr'].sort((a, b) => b.salary - a.salary|| a['name'].localeCompare(b['name']));
                }

            }
            let currObj = {
                name,
                salary,
                position
            }
            this.departments[department]['arr'].push(currObj);
            return `New employee is hired. Name: ${name}. Position: ${position}`

        }
    }

    bestDepartment() {
        let bestDepartment ='';
        let higgestSalary=0;
        for (const key in this.departments) {
            if (this.departments[key].avrage()>higgestSalary) {
                higgestSalary=this.departments[key].avrage();
                bestDepartment = key;
            }
        }
       
        this.departments[bestDepartment].sort();
        return `Best Department is: ${bestDepartment}\nAverage salary: ${this.departments[bestDepartment].avrage().toFixed(2)}\n${this.departments[bestDepartment].arr.map(el => `${el.name} ${el.salary} ${el.position}`).join('\n')}`;
        
    }
}
let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
