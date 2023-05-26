// get slider items | array.from[ES6 feature]
var sliderImages = Array.from(document.querySelectorAll('.slider-container img'));

// get number of slider
var slidesCount = sliderImages.length;

// set current slide
var currentSlide =1;

// slide number element
var slideNumberElement = document.getElementById('slide-number');

// previous and next buttons
var nextButton = document.getElementById('next');
var prevButton = document.getElementById('prev');


// Handle Previous and Next buttons
nextButton.onclick = nextSlide;
prevButton.onclick = prevslide;

// create the pagination list
var paginationElement = document.createElement('ul');

// set id on created ul element
paginationElement.setAttribute('id','pagination-ul');

// create list items based on slides count
for (var i=1; i<=slidesCount;i++){

    // create the li
    var paginationItem = document.createElement('li');

    // set custom attribute
    paginationItem.setAttribute('data-index',i);

    // set item content
    paginationItem.appendChild(document.createTextNode(i));


    // append items to the  main ul list
    paginationElement.appendChild(paginationItem);
}

// add the created ul element to the page
document.getElementById('indicators').appendChild(paginationElement);



// get the new created ul
var paginationCreatedUl = document.getElementById('pagination-ul');


// get pagination items | array.from[ES6 feature]
var paginationBullets = Array.from(document.querySelectorAll('#pagination-ul li'));

// loop thrugh all bullets items
for(i=0 ; i < paginationBullets.length ; i++){

    paginationBullets[i].onclick = function(){

        currentSlide = parseInt(this.getAttribute('data-index'));

        theChecker();
    }
}


// trigger the checker function
theChecker();


// next slide function
function nextSlide() {

    if(nextButton.classList.contains('disabled')){
        // do nothing
        return false;
    } else {
        currentSlide++

        theChecker();
    }
}

// previous  slide function
function prevslide(){
    if(prevButton.classList.contains('disabled')) {
        // do nothing
        return false;
    } else {
        currentSlide--

        theChecker();
    }
}

// create the checker function
function theChecker(){
    // set the slide number
    slideNumberElement.textContent = 'slide #' + (currentSlide) + ' of ' + (slidesCount);

// remove all active classes
    removeAllActive();

    // set active class on current slide 
    sliderImages[currentSlide - 1].classList.add('active');

    // set active class on current pagintion item
    paginationCreatedUl.children[currentSlide - 1].classList.add('active');
    

    // check if the current slide is the first
    if(currentSlide == 1){
        
        // add disabled class on previous button
        prevButton.classList.add('disabled');
    }else{
        // remove disabled class from previous button
        prevButton.classList.remove('disabled');
    }

    // check if the current slide is the last
    if(currentSlide == slidesCount){
        
        // add disabled class on next button
        nextButton.classList.add('disabled');
    }else{
        // remove disabled class from next button
        nextButton.classList.remove('disabled');
    }
}

// remove all active classes from images and pagination bulllets
function removeAllActive(){

    // loop through images
    sliderImages.forEach(function(img){

        img.classList.remove('active');
    });


    // loop through paginationBullets
    paginationBullets.forEach(function(bullet){


        bullet.classList.remove('active');
    });
}