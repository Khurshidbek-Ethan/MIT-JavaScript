// Classlar bizga shablon sifatida xizmat qilib uni yordamida bir-biriga yaqin bolgan objectlarni qurishimiz mumkun
class Person{
    // state
    name;
    age;


    // constructor
    constructor(name, age){
        this.name =name 
        this.age = age
    }

    //methods
    introduce(){
        console.log(`Good morning mr. I am  ${this.name} and I am ${this.age} years old!`)
    }
}

const waiter = new Person("Ethan", 31)
waiter.introduce()