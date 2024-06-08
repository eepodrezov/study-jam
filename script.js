function openSearch() {
    const searchButton = document.querySelector("#search_button")
    
    searchButton.addEventListener('click', toogleSearch)
}
openSearch()

function toogleSearch() {
    const searchBlock = document.getElementById('search_block')
    
    searchBlock.classList.toggle('hidden')
}


// Загружаем персонажей со всех страниц
async function loadRestaurants() {
  try {
      const response = await (await fetch('https://mock-server-lovat.vercel.app/restaurants')).json()
      if (response.length) {
        showRestaurants(response)
      }
  } catch (error) {
      console.error(error);
  }
}
loadRestaurants()

function showRestaurants(restaurants) {
    const catalog = document.querySelector('#catalog')
    restaurants.forEach(restaurant => {
        catalog.innerHTML = catalog.innerHTML + 
        createRestorantCardElement(restaurant)
    });

}

function createRestorantCardElement(restaurant) {
    return (
        `<div class="card">
            <img src="./assets/photo-3.png" alt="restorant image">
            <div class="card__content">
                <div class="card__content__title">
                    <span class="card__content__name">Макдоналдс</span>
                    <span>-</span>
                    <span class="card__content__address">Газетный</span>
                </div>
                <div class="card__content__subtitle">
                    <span class="card__content__price">₽₽</span>
                    <span>•</span>
                    <span class="card__content__food_type">Бургеры</span>
                </div>
                <div class="card__content__delivery_time">
                    <span>25</span>
                    <span>-</span>
                    <span>35</span>
                    <span> Min</span>
                </div>
            </div>
        </div>`)
  }
  
