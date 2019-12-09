// Write your JavaScript code here!
window.addEventListener("load", function() {
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      let pilotName = document.querySelector("input[name=pilotName]");
      let coPilotName = document.querySelector("input[name=copilotName]");
      let fuelLevel =  document.querySelector("input[name=fuelLevel]");
      let cargoMass =  document.querySelector("input[name=cargoMass]");
      if (pilotName.value === "" || coPilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
         alert("All fields are required!");
         // stop the form submission
         event.preventDefault();
      }

      if((isNaN(fuelLevel.value)) || (isNaN(cargoMass.value))){
         alert("Please enter a valid number input");
         // stop the form submissionq
         event.preventDefault();
      }

      if((!isNaN(pilotName.value)) || (!isNaN(coPilotName.value))){
         alert("Please enter valid name in text");
         // stop the form submission 
         event.preventDefault();
      }

      

      

      

      });
   });


   fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
   response.json().then( function(json) {
      const div = document.getElementById("missionTarget");
      div.innerHTML = `
      <h2>Mission Destination</h2>
         <ol>
         <li>Name: ${json.name}</li>
         <li>Diameter: ${json.diameter}</li>
         <li>Star: ${json.star}</li>
         <li>Distance from Earth: ${json.distance}</li>
         <li>Number of Moons: ${json.moons}</li>
         </ol>
         <img src="${json.image}">
         `
   });
});


   //    fetch("form").then( function(response) {
   //       response.json().then( function(json) {




   //          const div = document.getElementById("launchStatusCheck");
   //          div.innerHTML = `
   //          <h2>Mission Destination</h2>
   //             <ol>
   //             <li>Pilot ${} is ready for launch.</li>
   //             <li>Co-Pilot ${}is ready for launch.</li>
   //             <li>Fuel Level ${}</li>
   //             <li>Cargo Mass ${}</li>
   //             </ol>
   //             <img src="${}">
   //             `
      
   // });

   



// This block of code shows how to format the HTML once you fetch some planetary JSON!
// <h2>Mission Destination</h2>
// <ol>
//    <li>Name: ${}</li>
//    <li>Diameter: ${}</li>
//    <li>Star: ${}</li>
//    <li>Distance from Earth: ${}</li>
//    <li>Number of Moons: ${}</li>
// </ol>
// <img src="${}">

// 



