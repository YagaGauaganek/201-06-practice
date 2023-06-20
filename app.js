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
