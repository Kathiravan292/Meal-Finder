// const categoryList = document.getElementById("categoryList");
// const allCategories = document.getElementById("allCategories");
// const mealResults = document.getElementById("mealResults");
// const searchBtn = document.getElementById("searchBtn");
// const searchInput = document.getElementById("searchInput");

// // Load categories
// async function loadCategories() {
//   const res = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
//   const data = await res.json();

//   categoryList.innerHTML = '';
//   allCategories.innerHTML = '';

//   data.categories.forEach(cat => {
//     // Sidebar item
//     const li = document.createElement("li");
//     li.textContent = cat.strCategory;
//     li.classList.add("py-2", "border-bottom");
//     li.style.cursor = "pointer";
//     li.addEventListener("click", () => fetchMealsByCategory(cat.strCategory));
//     categoryList.appendChild(li);

//     // Grid card
//     const col = document.createElement("div");
//     col.className = "col-md-3 col-sm-6 mb-4";

//     col.innerHTML = `
//       <div class="category-card" data-category="${cat.strCategory}">
//         <img src="${cat.strCategoryThumb}" alt="${cat.strCategory}" />
//         <div class="category-label">${cat.strCategory}</div>
//       </div>
//     `;

//     col.querySelector('.category-card').addEventListener('click', () => fetchMealsByCategory(cat.strCategory));
//     allCategories.appendChild(col);
//   });
// }

// // Search meals
// searchBtn.addEventListener("click", () => {
//   const food = searchInput.value.trim();
//   if (food !== "") {
//     searchMeals(food);
//   }
// });

// async function searchMeals(foodName) {
//   const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${foodName}`);
//   const data = await res.json();
//   renderMeals(data.meals || []);
//   mealResults.scrollIntoView({ behavior: "smooth" });
// }

// // Get meals by category + description
// async function fetchMealsByCategory(catName) {
//   document.querySelector('.hero-section').style.display = 'none';
//   document.getElementById('categorySection').style.display = 'none';

//   const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${catName}`);
//   const data = await res.json();

//   const catRes = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
//   const catData = await catRes.json();
//   const category = catData.categories.find(cat => cat.strCategory === catName);

//   renderCategorySection(category, data.meals || []);
// }

// // Render category + meals
// function renderCategorySection(category, meals) {
//   mealResults.innerHTML = '';

//   const descriptionBlock = document.createElement('div');
//   descriptionBlock.className = 'mb-4 p-4 border rounded bg-light';

//   descriptionBlock.innerHTML = `
//     <h3 class="text-danger fw-bold">${category.strCategory}</h3>
//     <p class="text-secondary">${category.strCategoryDescription}</p>
//   `;
//   mealResults.appendChild(descriptionBlock);

//   const mealGrid = document.createElement('div');
//   mealGrid.className = 'row';

//   meals.forEach(meal => {
//     const col = document.createElement('div');
//     col.className = 'col-md-4 mb-4';

//     col.innerHTML = `
//       <div class="category-card">
//         <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
//         <div class="text-center fw-semibold py-2">${meal.strMeal}</div>
//       </div>
//     `;
//     mealGrid.appendChild(col);
//   });

//   mealResults.appendChild(mealGrid);

//   const backBtn = document.createElement('div');
//   backBtn.className = 'text-center mt-4';
//   backBtn.innerHTML = `
//     <button class="btn btn-outline-danger" onclick="resetHome()">← Back to Categories</button>
//   `;
//   mealResults.appendChild(backBtn);

//   mealResults.scrollIntoView({ behavior: "smooth" });
// }

// // Reset to home view
// function resetHome() {
//   document.querySelector('.hero-section').style.display = 'flex';
//   document.getElementById('categorySection').style.display = 'block';
//   mealResults.innerHTML = '';
//   window.scrollTo({ top: 0, behavior: 'smooth' });
// }

// // Load on start
// loadCategories();

/////////////////////////////////////////////////////////////////////////
// const categoryList = document.getElementById("categoryList");
// const allCategories = document.getElementById("allCategories");
// const mealResults = document.getElementById("mealResults");
// const searchBtn = document.getElementById("searchBtn");
// const searchInput = document.getElementById("searchInput");

// // Load categories
// async function loadCategories() {
//   const res = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
//   const data = await res.json();

//   categoryList.innerHTML = '';
//   allCategories.innerHTML = '';

//   data.categories.forEach(cat => {
//     // Sidebar item
//     const li = document.createElement("li");
//     li.textContent = cat.strCategory;
//     li.classList.add("py-2", "border-bottom");
//     li.style.cursor = "pointer";
//     li.addEventListener("click", () => fetchMealsByCategory(cat.strCategory));
//     categoryList.appendChild(li);

//     // Grid card
//     const col = document.createElement("div");
//     col.className = "col-md-3 col-sm-6 mb-4";

//     col.innerHTML = `
//       <div class="category-card" data-category="${cat.strCategory}">
//         <img src="${cat.strCategoryThumb}" alt="${cat.strCategory}" />
//         <div class="category-label">${cat.strCategory}</div>
//       </div>
//     `;

//     col.querySelector('.category-card').addEventListener('click', () => fetchMealsByCategory(cat.strCategory));
//     allCategories.appendChild(col);
//   });
// }

// // ✅ Search button click
// searchBtn.addEventListener("click", () => {
//   const food = searchInput.value.trim();
//   if (food !== "") {
//     // Hide hero and category section
//     document.querySelector('.hero-section').style.display = 'none';
//     document.getElementById('categorySection').style.display = 'none';
//     searchMeals(food);
    
//   }
// });

// // ✅ Search on Enter key
// searchInput.addEventListener("keydown", (e) => {
//   if (e.key === "Enter") {
//     searchBtn.click();
//   }
// });

// // Search meals
// async function searchMeals(foodName) {
//   const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${foodName}`);
//   const data = await res.json();
//   renderMeals(data.meals || []);
//   mealResults.scrollIntoView({ behavior: "smooth" });
// }

// // Get meals by category + description
// async function fetchMealsByCategory(catName) {
//   document.querySelector('.hero-section').style.display = 'none';
//   document.getElementById('categorySection').style.display = 'none';

//   const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${catName}`);
//   const data = await res.json();

//   const catRes = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
//   const catData = await catRes.json();
//   const category = catData.categories.find(cat => cat.strCategory === catName);

//   renderCategorySection(category, data.meals || []);
// }

// // Render category + meals
// function renderCategorySection(category, meals) {
//   mealResults.innerHTML = '';

//   const descriptionBlock = document.createElement('div');
//   descriptionBlock.className = 'mb-4 p-4 border rounded bg-light';

//   descriptionBlock.innerHTML = `
//     <h3 class="text-danger fw-bold">${category.strCategory}</h3>
//     <p class="text-secondary">${category.strCategoryDescription}</p>
//   `;
//   mealResults.appendChild(descriptionBlock);

//   const mealGrid = document.createElement('div');
//   mealGrid.className = 'row';

//   meals.forEach(meal => {
//     const col = document.createElement('div');
//     col.className = 'col-md-4 mb-4';

//     col.innerHTML = `
//       <div class="category-card">
//         <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
//         <div class="text-center fw-semibold py-2">${meal.strMeal}</div>
//       </div>
//     `;
//     mealGrid.appendChild(col);
//   });

//   mealResults.appendChild(mealGrid);

//   const backBtn = document.createElement('div');
//   backBtn.className = 'text-center mt-4';
//   backBtn.innerHTML = `
//     <button class="btn btn-outline-danger" onclick="resetHome()">← Back to Categories</button>
//   `;
//   mealResults.appendChild(backBtn);

//   mealResults.scrollIntoView({ behavior: "smooth" });
// }

// // Render search results
// function renderMeals(meals) {
//   mealResults.innerHTML = '';

//   if (meals.length === 0) {
//     mealResults.innerHTML = `<p class="text-danger">No meals found. Try a different search.</p>`;
//     return;
//   }

//   const mealGrid = document.createElement('div');
//   mealGrid.className = 'row';

//   meals.forEach(meal => {
//     const col = document.createElement('div');
//     col.className = 'col-md-4 mb-4';

//     col.innerHTML = `
//       <div class="category-card">
//         <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
//         <div class="text-center fw-semibold py-2">${meal.strMeal}</div>
//       </div>
//     `;
//     mealGrid.appendChild(col);
//   });

//   mealResults.appendChild(mealGrid);

//   const backBtn = document.createElement('div');
//   backBtn.className = 'text-center mt-4';
//   backBtn.innerHTML = `
//     <button class="btn btn-outline-danger" onclick="resetHome()">← Back to Categories</button>
//   `;
//   mealResults.appendChild(backBtn);
// }

// // Reset to home view
// function resetHome() {
//   document.querySelector('.hero-section').style.display = 'flex';
//   document.getElementById('categorySection').style.display = 'block';
//   mealResults.innerHTML = '';
//   window.scrollTo({ top: 0, behavior: 'smooth' });
// }

// // Load on start
// loadCategories();


const categoryList = document.getElementById("categoryList");
const allCategories = document.getElementById("allCategories");
const mealResults = document.getElementById("mealResults");
const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("searchInput");

const heroSection = document.querySelector(".hero-section");
const categorySection = document.getElementById("categorySection");

// Load categories on page load
fetchCategories();

searchBtn.addEventListener("click", () => {
  const searchTerm = searchInput.value.trim();
  if (searchTerm) {
    searchMeals(searchTerm);
  }
});

// Fetch sidebar and card categories
async function fetchCategories() {
  const res = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
  const data = await res.json();

  categoryList.innerHTML = "";
  allCategories.innerHTML = "";

  data.categories.forEach((cat) => {
    // Sidebar List
    const li = document.createElement("li");
    li.textContent = cat.strCategory;
   
    li.classList.add("mb-2", "fw-semibold", "text",);
    li.style.cursor = "pointer";
    li.addEventListener("click", () => fetchMealsByCategory(cat.strCategory));
    categoryList.appendChild(li);

    // Category Cards
    const div = document.createElement("div");
    div.className = "col-md-4 col-lg-3 mb-4";
    div.innerHTML = `
      <div class="card h-100 shadow-sm" style="cursor:pointer">
        <img src="${cat.strCategoryThumb}" class="card-img-top" alt="${cat.strCategory}">
        <div class="card-body">
          <h5 class="card-title text-center">${cat.strCategory}</h5>
        </div>
      </div>
    `;
    div.addEventListener("click", () => fetchMealsByCategory(cat.strCategory));
    allCategories.appendChild(div);
  });
}

// Fetch and display meals by category
async function fetchMealsByCategory(catName) {
  const [catRes, mealRes] = await Promise.all([
    fetch('https://www.themealdb.com/api/json/v1/1/categories.php'),
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${catName}`)
  ]);

  const catData = await catRes.json();
  const mealData = await mealRes.json();

  const matchedCategory = catData.categories.find(
    (cat) => cat.strCategory.toLowerCase() === catName.toLowerCase()
  );

  renderResults(matchedCategory.strCategory, matchedCategory.strCategoryDescription, mealData.meals);
}

// Search handler
async function searchMeals(query) {
  const trimmedQuery = query.toLowerCase();

  const catRes = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
  const catData = await catRes.json();
  const matchedCategory = catData.categories.find(
    (cat) => cat.strCategory.toLowerCase() === trimmedQuery
  );

  if (matchedCategory) {
    const mealRes = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${matchedCategory.strCategory}`);
    const mealData = await mealRes.json();

    renderResults(matchedCategory.strCategory, matchedCategory.strCategoryDescription, mealData.meals);
  } else {
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
    const data = await res.json();

    renderResults(`Search: "${query}"`, "Here are your search results:", data.meals || []);
  }
}

// Render meals and heading/description
function renderResults(heading, description, meals) {
  heroSection.style.display = "none";
  categorySection.style.display = "none";

  mealResults.innerHTML = `
  <div class="text-danger fw-bold border border-danger p-2 rounded">
    <h2 class="text-danger text">${heading}</h2>
    <p class="text text-muted" >${description}</p>
    </div>
    <div class="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-4 mt-3">
      ${
        meals.length > 0
          ? meals
              .map(
                (meal) => `
        <div class="col">
          <div class="card h-100 shadow-sm">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="${meal.strMeal}">
            <div class="card-body">
              <h5 class="card-title text-center">${meal.strMeal}</h5>
            </div>
          </div>
        </div>
      `
              )
              .join("")
          : `<p class="text-center">No meals found.</p>`
      }
    </div>
    <div class="text-center mt-4">
      <button class="btn btn-outline-secondary" onclick="resetHome()">← Back</button>
    </div>
  `;
}

// Reset to home
function resetHome() {
  searchInput.value = "";
  mealResults.innerHTML = "";
  heroSection.style.display = "flex";
  categorySection.style.display = "block";
}
