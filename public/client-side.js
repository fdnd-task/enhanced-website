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
