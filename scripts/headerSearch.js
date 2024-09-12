const searchInput = document.querySelector('.js-header-input');
let inputContainer = document.querySelector('.js-input-header-container');
const searchButton = document.querySelector('.js-search-button-container');

function takeHeaderInputWider(){  
  if(inputContainer.className === 'input-header-container js-input-header-container'){
    inputContainer.className = 'input-header-container js-input-header-container wider-header-input'
  }
}

searchInput.addEventListener('keydown', (event)=>{
  if(event.key === 'Enter'){
    if( inputContainer.className === 'input-header-container js-input-header-container wider-header-input'){
      inputContainer.className = 'input-header-container js-input-header-container';
    }
  }
});

window.addEventListener('click', (event)=>{

  if(event.target.className === 'search-button-container js-search-button-container' 
    || 
    event.target.className !== 'input-header-container js-input-header-container'
  ||
    event.target.className !== 'input-header-container js-input-header-container wider-header-input')
    {
    if( inputContainer.className === 'input-header-container js-input-header-container wider-header-input'){
      inputContainer.className = 'input-header-container js-input-header-container';
    }
  }

  if(event.target.className === 'js-header-input'){
    takeHeaderInputWider();
  }
})

// burder nav connect

const burger_enter_btn = document.querySelector('.js-burger-button-container');
let burger_container = document.querySelector('.js-nurger-navbar');
let grey_sheet = document.querySelector('.js-grey-sheet');
let red_sheet = document.querySelector('.js-red-sheet');
let white_sheet = document.querySelector('.js-white-sheet');
const burger_exit_btn = document.querySelector('.js-burger-exit');

burger_enter_btn.addEventListener('click', ()=>{
  
    showElement(burger_container);
    showElement(grey_sheet);
    
    setTimeout(()=>{
      showElement(red_sheet)
    }, 500);
  
    setTimeout(()=>{
      showElement(white_sheet)
    }, 1000); 
})


function showElement(element){
  element.classList.add('show-content');
}

function hideElement(element){
  element.classList.remove('show-content');
}

burger_exit_btn.addEventListener('click', ()=>{
 
  hideElement(white_sheet);

  setTimeout(()=>{
    hideElement(red_sheet)
  }, 400);

  setTimeout(()=>{
    hideElement(grey_sheet)
  }, 900);

  setTimeout(()=>{
    hideElement(burger_container);
  }, 1000)
})

