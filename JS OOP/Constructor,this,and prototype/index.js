function Person(firstname, lastname, dob){
    this.firstname = firstname;
    this.lastname = lastname;
    this.birthday = new Date(dob);
}

//Calculate age with Prototype fungsi ini bisa digunakan untuk menghindari
//properti dari method person

Person.prototype.calculateAge = function() {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    // penghitungan calculator umur menggunakan math function
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

Person.prototype.getFullName = function(){
    return `${this.firstname} ${this.lastname}`;
}

// Is married?

Person.prototype.getMarried = function(newLastname) {
    this.lastname = newLastname;
}
//Object.prototype
const person1 = new Person('Muhammad', 'Rizky', 'September 27 2002');
const person2 = new Person('Anne', 'Marrie', 'October 09 1998');

console.log(person1);
console.log(person1.calculateAge());

console.log(person2.getFullName());

person2.getMarried('Johnson');
console.log(person2.getFullName());

console.log(person2.hasOwnProperty('firstname'));

//bukan bagian dari properti itu sendiri
console.log(person2.hasOwnProperty('getFullname'));

