// CODE here for your Lambda Classes

class Person {
    constructor(attributes) {
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
    }
    speak (){
        return `Hello my name is ${this.name}, I am from ${this.location}.`;
    }
}

class Instructor extends Person {
    constructor(teacher) {
       super(teacher) 
       this.specialty = teacher.specialty;
       this.favLanguage = teacher.favLanguage;
       this.catchPhrase = teacher.catchPhrase;
    }
       demo(subject){
           return `Today we are learning about ${subject} where subject is the param passed in.`;
       }
       grade(student){
           console.log(`${student.name} receives a perfect score on ${subject}.`);
       } 
    
}

class Student extends Person {
    constructor(pupil){
        super(pupil)
        this.previousBackground = pupil.previousBackground;
        this.className = pupil.className;
        this.favSubjects = pupil.favSubjects;
    }
    listsSubjects(){
        console.log(subject);
    }
    prAssignment(subject){
        console.log(`${student.name} has submitted a PR for ${subject}`);
    }
    sprintChallenge(subject){
        console.log(`${student.name} has begun sprint challenge on ${subject}.`);
    }
}