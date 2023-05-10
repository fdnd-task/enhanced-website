// laad meer knop

// lees meer functie detailpagina
// Dit stuk zoekt de togglebutton en zorgt ervoor dat hij de functie eronder activeerd wanneer erop geklikt wordt
let stappenplan = document.getElementById("stappenplanbutton");
stappenplan.addEventListener("click", toonStappenplan);
// Dit deel toggled de class "toon" waarop display none staat
function toonStappenplan() {
  document.getElementById("stappen").classList.toggle("toon");
}

// filter

const searchBar = document.getElementById("site-search");
const searchResults = document.querySelectorAll(".method-card");

searchBar.addEventListener("keyup", search);

function search() {
  const searchValue = this.value.toLowerCase();
  console.log("hiii");

  if (this.value === "") {
    searchResults.forEach((method) => {
      method.hidden = false;
    });
  } else {
    searchResults.forEach((method) => {
      method.hidden = !method.textContent.toLowerCase().includes(searchValue);
    });
  }
}
