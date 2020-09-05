//DOM variables
let bodyUi = document.body;
let navContainer = document.querySelector('.nav-collection'),
    searchInput = document.querySelector('#search-input'),
    header = document.querySelector('header'),
    mainContent = document.querySelector('main'),
    footerUI = document.querySelector('footer');
    menu = document.querySelector('.menu');


//javascript flags for logic
let searchCount = 0, // using the searchCount varaible to keep track of when to close and open the search input.
    menuCount = 0; // using the menuCount varaible to keep track of when to close and open the menu.


//Event listener attached unto elements of the document.
navContainer.addEventListener('click', openOrCloseSearch);
header.addEventListener('click', closeMenu);
searchInput.addEventListener('focus', () => {
    console.log('Hey');
    searchInput.style.border = 'none';
});

//Function to open and close the search input at the top of document.
function openOrCloseSearch(e) {
    if (e.target.classList.contains('fa-search') && searchCount % 2 == 0) {
        searchCount++;
        navContainer.style.transition = 'all .5s ease';
        searchInput.style.display = 'block';
    } else {
        if (e.target.classList.contains('fa-search') && searchCount % 2 != 0) {
            navContainer.style.transition = 'all .5s ease';
            searchInput.style.display = 'none';
            setTimeout(function() {
                navContainer.style.transition = 'none';
            }, 200);
            navContainer.style.marginTop = '0rem';
            searchCount++;
        };
    };

    e.preventDefault();
};

function closeMenu(e) {
    if (e.target.classList.contains('fa-bars') && menuCount % 2 == 0) {
        menu.style.display = 'block';
        searchInput.style.display = 'none';
        menuCount++;
    } else {
        if (e.target.classList.contains('fa-bars') && menuCount % 2 != 0) {
            setTimeout(function() {
                menu.style.display = 'none';
            },250);
            menuCount++;
        }
    };
};

//event listener
window.addEventListener('scroll', dynamicPostUpdate);
//Action called on the scroll event of the browser, that updates that the content with new posts
function dynamicPostUpdate() {
    let contentHeight = mainContent.offsetHeight;
    let verticalOffset = window.pageYOffset;
    let verticalDistance = verticalOffset + window.innerHeight;
    if (verticalDistance >= contentHeight) {
        footerUI.style.display = 'block';
        setTimeout(function() {
            footerUI.style.display = 'none';
            createPostFeed();
        }, 3000);
    } else {
        footerUI.style.display = 'none';
    }
};

//Data variables to be rendered on the screen
let postImages = [
    'tinified1.jpg',  'tinified2.jpg',  'tinified3.jpg',
    'tinified4.jpg',  'tinified5.jpg',  'tinified6.jpg',
    'tinified7.jpg',  'tinified8.jpg',  'tinified9.jpg',
    'tinified10.jpg', 'tinified11.jpg', 'tinified12.jpg',
    'tinified13.jpg', 'tinified14.jpg', 'tinified15.jpg',
    'tinified16.jpg', 'tinified17.jpg', 'tinified18.jpg',
    'tinified19.jpg', 'tinified20.jpg', 'tinified21.jpg',
    'tinified22.jpg', 'tinified23.jpg', 'tinified24.jpg',
    'tinified25.jpg', 'tinified26.jpg', 'tinified27.jpg',
    'tinified28.jpg', 'tinified29.jpg', 'tinified30.jpg',
    'tinified31.jpg', 'tinified32.jpg', 'tinified33.jpg',
    'tinified34.jpg', 'tinified35.jpg', 'tinified36.jpg',
    'tinified37.jpg'
  ];
let postAvatar = ['third-avatar.png', 'second-avatar.png', 'first-avatar.png'];
let studios = ['WaterLoop', 'Brixton Camp', 'Craps Place'];
let countries = ['Australia', 'Boston', 'Manchester'];
let date = ['December 27, 2020', 'July 18, 2018', 'April 29, 2019'];
let name = ['IKEH AKINYEMI', 'PRISTON FLAPPS', 'BRAID THOMPSON'];
let postLimit = 5;

//Random decision making function
function randomDecision(varaibleItem) {
    return  Math.floor(Math.random() * (varaibleItem));
}

function createPostFeed() {
    let postsPerSeconds = randomDecision(postLimit);
	for(let x = 0; x < postsPerSeconds; x++) {
        console.log(postsPerSeconds);
        let randomPost = randomDecision(postImages.length),
            randomAvatar = randomDecision(postAvatar.length),
            randomStudio =  randomDecision(studios.length),
            randomCountries =  randomDecision(countries.length),
            randomDate = randomDecision(date.length),
            randomName = randomDecision(name.length);
        //the post feed container and it's sub elements
		const generatedPost = document.createElement('div');
        generatedPost.className = 'post-feed';
        
        //The image container
		const imgContainer = document.createElement('div');
		imgContainer.className = 'img-container';
        imgContainer.innerHTML = `<img src="./assets/tinified/${postImages[randomPost]}">`;
        
        //The desrcription container
		let descriptionContainer = document.createElement('div');
        descriptionContainer.className = 'description';
        
        //The studio name container
        let studioName = document.createElement('div');
        studioName.className = 'studio-name';
        let studioSpan = document.createElement('span');
        let studioLink = document.createElement('a');
        studioLink.textContent = `${studios[randomStudio]}`;
        studioSpan.appendChild(studioLink);
        studioName.appendChild(studioSpan);

        //The location and date of photography
        let containerLD = document.createElement('div');
        containerLD.className = 'location-date';
        let locationUI = document.createElement('div'); //location container
        locationUI.className = 'location';
        let locationSpan = document.createElement('span');
        locationSpan.textContent = 'From ' + `${countries[randomCountries]}`;
        let dateUI = document.createElement('div'); //date container
        dateUI.className = 'date';
        let dateUISpan = document.createElement('span');
        dateUISpan.textContent = `${date[randomDate]}`;
        locationUI.appendChild(locationSpan);
        dateUI.appendChild(dateUISpan);
        containerLD.appendChild(locationUI);
        containerLD.appendChild(dateUI);

        //The post-footer container
        let postFooter = document.createElement('div');
        postFooter.className = 'post-footer';
        //the avatar-name container
        let avatarName = document.createElement('div');
        avatarName.className = 'avatar-name';
        let avatarContainer = document.createElement('div'); //avatar container
        avatarContainer.className = 'avatar';
        avatarContainer.innerHTML = `<img src="./assets/image/${postAvatar[randomAvatar]}">`;
        let nameContainer = document.createElement('div'); //name container
        nameContainer.className = 'name';
        let textNode = document.createTextNode('BY ');
        let textSpan = document.createElement('span');
        textSpan.className = 'photographer';
        let textLink = document.createElement('a');
        textLink.textContent = `${name[randomName]}`;
        textSpan.appendChild(textLink);
        nameContainer.appendChild(textNode);
        nameContainer.appendChild(textSpan);
        avatarName.appendChild(avatarContainer);
        avatarName.appendChild(nameContainer);
        //activities container
        let activities = document.createElement('div');
        activities.className = 'activities';
        let postBookmark = document.createElement('div');//the bookmark icon
        postBookmark.className = 'post-bookmark';
        postBookmark.innerHTML = '<a href="#"><i class="fa fa-bookmark"></i></a>';
        let postComment = document.createElement('div');//the comment icon
        postComment.className = 'post-comment';
        postComment.innerHTML = '<a href="#"><i class="fa fa-comment"></i></a>';
        let postLike = document.createElement('div');//the like icon
        postLike.className = 'post-like';
        postLike.innerHTML = '<a href="#"><i class="fa fa-heart"></i></a>';
        activities.appendChild(postBookmark);
        activities.appendChild(postComment);
        activities.appendChild(postLike);
        postFooter.appendChild(avatarName); //appnding to postFooter container
        postFooter.appendChild(activities); //appnding to postFooter container

        descriptionContainer.appendChild(studioName);
        descriptionContainer.appendChild(containerLD);
        descriptionContainer.appendChild(postFooter);


		generatedPost.appendChild(imgContainer);
		generatedPost.appendChild(descriptionContainer);
		mainContent.appendChild(generatedPost);
    };    
};