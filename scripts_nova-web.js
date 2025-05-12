const menuBtn = document.querySelector('.nav-btn');
const menuSus = document.querySelector('.menu_sus');
const menuContainer = document.querySelector('.menu-container');
const navTopbar = document.querySelector('.nav-topbar');
const overlay = document.querySelector('.overlay');

menuBtn.addEventListener('click', function(){
    document.querySelector('.menu_sus').classList.toggle('active');
    navTopbar.classList.toggle('active');
    overlay.classList.toggle('active');
    this.classList.toggle('active');
});

document.addEventListener('click', (e) => {
    if(!menuContainer.contains(e.target)) {
        menuSus.classList.remove('active')
        menuBtn.classList.remove('active');
        overlay.classList.remove('active');
    }
})



function progressValue(){  
    $('.progress-bar').each(function(){    
      var positionProgressValue = $(this).children('.progress-value').css('left','auto');
      var progressBarValue = $(this).children('.progress-value').html();    
      $(this).width(progressBarValue);    
      if($(this).width() < 21){
        positionProgressValue.css('left','0');
      }    
    });
  }
  progressValue();
  $(window).resize(function(){
    progressValue();
  });







let aspectRatioGroup = document.querySelector('#aspectRatio--group .segmentedControl');
let radios = aspectRatioGroup.querySelectorAll('input');
let i = 1;

// set CSS Var to number of radios we have
aspectRatioGroup.style.setProperty('--options',radios.length);

// loop through radio elements
radios.forEach((input)=>{
	// store position as data attribute
	input.setAttribute('data-pos',i);
	
	// add click handler to change position
	input.addEventListener('click',(e)=>{
		aspectRatioGroup.style.setProperty('--options-active',e.target.getAttribute('data-pos'));
	});
	
	// increment counter
	i++;
});

// add class to enable the sliding pill animation, otherwise it uses a fallback
aspectRatioGroup.classList.add('useSlidingAnimation');