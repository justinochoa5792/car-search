const database = [
  {
    carName: "Ford",
    carPrice: 17000,
    carCode: "FD",
  },
  {
    carName: "Toyota",
    carPrice: 17000,
    carCode: "TY",
  },
  {
    carName: "Honda",
    carPrice: 17000,
    carCode: "HD",
  },
  {
    carName: "Nissan",
    carPrice: 17000,
    carCode: "NS",
  },
  {
    carName: "Tesla",
    carPrice: 17000,
    carCode: "TSL",
  },
];

// Selects Element
function selectElement(selector) {
  return document.querySelector(selector);
}

function clearResults() {
  selectElement(".search-results").innerHTML = "";
}

function getResults() {
  const search = selectElement(".searchbar").value;

  clearResults();

  for (let i = 0; i < database.length; i++) {
    if (search.length > 0) {
      if (
        database[i].carName.toLowerCase().includes(search.toLowerCase()) ||
        database[i].carCode.toLowerCase().includes(search.toLowerCase())
      ) {
        selectElement(".search-results").innerHTML += `
            <div class='search-results-item'>
            <span class='search-item>${database[i].carPrice}</span>
          <span class='search-item>${database[i].carName}</span>
          <span class='search-item>${database[i].carCode}</span>
            </div>
            `;
      }
    }
  }
}

selectElement(".searchbar").addEventListener("keyup", getResults);
