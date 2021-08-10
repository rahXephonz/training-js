const personPrototypes = {
    greeting: function(){
        return `Hello There ${this.firstname} ${this.lastname}`;
    },
    // tidak bisa diakses dari cara 2
    getMarried : function(newLastname){
        this.lastname = newLastname;
    }
}

// gabungan dengan object diatas cara 1
const Anne = Object.create(personPrototypes);
Anne.firstname = 'Anne';
Anne.lastname = 'Marrie';
Anne.age = 31;

console.log(Anne);
Anne.getMarried('Johnson');
console.log(Anne.greeting());

// gabungan dengan value object cara 2
const rizky = Object.create(personPrototypes, {
    firstname: {value : 'Muhammad'},
    lastname: {value : 'Rizky'},
    age : {value : 18}
});

console.log(rizky);
console.log(rizky.greeting());