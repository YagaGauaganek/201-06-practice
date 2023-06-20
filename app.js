"use strict"

console.log("you are one cool kitten");

const cat = {
    name: "Bob",
    age: 0, 
    interests: ["cuddling", "chasing string", "catnip"],
    isGoodWithKids: true,
    isGoodWithDogs: false,
    isGoodWithCats: true,
    getAge : function(){
        console.log(this.age)
        this.age = randomAge (3, 11) + "months";
 
    },
};

    // console.log(cat);
    console.log(cat.name);
    console.log(cat["isGoodWithKids"]);

    // update the key value pairs of the object
    cat.age = 3;
    cat["name"] = "eric";
    // console.log(cat);

    // add new key value pairs of the object
    cat.hasClaws = true;
    cat["breed"] = "Siamese"; 
    console.log(cat);

// function inside the object is call the method

// invoke / call the method inside the function

//cat.number();

function randomAge(min, max) {
    return (Math.random() * (min - max + 1 ) + min);
}
cat.getAge();
console.log(cat);

const parentElement = cosument.getElementById("kitten Profiles");
console.log(paretntElement);

const article  = document.createElement("article");
parentElement.appendChild(article);

const h3 = document.createElement ("h3");
h3.textContent = cat.name;
article.appendChild9(h3);

const p = document.createElement("p");
//p.text = cat.name + " is adorable, and is " + cat.age + " old."
p.textContent = '${cat.name} is adorable and is ${cat.age} old.'
article.appendChild(p);

const ul = document.createElement("ul");
article.appendChild("ul");

for(let i = 0; i < cat.interests.length; i++) {
    const li = document.createElement("li");
    li.textContent = cat.interests[i];
    ul.appendChild(li);
}
const img = document.createElement("img");
img.setAttribute("src", "images/" + cat.name + ".jpg");
img.setAttribute("alt", cat.name + "looking great");
article.appendChild(img);

// lecture 07/ 
//constructor function

function Kitten(){
this.name = "bob";
this.age = 0;
this.interests = ["cuddling", "chasing string", "catnip"];
isGoodWithKids = true;
isGoodWithDogs = false;
isGoodWithCats = true;
}
// const eric = new Kitten();
// const bob = new Kitten();
// console.log(eric);
// console.log(bob);

//How to use it unifying for new kitten

function Kitten(name, interests,  isGoodWithKids, isGoodWithDogs){
    this.name = name;
    // this.age = 0;
    this.interests = interests;
    isGoodWithKids = isGoodWithKids;
    isGoodWithDogs = isGoodWithDogs;
    isGoodWithCats = isGoodWithCats;
    this.images = "images/" + imgFileName;
    this.age = this.generateAge();
}

// const eric = new Kitten();
// const bob = new Kitten();
// console.log(eric);
// console.log(bob);

Kitten.proptotype.generateAge = function (){
    return randomAge(3, 11) + "months";
};

// Kitten.proptotype.meow = function() {
//     console.log(this.name + " say meow");
// };

Kitten.prototype.render = function(){
    //get the container for our kitten profile cards
    const containerElement = document.getElementById("kittenProfiles");

    // each Kitten profile is an article
    const article = document.createElement("article");
    containerElement.appendChild(article);

    //add the article heading
    const h3 = document.createElement("h3");
    h3.textContent = this.name;
    article.appendChild(h3);

    //add a bio with kitten age
    const p = document.createElement("p");
    p.textContent = `${this.name} is adorable and is ${this.age} old.`;

    // add interest in an unordered list
    const ul = document.createElement("ul");
    article.appendChild(ul)
    for (let i = 0; i < this.interests.length; i++) {
        const li = document.createElement("li");
        li.textContent = this.interests[i];
        ul.appendChild(li);
    }
//add a table to display what the kitten is good with
const table = document.createElement("table");
article.appendChild(table);

//add a header row
const headerRow = document.createElement("tr");
table.appendChild(headerRow);

//add the table header cells
const kidsHeaderCell = document.createAttribute("th");
kidsHeaderCell.textContent = "Kids";
headerRow.appendChild(kidsHeaderCell);

const dogsHeaderCell = document.createAttribute("th");
dogsHeaderCell.textContent = "Dogs";
headerRow.appendChild(dogsHeaderCell);

const catsHeaderCell = document.createAttribute("th");
catsHeaderCell.textContent = "Cats";
headerRow.appendChild(catsHeaderCell);

//add data row
const dataRow = docuemnt.createElement("tr");
table.appendChild(dataRow);

//add data cell
const kidsData = document.createElement("td");
kidsData.textContent = this.isGoodWithKids;
dataRow.appendChild(kidsData);

const dogsData = document.createElement("td");
dogsData.textContent = this.isGoodWithDogs;
dataRow.appendChild(dogsData);

const catsData = document.createElement("td");
dogsData.textContent = this.isGoodWithCats("td");
dataRow.appendChild(catsData);
};

//??should be sth here??

function randomAge(min, max) {
    returnMath.floor(Math.random() * (max - min + 1 ) + min);
}
const eric = new Kitten ("eric", ["cuddling", "chasing string", "catnip"], true, false, true, "eric.jpg");
const anna = new Kitten ("anna", ["hand gliding", "sipping milk", "formula one"], true, false, true, "anna.jpg");
const val = new Kitten ("val", ["sword fighting", "sushi bars ", "extreme ironong"], true, true, false, "val.jpg");



//Prototype method

console.log(eric);
console.log(anna);
console.log(val);

//eric.render();
//anna.render();
//val.render();
//instead of rendering in d#the bottom we can add this.render to our constuctor function
