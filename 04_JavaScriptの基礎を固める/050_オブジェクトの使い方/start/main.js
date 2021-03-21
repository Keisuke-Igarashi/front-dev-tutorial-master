// const person ={};
// person.name = 'code Mafia';
// console.log(person);

const person = {
    name :['code','mafia'],
    age : 31,
    gender : 'male',
    interests : {
        sports : 'soccer',
        music : 'piano'
    },

    getFullName : function(){
        console.log(this.name[0]+this.name[1])
    }

};
console.log(person.interests.sports);

const agekey = 'age';
person[agekey]=12;
console.log(person.age);
person.getFullName();