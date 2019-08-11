'use strict';

function getDogImage(breed) {
    const url=`https://dog.ceo/api/breed/${breed}/images/random`
    fetch(url)
    .then(response => {
      if (response.status !== 200) {
         throw new Error("Not 200 response")
     } else {
         return response.json()}
     })
    .then(responseJson => {
      return results(responseJson);
     })  
    .catch(error => alert("Sorry, that doesn't seem to be a valid breed. Please try again."));
};



function results(dog) {
  const result = document.querySelector('.result');
  const oldp = document.querySelector('.old');
  const newp = document.createElement('p');
  newp.setAttribute("class", "old");
  newp.innerHTML = `<img src="${dog.message}"/>`;
  result.replaceChild(newp, oldp);
  result.classList.remove("hidden");
};


function submit_form() {
    event.preventDefault();
    const breed = document.getElementById("breed").value;
    getDogImage(breed);
};

function displayBreeds(breeds) {
    const breedArray = Object.entries(breeds.message);
    breedArray.forEach(breed => {
     //console.log(breed);
     const breedName = breed[0];
     if (breed[1] && breed[1].length) {
         breed[1].forEach(sub => {
           const breedUrl=`${breedName}\\${sub}`;
           const breedFinal = `${sub} ${breedName}`;
           append_options(breedUrl, breedFinal);
         })
     }
     else {
          append_options(breedName, breedName);
     };
    });
};
 
function append_options(breedUrl, breedFinal) {
const breedSelect = `<option value="${breedUrl}">${breedFinal}</option>`;
const main = document.querySelector('.breed_select');
main.innerHTML += breedSelect;
}

function list_all_breeds() {
    const url="https://dog.ceo/api/breeds/list/all";
    fetch(url)
    .then(response => response.json())
    .then(responseJson => displayBreeds(responseJson))
    .catch(error => alert("Sorry, not working!"));
}

list_all_breeds();