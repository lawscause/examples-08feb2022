//declares a class called Person
class Person {

    //a name property
    name;

    //an age property
    age;
  
    //a constructor that takes a name parameter that is used to 
    //initialize the new object's name property and age property
    //and defaults age to 15
    constructor(name, age=15) {
        this.name = name;
        this.age = age;
      }
  
    //an introduceSelf() method that can 
    //refer to the object's properties using this
    introduceSelf() {
      console.log(`Hi! I'm ${this.name} and I am ${this.age} years old.`);
    }
  
  }

  //The class Professor inherits from Person
  class Professor extends Person {
    //Professor adds a new teaches property 
    teaches;
  
    //to create a new Professor instance
    //name and teaches must be passed to the constructor
    constructor(name, teaches) {
      super(name);
      this.teaches = teaches;
    }
  
    //this overrides the Person class' 
    //introduceSelf() 
    introduceSelf() {
      console.log(`My name is ${this.name}, and I will be your ${this.teaches} professor.`);
    }
  
    //this method is added for Professor
    grade(paper) {
      const grade = Math.floor(Math.random() * (5 - 1) + 1);
      console.log(grade);
    }
  
  }

  class Student extends Person {

    //#year is a private data property
    //this means that the value can be used internally
    //but if code outside of the object attempts to
    //access #year the browser throws an error
    #year;
  
    constructor(name, age, year) {
      super(name, age);
      this.#year = year;
    }


    introduceSelf() {
      console.log(`Hi! I'm ${this.name}, and I'm in year ${this.#year}.`);
    }
  
    canStudyCoding() {
      return this.#year > 1;
    }

    //the public method promote 
    promote() {
        //when a student is promoted they advance a year.
        this.#advanceAYear();
    }

    //the private method #advanceAYear
    //attempting to call this outside of this
    //object will throw an error.
    #advanceAYear(){
        console.log("The student has advanced a Year");
        this.year++;
    }
  
  }


const myArray = new Array(1,2);
myArray.push(9);

const ava = new Person("Ava");
ava.introduceSelf();

const naomi = new Professor("Naomi", "History");
naomi.introduceSelf();

const kim = new Student("Kim", 17, 11);
kim.introduceSelf();

