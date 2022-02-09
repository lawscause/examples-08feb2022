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

    sayHello() {
        console.log("Hello Everyone!");
    }
  
  }

  //The class Professor inherits from Person
  class Professor extends Person {
    //Professor adds a new teaches property 
    teaches;
  
    //to create a new Professor instance
    //name and teaches must be passed to the constructor
    constructor(name, teaches, age) {
      super(name, age);
      this.teaches = teaches;
    }
  
    //this overrides the Person class' 
    //introduceSelf() 
    introduceSelf() {
      console.log(`My name is ${this.name}, and I will be your ${this.teaches} professor. My age is ${this.age}`);
    }
  
    //this method is added for Professor
    grade() {
      const grade = Math.floor(Math.random() * (5 - 1) + 1);
      console.log(grade);
      return grade;
    }
  
  }

  class Student extends Person {

    //#year is a private data property
    //this means that the value can be used internally
    //but if code outside of the object attempts to
    //access #year the browser throws an error
    #year;
    courses =[];
  
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

    addACourse(aCourse) {
        this.courses.push(aCourse);
    }

    //the public method promote 
    promote() {
        //when a student is promoted they advance a year.
        this.#advanceAYear();
        this.courses = [];
    }

    //the private method #advanceAYear
    //attempting to call this outside of this
    //object will throw an error.
    #advanceAYear(){
        console.log("The student has advanced a Year");
        this.year++;
    }
  
  }

  class Assignment {
      title;
      grade;

      constructor(title, grade) {
          this.title = title;
          this.grade = grade;
      }
  }

  class ResearchPaper extends Assignment {
      length;
      subject;
      dueDate;

      constructor(title, grade, length, subject, dueDate) {
        super(title, grade);
        this.length = length;
        this.subject = subject;
        this.dueDate = dueDate;
      }

      showPaper() {
          console.log(`My paper ${this.title} is about ${this.subject} it is(was) due ${this.dueDate}. I received a ${this.grade}`);
      }

      setGrade(grade) {
          this.grade = grade;
      }

  }

/*
const myArray = new Array(1,2);
myArray.push(9);

const ava = new Person("Ava");
ava.introduceSelf();
ava.sayHello();





const kim = new Student("Kim", 17, 11);
kim.introduceSelf();
kim.promote();
kim.#advanceAYear();
*/

const naomi = new Professor("Naomi", "History");
naomi.introduceSelf();
naomi.sayHello();

const historypaper = new ResearchPaper("My Title", 0, 10, "Art History", Date.now());
historypaper.setGrade(naomi.grade());
historypaper.showPaper();

