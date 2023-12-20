// video activity
const video = document.getElementById('video');
const playPauseButton = document.querySelector('.action-btn');

document.querySelector('.crush-goals__video').addEventListener('click', function() {
    if (video.paused || video.ended) {
        video.play();
        playPauseButton.classList.add('pause');
    } else {
        video.pause();
        playPauseButton.classList.remove('pause');
    }
});


// create "Transformed" slide
var swiper = new Swiper(".transformed-slider", {
    slidesPerView: 3.5,
    spaceBetween: 10,
    freeMode: true,
    autoplay: {
        delay: 1500,
        enabled: true
    },
    loop: true,
    breakpoints: {
        320: {
          slidesPerView: 1.75,
        },
        768: {
            slidesPerView: 2.5,
        },
        1024: {
          slidesPerView: 3.2,
        },
        1279: {
            slidesPerView: 3.5,
        },
        1901: {
            slidesPerView: 4.5,
        }
    }
});


// create slider "Real Results"
var swiper = new Swiper(".real-results", {
    slidesPerView: 3,
    spaceBetween: 30,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            navigation: {
                enabled: false
            }
        },
        768: {
            slidesPerView: 2,
            navigation: {
                enabled: false
            }
        },
        1279: {
            navigation: {
                enabled: true,
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        },
    }
});


// create timer
function startCountdown(seconds) {
    const hoursElement = document.querySelector('.timer__hours');
    const minutesElement = document.querySelector('.timer__minutes');
    const secondsElement = document.querySelector('.timer__seconds');
  
    // update count function
    function updateCountdown() {
      if (seconds > 0) {
        seconds--;
  
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const remainingSeconds = seconds % 60;
  
        hoursElement.textContent = hours < 10 ? `0${hours}` : hours;
        minutesElement.textContent = minutes < 10 ? `0${minutes}` : minutes;
        secondsElement.textContent = remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds;
  
        // save time in localStorage
        localStorage.setItem('countdownTimer', seconds);
      } else {
        hoursElement.textContent = '00';
        minutesElement.textContent = '00';
        secondsElement.textContent = '00';
        clearInterval(timer);
        // remove info about timer from localStorage
        localStorage.removeItem('countdownTimer');
      }
    }
  
    // get left time form localStorage
    const storedTime = localStorage.getItem('countdownTimer');
    if (storedTime !== null) {
      seconds = parseInt(storedTime, 10);
    }
  
    // init
    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);
}
  
// start timer for 12 hours (43 200 seconds)
startCountdown(43200);
  
  
  


// hide/show faq items dropdown
let servicesItem = document.querySelectorAll('.faq__item')
let servicesItemTitle = document.querySelectorAll('.faq__title')

function removeActiveClassExcept(removeEl) {
    servicesItem.forEach((el) => {
      if (el !== removeEl) {
        el.classList.remove('open');
      }
    });
}

servicesItemTitle.forEach(element => {
    let elementParent = element.parentNode
    element.addEventListener('click', () => {
        if (elementParent.classList.contains('open')) {
            elementParent.classList.remove('open');
        } else {
        // if clicked element not active, remove 'active' from all active elements and added 'active' for clecked element
            removeActiveClassExcept(elementParent);
            elementParent.classList.add('open');
        }
    })
});



//  slots
const packageList = document.querySelector('.choose-package__list');
let hasRunSpotsLeft = false; // flag to track if the function has already been called

// set left spots in localStorage
function setSpotsLeftValue(value, count) {
    localStorage.setItem('spotsLeft', value.toString());
    localStorage.setItem('spotsCount', count); // set left spots count in localStorage
}
  
// get left spots from localStorage
function getSpotsLeftValue() {
    const value = localStorage.getItem('spotsLeft');
    return value ? value : '6 spots left'; // default value
}
  
// display left spots
function displaySpotsLeft() {
    const spotsItem = document.querySelector('.spots-left');
    const spotsLeft = getSpotsLeftValue();
    spotsItem.innerHTML = `&ndash; ${spotsLeft} &ndash;`;
}
  
// call function to see how much spots left
displaySpotsLeft();
  
// if spots already 5 , we don't call event scroll
if(!localStorage.spotsCount) {
    window.addEventListener('scroll', function() {
        console.l
        const blockRect = packageList.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
      
        if (blockRect.top < viewportHeight && blockRect.bottom > 0 && !hasRunSpotsLeft) {
          setTimeout(function() {
            spotsLeft(); // call function from 30 seconds
            setSpotsLeftValue('5 spots left', 5); // save new value in localStorage
          }, 30000);
          hasRunSpotsLeft = true; // set the flag to true to prevent repeated calls
        }
    });
}

function spotsLeft() {
      let spotsItem = document.querySelector('.spots-left');
      spotsItem.innerHTML = '&ndash; 5 spots left &ndash;';
}
  