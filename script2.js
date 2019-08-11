'use strict';

function getDogImage(breed) {
    const url=`https://dog.ceo/api/breed/${breed}/images/random`
    fetch(url)
      .then(response => response.json())
      .then(responseJson => results(responseJson))
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
    const breed = document.getElementById("breedtxt").value;
    getDogImage(breed);
};