/* URL VARIABLES DEPENDING ON HOSTNAME 
if (location.hostname == '127.0.0.1') {
  URL_DEFAULT = "/anjee/"
} else {
  URL_DEFAULT = "/"
} */
URL_DEFAULT = "/anjeehye/"
URL_STORIES = URL_DEFAULT + "stories/"
URL_ABOUT = URL_DEFAULT + "about/"
URL_PORTFOLIO = URL_DEFAULT + "portfolio/"

document.addEventListener('swup:contentReplaced', (event) => {
  mainBox = document.querySelector('.page-content');
  mainBox.scrollTo(0,0);
  window.scrollTo(0,0);
});

// IDNEITFY FUNCTIONS THAT NEEDS TO BE RUN EVERY TIME A PAGE IS CLICKED
const activeFunctions = () => {
  photoMasonryGrid();
  typewriter_start();
  copyEmail();
  navBarHighlight();
  effectsFor35mm();
  loop();
  jeehyeAudio();
  styleComments();
};
const resizeFunctions = () => {
  photoMasonryGrid();
}

// redo masonry grid when dom is resized
window.onresize = function() {
  resizeFunctions();
  console.log("resized!")
};

// Swup
const swup = new Swup();
swup.on('contentReplaced', activeFunctions);

// Home text typewriter effect
const typewriter_start = () => {
  const home_text = document.querySelector('#typewriter-text');
  
  const typewriter = new Typewriter(home_text, {
    loop: false,
    delay: 75,
  });
  
  typewriter
  .pauseFor(500)
  .typeString('안녕?')
  .pauseFor(400)
  .typeString('<br>Hey,')
  .pauseFor(100)
  .typeString(" I'm Jeehye.")
  .pauseFor(1000)
  .deleteAll('natural')
  .pauseFor(400)
  .typeString("I study")
  .pauseFor(50)
  .typeString(" mind & brain.")
  .pauseFor(1000)
  .deleteAll('natural')
  .pauseFor(400)
  .typeString("I shoot <a href='./35mm'>35mm</a> film.")
  .pauseFor(1000)
  .deleteAll('natural')
  .pauseFor(80)
  .typeString("For more,")
  .pauseFor(70)
  .typeString(" read my <a href='./stories'>posts</a>.")
  //.pauseFor(1000)
  .start();
};
typewriter_start();

/* Copy email function for about page */
let copyEmail = () => {
  let mailto = document.querySelector('a[href^=mailto]');
  if(mailto) {
    mailto.classList.add('mailto-link');
    
    let messageCopy = 'Click to copy email address';
    let messageSuccess = 'Email address copied to clipboard';
    mailto.insertAdjacentHTML('beforeend', '<span class="mailto-message"></span>');
    document.querySelector('.mailto-message').insertAdjacentHTML('beforeend', messageCopy);
    
    mailto.addEventListener("click", (e) => {
      e.preventDefault(); // Disable default action (yuk!)
      // Click - get href, remove mailto, save in a variable
      let href = mailto.getAttribute("href");
      let email = href.replace('mailto:', '');
      copyToClipboard(email);
      document.querySelector('.mailto-message').innerHTML = messageSuccess;
      setTimeout(function() {
        document.querySelector('.mailto-message').innerHTML = messageCopy;
      }, 2000);
      
      // From Stack Overflow - copies the email variable to clipboard
      function copyToClipboard(text) {
        var dummy = document.createElement("input");
        document.body.appendChild(dummy);
        dummy.setAttribute('value', text);
        dummy.select();
        document.execCommand('copy');
        document.body.removeChild(dummy);
      }
    });
  }
}
copyEmail();

/* HIGHLIGHT CURRENT NAV BAR MENU */
const navBarHighlight = () => { /* clicked item */
  let loc = window.location.pathname;
  let navBarLinks = document.querySelector('.site-nav').querySelectorAll("a");
  
  navBarLinks.forEach(link => {
    currLink = link.innerText.replace('#', '');

    // if current url has it, attach current
    if(loc != URL_DEFAULT) {
      let currLoc = loc.toLowerCase();
      if(currLoc.includes(currLink.toLowerCase())) {
        link.classList.add('current');
      }
      else {
        link.classList.remove('current');
      }
    }
    else {
      navBarLinks.forEach(link => link.classList.remove('current'));
    };
  });
}
navBarHighlight();

/* MASONRY */
let photoMasonryGrid = () => {
  let photoList = document.querySelector('.photo-list');
  if(photoList) {
    imagesLoaded(photoList, function() {
      let masonryGrid = new Masonry(photoList, {
        itemSelector: '.photo-item',
        percentPosition: true
      });
    });
  };
  
};
photoMasonryGrid();

/* SHOW TAG-NAV ONLY WHEN IN 35MM */
/* WHEN AT 35MM PAGE, CHANGE .PAGE-CONTENT BACKGROUND COLOR */
const effectsFor35mm = () => { 
  let loc = window.location.pathname;
  tagNav = document.querySelector(".tag-nav");
  pageWrapper = document.querySelector(".page-content");
  if(loc.includes("35mm")) { // if in 35mm page
      tagNav.classList.remove('hidden-nav');
      pageWrapper.classList.add('translucent-background');
    }
    else {
      tagNav.classList.add('hidden-nav');
      pageWrapper.classList.remove('translucent-background');
    }
}
effectsFor35mm();

/* My AOS - copied from previous website & the internet */
const loop = () => {
  let scroll = window.requestAnimationFrame ||
    // IE Fallback
    function(callback){ window.setTimeout(callback, 1000/60)};
  let elementsToShow = document.querySelectorAll('.aos-jeehye');
  elementsToShow.forEach(function (element) {
    if (isElementInViewport(element)) {
      element.classList.add('is-visible');
    } else {
      element.classList.remove('is-visible');
    }
  });
  scroll(loop);
}
loop();
// Helper function from: http://stackoverflow.com/a/7557433/274826
function isElementInViewport(el) {
  let rect = el.getBoundingClientRect();
  return (
    (rect.top <= 0
      && rect.bottom >= 0)
    ||
    (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight))
    ||
    (rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
  );
}

let jeehyeAudio = () => {
  let audio = document.createElement('audio');
  audio.setAttribute('src', '/anjeehye/assets/jeehye.mp3');
  speakerIcon = document.querySelector('#speakerIcon');
  if(speakerIcon) {
    speakerIcon.addEventListener("click", () => {
      audio.play();
    })
  }
};
jeehyeAudio();

/* STYLE COMMENTS */
let styleComments = () => {
  commentBox = document.querySelector('#disqus_thread')
  commentBox.style.fontFamily = 'Ubuntu Mono'

  commentContents = document.querySelectorAll('.post-message p');
  commentContents.forEach(content => {
    content.style.backgroundColor="white";
    content.style.padding = "1rem";
  });
};
styleComments();