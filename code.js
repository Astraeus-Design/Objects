// Objects Exercise 1: space craft

let spaceCraft={   size: "50m",
                   range: "1000000m",
                   model: "artemis",
                   capacity: 5};

console.log(spaceCraft.range);

for( let x in spaceCraft){
    console.log(spaceCraft[x]);
}


// Objects Exercise 1a:  Person

let person={
              firstName: "fred",
              lastName: "smith",
              age: 27,
              eyeColour: "blue"
}

console.log(`person is ${person.firstName} ${person.lastName} and they are ${person.age} yrs old`);
console.log(person["lastName"]+`  `+person["eyeColour"]);

person.age=45;
person.eyeColour="green";
person.lastName="jones";
person.firstName="ivor";

for (x in person){console.log(person[x])};

person.height="1.78m";

for (x in person){console.log(person[x])};

if (person.hasOwnProperty("height")) console.log(`we have height!`);

// Objects Exercise 2: Presents

let myObj ={
             gift:"pony",
             pet:"kitten",
             bed:"sleigh"
};

function returnProperty(name){
    if(typeof name==="string"){
    if(myObj.hasOwnProperty(name)) console.log(myObj[name]);}

}

returnProperty(34);
returnProperty("green");
returnProperty("pet");

// Objects Exercise 3:  

let album1={ album:"introspective",
            group:"pet shop boys"};

let album2={ album:"man machine",
             group:"kraftwerk"};

let objArray=[];

objArray.push(album1);
objArray.push(album2);
console.log(objArray);

let anotherObj;

objArray.forEach((item=>console.log((item.album)+`        `+(item.group))));
for(x in objArray){
/*    anotherObj=objArray[x];
    for(let y in anotherObj){ 
    console.log(y["album"]+`   `+y["group"]);};*/

    console.log(objArray[x]);
};

// Objects Exercise 4: tree

let myPlants=[ {
    type:"flowers",
    list:["rose","tulip","dandelion"]
},
{
    type:"trees",
    list:["fir","pine","birch"]
}
];

console.log(myPlants[1].list[1]);

myPlants.forEach( (item)=>console.log(item.list[1]));

// Objects Exercise 5: object with function

let staff={
             firstName:"fred",
             lastName:"smith",
             id:123,

             fullName: function(){ console.log(this.firstName+`  `+this.lastName)}
};

console.log(staff.fullName());






