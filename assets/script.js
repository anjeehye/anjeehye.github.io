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

const activeFunctions = () => {
  pfMasonryGrid();
};

// Swup
const swup = new Swup();
swup.on('contentReplaced', activeFunctions);
// AOS
AOS.init();


