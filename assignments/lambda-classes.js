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
       grade(student, subject){
           return `${student.name} receives a perfect score on ${subject}.`;
       } 
    
}



class Student extends Person {
    constructor(pupil){
        super(pupil)
        this.previousBackground = pupil.previousBackground;
        this.className = pupil.className;
        this.favSubjects = pupil.favSubjects;
    }
    listsSubjects(favSubjects){
            favSubjects.map(function (sub){
                return sub;
            });
    }
    prAssignment(subject){
        return `${this.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge(subject){
        return `${this.name} has begun sprint challenge on ${subject}.`;
    }
}




class ProjectManager extends Instructor{
    constructor(helper){
        super(helper)
        this.gradClassName = helper.gradClassName;
        this.favInstructor = helper.favInstructor;
    }
    standUp(channel){
        return (`${this.name} announces to ${channel}, @channel standy times! `);
    }
    debugsCode(student, subject){
        return `${this.name} debugs ${student.name}'s code on ${subject}`;
    }
}


const charlie = new Person ({
    name: 'Charlie',
    age: 25,
    location: 'Venus',
});

const lauren = new Person ({
    name: 'Lauren',
    age: 24,
    location: 'Oregon',
});

const gold = new Instructor({
    name: 'Goldfinger',
    age: 65,
    location: 'underground lair',
    specialty: 'evil plots',
    favLanguage: 'Java',
    catchPhrase: 'No Mr. Bond I expect you to die',
});

const bond = new Instructor({
    name: 'James Bond',
    age: 55,
    location: 'the Milky Way',
    specialty: 'throwing knives',
    favLanguage: 'C++',
    catchPhrase: 'plot twist!',
});

const sponge = new Student ({
    name: 'Sponge Bob Square Pants',
    age: 20,
    location: 'under the sea',
    previousBackground: 'burger flipper',
    className: 'datascience13',
    favSubjects: [
        'flexbox', 
        'block formatting', 
        'lunchtime',],
});

const solo = new Student ({
    name: 'Han Solo',
    age: 62,
    location: 'spaceship',
    previousBackground: 'smuggler',
    className: 'iux15',
    favSubjects: [
        'jedi mind tricks', 
        'flying', 
        'coding'],
});

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


console.log(sponge.favSubjects);
console.log(gold.grade(solo, 'Java'));
console.log(solo.sprintChallenge('test'));
console.log(york.standUp('web20'));
console.log(gabe.catchPhrase);
console.log(solo.favSubjects);
console.log(bond.age);
console.log(gabe.debugsCode(bond,'Java'));
console.log(gold.listsSubject);
console.log(bond.grade(solo, 'JS'));
console.log(sponge.prAssignment('JS'));