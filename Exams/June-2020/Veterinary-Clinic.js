class VeterinaryClinic {

    constructor(clinicName, capacity) {

        this.clinicName = clinicName;
        this.capacity = capacity;
        this.clients = [];
        this.totalProfit = 0;
        this.currentWorkload = 0;
    }

    newCustomer(ownerName, petName, kind, procedures) {

        if (this.currentWorkload == this.capacity) {

            throw new Error('Sorry, we are not able to accept more patients!');
        }

        let pet = this.clients.find(obj => obj.petName == petName);

        if (pet && pet.ownerName == ownerName) {

            throw new Error(`This pet is already registered under ${ownerName} name! ${petName} is
             on our lists, waiting for ${procedures.join(', ')}.`);
        }

        this.clients.push({
            ownerName,
            petName, 
            kind,
            procedures
        });

        this.currentWorkload ++;

        return `Welcome ${petName}!`;
    }

    onLeaving(ownerName, petName) {

        let owner = this.clients.find(obj => obj.ownerName == ownerName);
        
        if (!owner) {

            throw new Error('Sorry, there is no such client!');
        }

        owner = this.clients.find(obj => obj.petName == petName);

        if (!owner || owner.procedures.length == 0) {

            throw new Error(`Sorry, there are no procedures for ${petName}!`);
        }

        let bill = owner.procedures.length * 500;

        this.totalProfit += bill;

        this.currentWorkload --;

        owner.procedures = [];

        return `Goodbye ${petName}. Stay safe!`;
    }

    toString() {

        let output = [];

        /* let petWithProcedures = 0;

        this.clients.forEach(el => {

            if (el.procedures.length > 0) petWithProcedures ++;
        }); */

        output.push(`${this.clinicName} is ${Math.floor((this.currentWorkload / this.capacity) * 100)}% busy today!`, `Total profit: ${(this.totalProfit).toFixed(2)}$`);

        this.clients.sort((a, b) => a.ownerName.localeCompare(b.ownerName) || a.petName.localeCompare(b.petName));

        let lastClientName;

        let petsWithSameOwner = [];

        for (let client of this.clients) {

            petsWithSameOwner.push(client);

            if (lastClientName !== client.ownerName) {

                output.push(`${client.ownerName} with:`);
            }  
            
            output.push(`---${client.petName} - a ${(client.kind).toLowerCase()} that needs: ${client.procedures.join(', ')}`);

            lastClientName = client.ownerName;
        }

        return output.join('\n');
    }
}
let clinic = new VeterinaryClinic('SoftCare', 10);
console.log(clinic.newCustomer('Jim Jones', 'Tom', 'Cat', ['A154B', '2C32B', '12CDB']));
console.log(clinic.newCustomer('Anna Morgan', 'Max', 'Dog', ['SK456', 'DFG45', 'KS456']));
console.log(clinic.newCustomer('Jim Jones', 'Tiny', 'Cat', ['A154B'])); 
console.log(clinic.onLeaving('Jim Jones', 'Tiny'));
console.log(clinic.toString());
clinic.newCustomer('Jim Jones', 'Sara', 'Dog', ['A154B']); 
console.log(clinic.toString());


