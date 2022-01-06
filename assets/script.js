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
pfMasonryGrid();

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

const activeFunctions = () => {
  pfMasonryGrid();
  typewriter_start();
};

// Swup
const swup = new Swup();
swup.on('contentReplaced', activeFunctions);
// AOS
AOS.init({
  delay: 100,
});

