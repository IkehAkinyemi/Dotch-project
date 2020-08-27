//DOM variables
let bodyUi = document.body;
let navContainer = document.querySelector('.nav-container'),
    searchInput = document.querySelector('#search-input'),
    menu = document.querySelector('.menu');
//Local variables for javascript logic
let count = 0; // using the count varaible to keep track of when to close and open the search input.


//Event listener attached unto the body of the document.
bodyUi.addEventListener('click', openOrCloseSearch);
bodyUi.addEventListener('click', closeMenu);

//Function to open and close the search input at the top of document.
function openOrCloseSearch(e) {
    if (e.target.classList.contains('fa-search') && count % 2 == 0) {
        count++;
        navContainer.style.marginTop = '6rem'
        searchInput.style.display = 'block';
    } else {
        if (e.target.classList.contains('fa-search') &&count % 2 != 0) {
            searchInput.style.display = 'none';
            navContainer.style.marginTop = '0rem'
            count++;
        }
    }
};

function closeMenu(e) {
    if (e.target.classList.contains('fa-bars')) {
        menu.style.display = 'block';
    }
}