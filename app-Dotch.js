//DOM variables
let bodyUi = document.body;
let navContainer = document.querySelector('.nav-container'),
    searchInput = document.querySelector('#search-input'),
    menu = document.querySelector('.menu');
//Local variables for javascript logic
let searchCount = 0, // using the searchCount varaible to keep track of when to close and open the search input.
    menuCount = 0; // using the menuCount varaible to keep track of when to close and open the menu.


//Event listener attached unto the body of the document.
bodyUi.addEventListener('click', openOrCloseSearch);
bodyUi.addEventListener('click', closeMenu);
searchInput.addEventListener('focus', () => {
    console.log('Hey');
    searchInput.style.border = 'none';
})
//Function to open and close the search input at the top of document.
function openOrCloseSearch(e) {
    if (e.target.classList.contains('fa-search') && searchCount % 2 == 0) {
        searchCount++;
        navContainer.style.marginTop = '6rem'
        navContainer.style.transition = 'all .5s ease'
        searchInput.style.display = 'block';
    } else {
        if (e.target.classList.contains('fa-search') && searchCount % 2 != 0) {
            searchInput.style.display = 'none';
            setTimeout(function() {
                navContainer.style.transition = 'none';
            }, 200)
            navContainer.style.marginTop = '0rem';
            searchCount++;
        }
    }
};

function closeMenu(e) {
    if (e.target.classList.contains('fa-bars') && menuCount % 2 == 0) {
        menu.style.display = 'block';
        menuCount++;
    } else {
        if (e.target.classList.contains('fa-bars') && menuCount % 2 != 0) {
            setTimeout(function() {
                menu.style.display = 'none';
            },250)
            menuCount++;
        }
    }
}