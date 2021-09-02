const loadSingleUser = () => {
  fetch("https://randomuser.me/api/")
    .then((res) => res.json())
    .then((data) => displaySingleUser(data.results[0]));
};
loadSingleUser();

const displaySingleUser = (user) => {
  console.log(user);
};

// meal db
const toggleSpinner = (displayStyle) => {
  document.getElementById("spinner").style.display = displayStyle;
};
const toggleSearchResult = (displayStyle) => {
  document.getElementById("meals").style.display = displayStyle;
};
const searchMeal = () => {
  const searchText = document.getElementById("search-field").value;
  // display spinners
  toggleSpinner("block");
  // hide search result
  toggleSearchResult("none");
  loadMeals(searchText);
  document.getElementById("search-field").value = "";
};

const loadMeals = (searchText) => {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayMeals(data.meals));
};

const displayMeals = (meals) => {
  const container = document.getElementById("meals");
  container.textContent = "";
  // won't go further if not found
  meals?.forEach((meals) => {
    const div = document.createElement("div");
    div.innerHTML = `
        <h1>${meals.strMeal}</h1>
        <p>${meals.strIngredient18 ? meals.strIngredient18 : ""}</p>
        <button onclick="loadMealDetail('${meals.strMeal}')">click me</button>
        `;
    container.appendChild(div);
  });
  // hide display spinners
  toggleSpinner("none");
  // display search results
  toggleSearchResult("block");
};

loadMeals("fish");

const loadMealDetail = (mealName) => {
  console.log(mealName);
};
