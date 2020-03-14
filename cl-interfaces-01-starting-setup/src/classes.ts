abstract class Department {

    static fiscalYear = 2020;

    protected employees: string[] = [];

    constructor(protected readonly id: string,  public name: string) {}

    abstract describe(this: Department): void;

    static createEmployee(name: string) {
        return { name }
    }

    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    printEmployeesInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

class ITDepartment extends Department {
    admins: string[];

    constructor(id: string, admins: string[]) {
        super(id, 'IT');
        this.admins = admins;
    }

    describe(): void {
        console.log('IT Department - ID: ' + this.id)
    }
}

const it = new ITDepartment('d1', ["Dima"]);

class AccountingDepartment extends Department {
    private lastReport: string;
    private static instanse: AccountingDepartment;

    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }

        throw new Error('No Report Found')
    }

    set mostRecentReport(value: string) {

        if (value) {
            throw new Error('Please pass in a valid value!');
        }

        this.addReport(value);
    }

    private constructor(id: string, private reports: string[]) {
        super(id, 'Accounting');
        this.lastReport = reports[0];
    }

    static getInstance() {
        if (AccountingDepartment.instanse) {
            return this.instanse;
        }

        this.instanse = new AccountingDepartment('d2', []);

        return this.instanse;
    }

    addEmployee(name: string) {
        if (name === 'Dima') {
            return;
        }
        this.employees.push(name);
    }

    addReport(text: string) {
        this.reports.push(text);
        this.lastReport = text;
    }

    printReports() {
        console.log(this.reports);
    }

    describe() {
        console.log('Accounting Department - ID' +  this.id);
    }
}

const accounting = AccountingDepartment.getInstance();

// console.log(accounting.mostRecentReport);

console.log(Department.createEmployee('Dima'), Department.fiscalYear);

accounting.addReport('Something went wrong');

accounting.addEmployee('Dima');
accounting.addEmployee('Vlad');

accounting.describe();

accounting.printReports();