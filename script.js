function openSearch() {
    const searchButton = document.querySelector("#search_button")
    
    searchButton.addEventListener('click', toogleSearch)
}
openSearch()

function toogleSearch() {
    const searchBlock = document.getElementById('search_block')
    
    searchBlock.classList.toggle('hidden')
}