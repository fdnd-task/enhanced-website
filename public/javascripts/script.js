let map;
var buttonSelect = document.querySelector(".selectButton");
var buttonList = document.querySelectorAll(".selectButton");
var buttonSlide = document.querySelector("#side-out");
var listAnimation = document.querySelector("#side-wrapper");
var sortButton = document.querySelector("#sort-button");
var listInformation = document.querySelectorAll(".zoneInfo");
var searchIcon = document.querySelector("#search-icon");
var buttonSlideFlip = document.querySelector("#side-out-flip");
var searchBar = document.querySelector("#search-bar");
var populateName = document.querySelectorAll(".nameJSON");
var populateLocation = document.querySelectorAll(".locJSON");
var populateFunction = document.querySelectorAll(".funJSON");
var populateSize = document.querySelectorAll(".sizeJSON");
var populateUse = document.querySelectorAll(".useJSON");
var checkboxes = document.querySelectorAll("input[type=checkbox]");
var sortSize = document.querySelector(".sortSize");
var sortUse = document.querySelector(".sortUse");
var sortFunc = document.querySelector(".sortFunc");
var sortLoc = document.querySelector(".sortLoc"); 
var sortStyling = document.querySelector(".sortHidden");
var sortButton = document.querySelector("#sort-button");
var filterStyling = document.querySelector(".filterHidden");
var filterButton = document.querySelector("#filter-button");
var dynamicFill = document.querySelectorAll(".dynamicCard");
var searchForm = document.querySelector("#search-form");
let exitButton = document.querySelector(".exitButton");
let reserveForm = document.querySelector("#reserve-form");
let reserveButton = document.querySelector(".reserveButton");

const media1 = window.matchMedia('(max-width: 980px)');
const media2 = window.matchMedia('(min-width: 980px)');

const filterLength = document.querySelectorAll("input[type='checkbox']")

var position;
var myStyles =[
  {
      featureType: "poi",
      stylers: [
      { visibility: "off" }
      ]
  }
];


function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 52.083004469900835, lng: 5.123430702685763},
    zoom: 16,
    minZoom: 10,
    styles: myStyles,
    restriction: {
      latLngBounds: {
        north: 54,
        south: 51,
        east: 7.5,
        west: 3,
      },
    },
  });
  setMarkers(map);
  infoWindow1 = new google.maps.InfoWindow();

  const locationButton = document.createElement("button");

  locationButton.textContent = "Jouw locatie";
  locationButton.classList.add("map-location-center");
  map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);




  
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const posit = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        new google.maps.Marker({
          position: posit,
          map,
          title: " ",
        });
        infoWindow1.setPosition(posit);
        infoWindow1.setContent("Jouw locatie");
        infoWindow1.open(map);
        map.setCenter(posit);
        locationButton.addEventListener("click", () => {
          map.setCenter(posit);
        });
      },
    );
  } else {
    infoWindow1.setPosition({ lat: 52.083004469900835, lng: 5.123430702685763});
    infoWindow1.setContent("Error: The Geolocation service failed. Error: Your browser doesn't support geolocation.");
  }
;

// const input = document.querySelector("#big-search-bar");



const defaultBounds = {
  north: 54,
  south: 51,
  east: 7.5,
  west: 3,
};
// const options = {
//   bounds: defaultBounds,
//   componentRestrictions: { country: "nl" },
//   fields: ["address_components", "geometry", "icon", "name"],
//   strictBounds: false,
// };
// const autocomplete = new google.maps.places.Autocomplete(input, options);
// google.maps.event.addListener(autocomplete, 'place_changed', function () {
//   const place = autocomplete.getPlace();

//   markers = [];

//   const icon = {
//     url: place.icon,
//     size: new google.maps.Size(71, 71),
//     origin: new google.maps.Point(0, 0),
//     anchor: new google.maps.Point(17, 34),
//     scaledSize: new google.maps.Size(25, 25),
//   };

//   markers.push(
//     new google.maps.Marker({
//       map,
//       icon,
//       title: place.name,
//       position: place.geometry.location,
//     })
//   );
//   map.setCenter(place.geometry.location);
//   map.setZoom(12);
//   if(listAnimation.classList.contains("animation-hidden")){

//   }
//   else{
//     listAnimation.classList.toggle("animation-hidden");
//     listAnimation.classList.remove("animation-visible");
//     buttonSlide.classList.toggle("side-out-flip");
//   };
// });


}
  





async function setMarkers(map){
    
    const svgMarkerBig = {
      path: "M 10 10 H 140 V 70 H 10 L 10 10",
      fill: "",
      fillOpacity: 0.2,
      strokeWeight: 2,
      strokeColor: "#4F52C9",
      rotation: -20,
      scale: 0.5,
      anchor: new google.maps.Point(0, 0),
      };

      const svgMarkerSmall = {
        path: "M 10 10 H 90 V 90 H 10 L 10 10",
        fill: "",
        fillOpacity: 0.2,
        strokeWeight: 2,
        strokeColor: "#4F52C9",
        rotation: -20,
        scale: 0.5,
        anchor: new google.maps.Point(0, 0),
        };

        const svgMarkerMedium = {
          path: "M 10 10 H 120 V 90 H 10 L 10 10",
          fill: "",
          fillOpacity: 0.2,
          strokeWeight: 2,
          strokeColor: "#4F52C9",
          rotation: -20,
          scale: 0.5,
          anchor: new google.maps.Point(0, 0),
          };

        const requestURL = './smartzones.json';
        const request = new Request(requestURL);
      
        const response = await fetch(request);
        const smartzones = await response.json();
    
      
      for (let i = 0; i < smartzones.length; i++){
        
        function markerSelect(){
          if(smartzones[i].size == "1 plek"){
            return svgMarkerSmall
          }
          if(smartzones[i].size == "1,5 plek"){
            return svgMarkerMedium;
          }
          else
          return svgMarkerBig;
        }

      const marker = new google.maps.Marker({
          position: {lat: parseFloat(smartzones[i].lat), lng: parseFloat(smartzones[i].lon)},
          icon: markerSelect(),
          map: map,
          title: smartzones[i].location,
        });

        
        const infoWindow = new google.maps.InfoWindow();

    


        function buttonPopulate(something){
          const contentString = "Smartzone " + something[i].name +
          "<br> <br>" + "Locatie: <span class='titleStyle'>" + something[i].location + " </span>" +
          "<br> <br>" + "Functie: " + something[i].function + " | <br>" + something[i].function1 + " | " + something[i].function2 +
          "<br> <br>" + "Grootte: " + something[i].size +
          "<br> <br>" + "Gebruik: " + something[i].utilization +
          "<br> <br>" + "<a href='http://maps.google.com/maps?saddr=52.362440594307465,4.915010541817515&daddr=" + something[i].lat + "," + something[i].lon +"'><img class='directionsButton' src='/images/directions.svg'></a>";

          marker.addListener("click", () => {
            infoWindow.close();
            infoWindow.setContent(contentString);
            infoWindow.open(marker.getMap(), marker);
            map.setZoom(18);
          });
          
          function buttonAdd(){
            map.setCenter(new google.maps.LatLng(something[i].lat, something[i].lon));
            map.setZoom(16);
            infoWindow.close();
            infoWindow.setContent(contentString);
            infoWindow.setPosition(new google.maps.LatLng(something[i].lat, something[i].lon))
            infoWindow.open({anchor: undefined,
              map,
              shouldFocus: true,});
              listAnimation.classList.toggle("animation-hidden");
              listAnimation.classList.remove("animation-visible");
              buttonSlide.classList.toggle("side-out-flip");
          }
          buttonList[i].addEventListener("click", buttonAdd);
        }
        buttonPopulate(smartzones);
        

        google.maps.event.addListener(map, "click", function(event) {
          infoWindow.close();
      });
      } 




// function populate(usedArray){
//   for (let i = 0; i < usedArray.length; i++){
//     populateName[i].textContent = usedArray[i].name;
//     populateLocation[i].textContent = usedArray[i].location + ", " + usedArray[i].town;
//     populateSize[i].textContent = usedArray[i].size;
//     populateUse[i].textContent = usedArray[i].utilization;
//     populateFunction[i].textContent = usedArray[i].function + " | " + "\r\n" + usedArray[i].function1 + " | " +  usedArray[i].function2 ;
//     listInformation[i].style.display = "block";
//     if(parseInt(usedArray[i].utilization) < 50){
//       populateUse[i].classList.add("lowFill");
//     }
//     else if(parseInt(usedArray[i].utilization) > 50 && parseInt(usedArray[i].utilization) < 75){
//       populateUse[i].classList.add("mediumFill");
//     }
//     else if(parseInt(usedArray[i].utilization) > 75){
//       populateUse[i].classList.add("highFill");
//     }

//     if(usedArray[i].function1 == " "){
//       populateFunction[i].textContent = usedArray[i].function
//     }
//     else if(usedArray[i].function2 == " "){
//       populateFunction[i].textContent = usedArray[i].function + " | "  + "\r\n" + usedArray[i].function1
//     }
//   }
// }

// function depopulate(){
//   for (let i = 0; i < populateName.length; i++){
//     populateName[i].textContent = " ";
//     populateLocation[i].textContent = " ";
//     populateSize[i].textContent = " ";
//     populateUse[i].textContent = " ";
//     populateFunction[i].textContent = " ";
//     listInformation[i].style.display = "none";
//     populateUse[i].classList.remove("lowFill", "mediumFill", "highFill");
//   }
// }

// function depopDynamic(){
//   for (let i = 0; i < dynamicFill.length; i++){
//     dynamicFill[i].textContent = " ";
//     dynamicFill[i].style.display = "none";
//   }
// }
// populate(smartzones);

// function initSort(){

//   sortSize.addEventListener("click", () =>{
//     sortSize.classList.toggle("sizeActive");
//     sortUse.classList.remove("useActive");
//     sortFunc.classList.remove("funcActive");
//     sortLoc.classList.remove("locActive");
//     smartzones.sort((a, b) => {
//   const sizeA = a.size.toUpperCase(); 
//   const sizeB = b.size.toUpperCase(); 
//   if (sizeA < sizeB) {
//   return -1;
//   }
//   if (sizeA > sizeB) {
//   return 1;
//   }
//   depopulate();
//   populate(smartzones);
//   return 0;
//   });
//   });

//   sortUse.addEventListener("click", () =>{
//     sortUse.classList.toggle("useActive");
//     sortSize.classList.remove("sizeActive");
//     sortFunc.classList.remove("funcActive");
//     sortLoc.classList.remove("locActive");
//     smartzones.sort((a, b) => {
//   const useA = a.utilization.toUpperCase(); 
//   const useB = b.utilization.toUpperCase(); 
//   if (useA < useB) {
//   return -1;
//   }
//   if (useA > useB) {
//   return 1;
//   }
//   depopulate();
//   populate(smartzones);
//   return 0;
//   });
//   });

//   sortFunc.addEventListener("click", () =>{
//     sortFunc.classList.toggle("funcActive");
//     sortSize.classList.remove("sizeActive");
//     sortUse.classList.remove("useActive");
//     sortLoc.classList.remove("locActive");
//     smartzones.sort((a, b) => {
//   const funcA = a.function.toUpperCase();
//   const funcB = b.function.toUpperCase();
//   if (funcA < funcB) {
//   return -1;
//   }
//   if (funcA > funcB) {
//   return 1;
//   }
//   depopulate();
//   populate(smartzones);
//   return 0;
//   });
//   });

//   sortLoc.addEventListener("click", () =>{
//     sortLoc.classList.toggle("locActive");
//     sortSize.classList.remove("sizeActive");
//     sortUse.classList.remove("useActive");
//     sortFunc.classList.remove("funcActive");
//     smartzones.sort((a, b) => {
//   const locA = a.town.toUpperCase();
//   const locB = b.town.toUpperCase();
//   if (locA < locB) {
//   return -1;
//   }
//   if (locA > locB) {
//   return 1;
//   }
//   depopulate();
//   populate(smartzones);
//   return 0;
//   });
//   });
// }
// initSort();
function filterTest(){
  
  for (let i = 0; i < checkboxes.length; i++){
    checkboxes[i].addEventListener("change", () =>{
      if(checkboxes[i].name == "filterLoc" && checkboxes[i].checked){
        let locCheck = smartzones.filter(location => location.town == checkboxes[i].value);
        depopulate();
        populate(locCheck);
        depopDynamic();
        dynamicFill[i].textContent = checkboxes[i].value;
        dynamicFill[i].style.display = "inline";
      }
      else if(checkboxes[i].name == "filterFunc" && checkboxes[i].checked){
        let funcCheck = smartzones.filter(functionality => functionality.function == checkboxes[i].value);
        console.log(checkboxes[i].value)
        depopulate();
        populate(funcCheck);
        depopDynamic();
        dynamicFill[i].textContent = checkboxes[i].value;
        dynamicFill[i].style.display = "inline";
      }
      else if(checkboxes[i].name == "filterGrootte" && checkboxes[i].checked){
        let sizeCheck = smartzones.filter(area => area.size == checkboxes[i].value);
        depopulate();
        populate(sizeCheck);
        depopDynamic();
        dynamicFill[i].textContent = checkboxes[i].value;
        dynamicFill[i].style.display = "inline";
      }
      else if(checkboxes[i].name == "filterGebruik" && checkboxes[i].checked){
        let usageCheck = smartzones.filter(usage => parseInt(usage.utilization) < parseInt(checkboxes[i].value));
        depopulate();
        populate(usageCheck);
        depopDynamic();
        dynamicFill[i].textContent = checkboxes[i].value;
        dynamicFill[i].style.display = "inline";
      }
      else{
        depopulate();
        populate(smartzones);
        depopDynamic();
      }
    });
  }
  }
  filterTest();
}
  


function classSlide(){
    if(media1.matches){
      listAnimation.classList.toggle("animation-visible");
      listAnimation.classList.remove("animation-hidden");
      buttonSlide.classList.toggle("side-out-flip");
    }
    else if(media2.matches){
      listAnimation.classList.toggle("animation-hidden");
      listAnimation.classList.remove("animation-visible");
      buttonSlide.classList.toggle("side-out-flip");
    }
}


function searchShow(){
  if(searchBar.style.display === "none"){
    searchBar.style.display = "block";
  }
  else{
    searchBar.style.display = "none";
  }
}


function sortShow(){
  if(sortStyling.classList.contains("sortHidden")){
    sortStyling.classList.toggle("sortStyle");
    sortStyling.classList.remove("sortHidden");
  }
  else{
    sortStyling.classList.toggle("sortStyle");
    sortStyling.classList.add("sortHidden");
  }
}

function filterShow(){
  if(filterStyling.classList.contains("filterHidden")){
    filterStyling.classList.toggle("filterStyle");
    filterStyling.classList.remove("filterHidden");
  }
  else{
    filterStyling.classList.toggle("filterStyle");
    filterStyling.classList.add("filterHidden");
  }
}


// function classToggle(element, class1, class2){
//   if(element.classList.contains(class1)){
//     element.classList.toggle(class2);
//     element.classList.remove(class1);
//   }
//   else{
//     element.classList.toggle(class2);
//     element.classList.add(class1);
//   }
// }


function toggleReserve(){
    if(reserveForm.classList.contains("reserveHidden")){
      reserveForm.classList.toggle("reserveStyle");
      reserveForm.classList.remove("reserveHidden");
    }
    else{
      reserveForm.classList.toggle("reserveStyle");
      reserveForm.classList.add("reserveHidden");
    }

}

function preventSubmit(event){
  event.preventDefault();
};

// searchForm.addEventListener('submit', preventSubmit);

window.initMap = initMap;
buttonSlide.addEventListener("click", classSlide);
// searchIcon.addEventListener("click", searchShow);
sortButton.addEventListener("click", sortShow);
filterButton.addEventListener("click", filterShow);
exitButton.addEventListener("click", toggleReserve);
reserveButton.addEventListener("click", toggleReserve);

// https://developers.google.com/maps/documentation/javascript
// https://support.google.com/mymaps/answer/3024454?hl=en&co=GENIE.Platform%3DDesktop#:~:text=Create%20a%20map,map%20a%20name%20and%20description.
// https://stackoverflow.com/questions/41648702/prevent-marker-from-scaling-when-zoom-out


// <% for(let i = 0; i < smartzones.length; i++){ %>
//   <option value="<%= smartzones[i].id %>" name="smartzoneId"><%= smartzones[i].name %></option>
//   <% } %>


// 