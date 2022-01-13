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

// testing Masonry and imagesLoaded
let pfMasonryGrid = () => {
  let projectBox = document.querySelector('.stories');
  if(projectBox) {
    imagesLoaded(projectBox, function() {
      let masonryGrid = new Masonry('.stories', {
        itemSelector: '.post-list',
      });
    });
  };
};
//pfMasonryGrid();

// Home text typewriter effect

const typewriter_start = () => {
  const home_text = document.querySelector('#typewriter-text');

  const typewriter = new Typewriter(home_text, {
    loop: false,
    delay: 75,
  });

  typewriter
    .pauseFor(500)
    .typeString('Nothing')
    .pauseFor(300)
    .typeString(' so gentle')
    .pauseFor(100)
    .typeString(' as')
    .pauseFor(50)
    .typeString(' real strength.')
    //.deleteChars(10)
    //.pauseFor(1000)
    .start();
};
typewriter_start();


// IDNEITFY FUNCTIONS THAT NEEDS TO BE RUN EVERY TIME A PAGE IS CLICKED

const activeFunctions = () => {
  typewriter_start();
  copyEmail();
  navBarHighlight();
};

// Swup
const swup = new Swup();
swup.on('contentReplaced', activeFunctions);
// AOS
AOS.init({
  delay: 100,
});

let copyEmail = () => {
  let mailto = document.querySelector('a[href^=mailto]');
  console.log(mailto);
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
const navBarHighlight = () => {
  let loc = window.location.pathname;
  let locArray = ["35mm", "about", "stories"];
  let navBarLinks = document.querySelector('.site-nav').querySelectorAll("a");

  locArray.forEach((currLoc, currIndex) => {
    if(loc != URL_DEFAULT) {
      if(loc.includes(currLoc)) {
        navBarLinks.forEach((menu, index) => {
          if(index == currIndex) {
            menu.classList.add('current');
          } else {
            menu.classList.remove('current');
          }
        });
      }
    } else {
      navBarLinks.forEach(menu => menu.classList.remove('current'));
    }
  });
}
navBarHighlight();