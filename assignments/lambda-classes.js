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
        console.log(`${pupil.name} has submitted a PR for ${subject}`);
    }
    sprintChallenge(subject){
        console.log(`${pupil.name} has begun sprint challenge on ${subject}.`);
    }
}

class ProjectManager extends Instructor{
    constructor(helper){
        super(helper)
        this.gradClassName = helper.gradClassName;
        this.favInstructor = helper.favInstructor;
    }
    standUp(channel){
        console.log(`${helper.name} announces to ${channel}, @channel standy times! `);
    }
    debugsCode(helper){
        console.log(`${helper} debugs ${student.name}'s code on ${subject}`);
    }
}

const york = new ProjectManager ({
    name: 'York',
    age: 31,
    location: 'New York City',
    specialty: 'balling',
    favLanguage: 'JavaScript',
    catchPhrase: 'wow that worked',
    gradClassName: 'web20',
    favInstructor: 'Dan Levy',
});

const gabe = new ProjectManager ({
    name: 'Gabe',
    age: 30,
    location: 'New York City',
    specialty: 'hatchet throwing',
    favLanguage: 'Python',
    catchPhrase: `didn't see that coming`,
    gradClassName: 'web17',
    favInstructor: 'Josh Knell',
});

console.log((gabe.gradClassName));