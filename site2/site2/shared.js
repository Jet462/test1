//DOM Document Obeject Model
//alert('This js works!');

var myBackdrop = document.querySelector('.backdrop');
var myModal = document.querySelector('.modal');
var modalNoButton = document.querySelector('.modal__action--negative');
var myToggleButton = document.querySelector('.toggle-button');
var myMobileNav = document.querySelector('.mobile-nav');

//console.dir(myBackdrop.style.backgroundImage);
//console.dir(myBackdrop.style['background-image']);
//------------------//-----------------//
//console.log(myBackdrop);
  //element view in console
//console.dir(myBackdrop);
  //see the object u can work with in an object notation.
  //It's the DOM presentation of HTML element.
  //"Document" provided by browser, it give access to the parsed document.
  //with document we can access properties and   methods, the method we need to get access to an element is "querySelector".
  //".backdrop" is the argument which is the CSS seletor.
//------------------//------------------//

var selectPlanButtons = document.querySelectorAll('.plan button');

 console.dir(selectPlanButtons);
for (var i = 0; i < selectPlanButtons.length; i++) {
  selectPlanButtons[i].addEventListener('click', function() {
//        myModal.style.display = 'block';
//        myBackdrop.style.display = 'block';
//        myModal.className = 'open'; not working.
        myModal.classList.add('open');
        myBackdrop.classList.add('open');
        //adding CSS class:"open".
    });
}
  //var is iteration variable;
  //var in NodeList have a index 0, "i=0" select the 1st button element for the 1st run of the loop.

myBackdrop.addEventListener("click", function() {
//   myMobileNav.style.display = 'none';
    myMobileNav.classList.remove('open');
   closeModal();
//   myBackdrop.style.display = 'none';
});

  //myBackdrop.addEventListener("click", closeModal);
if (modalNoButton) {
modalNoButton.addEventListener('click', closeModal); 
}

function closeModal() {
//   myBackdrop.style.display = 'none';
//   myModal.style.display = 'none';
    if (myModal) {
    myModal.classList.remove('open');
    }
    myBackdrop.classList.remove('open');
}
  // -- function name: "closeModal" -- // 

  //-------------------------------------------//
myToggleButton.addEventListener('click', function() {
//    myMobileNav.style.display = 'block';
//    myBackdrop.style.display = 'block';
    myMobileNav.classList.add('open');
    myBackdrop.classList.add('open');
    
})