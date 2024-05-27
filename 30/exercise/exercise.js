class Person {
  constructor(id, firstName, lastName, age) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  toJson() {
    return JSON.stringify(this);
  }


static fromJson(jsonString) {
  const jsonObject = JSON.parse(jsonString);
  return new Person(
    jsonObject.id,
    jsonObject.firstName,
    jsonObject.lastName,
    jsonObject.age
  );
  }
}


const json = '{"id":1,"firstName":"Mario","lastName":"Rossi","age":25}';
const developer = Person.fromJson(json);
console.log(developer);
console.log(developer instanceof Person);

