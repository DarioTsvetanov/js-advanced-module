class Bank {

    #bankName;

    constructor(bankName) {

        this.#bankName = bankName;
        this.allCustomers = [];
    }

    newCustomer(customerObj) {

        let customer = this.allCustomers.find(obj => obj.personalId == customerObj.personalId);

        if (customer) throw new Error(`${customerObj.firstName} ${customerObj.lastName} is already our customer!`);

        this.allCustomers.push(customerObj);

        return customerObj;
    }

    depositMoney(personalId, amount) {

        let person = this.allCustomers.find(obj => obj.personalId == personalId);

        if (!person) throw new Error('We have no customer with this ID!');

        person.totalMoney = !person.totalMoney ? amount : person.totalMoney + amount;

        if (!person.transactions) person.transactions = [`${person.firstName} ${person.lastName} made deposit of ${amount}$!`];
        else person.transactions.push(`${person.firstName} ${person.lastName} made deposit of ${amount}$!`);

        return `${person.totalMoney}$`;
    }

    withdrawMoney(personalId, amount) {

        let person = this.allCustomers.find(obj => obj.personalId == personalId);

        if (!person) throw new Error('We have no customer with this ID!');

        if (person.totalMoney < amount) throw new Error(`${person.firstName} ${person.lastName} does not have enough money to withdraw that amount!`);

        person.totalMoney -= amount;

        person.transactions.push(`${person.firstName} ${person.lastName} withdrew ${amount}$!`);

        return `${person.totalMoney}$`;
    }

    customerInfo(personalId) {

        let person = this.allCustomers.find(obj => obj.personalId == personalId);

        if (!person) throw new Error('We have no customer with this ID!');

        let output = [`Bank name: ${this.#bankName}`, `Customer name: ${person.firstName} ${person.lastName}`, `Customer ID: ${personalId}`, `Total Money: ${person.totalMoney}$`];

        if (person.transactions) {

            output.push('Transactions:')

            for (let i = person.transactions.length - 1; i >= 0; i --) {

                output.push(`${i + 1}. ${person.transactions[i]}`);
            }
        }   

        return output.join('\n');
    }
}

let bank = new Bank("SoftUni Bank");

console.log(bank.newCustomer({firstName: "Svetlin", lastName: "Nakov", personalId: 6233267}));
console.log(bank.newCustomer({firstName: "Mihaela", lastName: "Mileva", personalId: 4151596}));

bank.depositMoney(6233267, 250);
console.log(bank.depositMoney(6233267, 250));
bank.depositMoney(4151596,555);

console.log(bank.withdrawMoney(6233267, 125));

console.log(bank.customerInfo(6233267));

`Bank name: SoftUni Bank\nCustomer name: Svetlin Nakov\nCustomer ID: 1111111\nTotal Money: 375$\nTransactions:\n3. Svetlin Nakov withdrew 125$!\n2. Svetlin Nakov made deposit of 250$!\n1. Svetlin Nakov made deposit of 250$!`
`Bank name: SoftUni Bank\nCustomer name: Svetlin Nakov\nCustomer ID: 1111111\nTotal Money: 375$\nTransactions:\n3. Svetlin Nakov withdrew 125$!\n2. Svetlin Nakov made deposit of 250!\n1. Svetlin Nakov made deposit of 250!`