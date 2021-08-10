class Person{
    constructor(firstName, lastName, dob){
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = new Date(dob);
    }

    greeting(){
        return `Hello there ${this.firstName} ${this.lastName}`;
    }

    calculateAge(){
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    getsMarried(newlastName){
        this.lastName = newlastName;
    }
}

const anne = new Person('Anne', 'Marrie', '09-29-1989');
console.log(anne);
console.log(anne.greeting());
console.log(anne.calculateAge());
anne.getsMarried('Johnson');
console.log(anne.greeting());

//Super sub classes

class Orang{
    constructor(namaDepan, namaBelakang){
        this.namaDepan = namaDepan;
        this.namaBelakang = namaBelakang;
    }

    greeting(){
        return `Hello there ${this.namaDepan} ${this.namaBelakang}`;
    }
}

class Customer extends Orang{
    constructor(namaDepan, namaBelakang, nohp, membership){
        super(namaDepan, namaBelakang);
        this.nohp = nohp;
        this.membership = membership;
    }
    static getMembershipcost(){
        return 500;
    }
}

const john = new Customer('John', 'Vargochev','08123456789', 'Standard');
console.log(john.greeting())

console.log(john.namaDepan + ' ' + john.namaBelakang + ' Bayar : ' + Customer.getMembershipcost() + ' Buat membership');