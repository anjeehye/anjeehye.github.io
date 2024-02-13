/* URL VARIABLES DEPENDING ON HOSTNAME 
if (location.hostname == '127.0.0.1') {
  URL_DEFAULT = "/anjee/"
} else {
  URL_DEFAULT = "/"
} */

URL_DEFAULT = "/"
URL_STORIES = URL_DEFAULT + "stories/"
URL_BRAIN = URL_DEFAULT + "brain/"
URL_35MM = URL_DEFAULT + "35mm/"
VERTICAL_HEADER = false

document.addEventListener('swup:contentReplaced', (event) => {
  mainBox = document.querySelector('.page-content');
  mainBox.scrollTo(0,0);
  window.scrollTo(0,0);
});

// IDNEITFY FUNCTIONS THAT NEEDS TO BE RUN EVERY TIME A PAGE IS CLICKED
const activeFunctions = () => {
  photoMasonryGrid();
  postMasonryGrid();
  typewriter_start();
  copyEmail();
  navBarHighlight();
  effectsFor35mm();
  loop();
  jeehyeAudio();
  styleComments();
  disqusForSwup();
  modalPreview();
  scrambleText(scramble_phrases, '.scramble-text-about', 1200);
  toggleNav(w);
  navBarMiddleText();
  backNavBar();
  parallaxEffect();
  animateBrain();
  effectsForStories();
};
const resizeFunctions = () => {
  photoMasonryGrid();
  postMasonryGrid();
  backNavBar();
  parallaxEffect();
}

window.onscroll = function(){
  var w = document.documentElement.clientWidth;
  toggleNav(w);
}
window.onresize = function() {
  var w = document.documentElement.clientWidth;
  toggleNav(w);
  resizeFunctions();
}
window.onload = function() {
  var w = document.documentElement.clientWidth;
  toggleNav(w);
}


// Swup
const swup = new Swup();
swup.on('contentReplaced', activeFunctions);

// Home text typewriter effect
const typewriter_start = () => {
  const home_text = document.querySelector('#typewriter-text');
  
  const typewriter = new Typewriter(home_text, {
    loop: false,
    delay: 50,
  });

  typewriter
  .pauseFor(500)
  .typeString('안녕?')
  .pauseFor(400)
  .typeString('<br>Hey,')
  .pauseFor(100)
  .typeString(" I'm Jeehye.")
  .pauseFor(1000)
  .deleteAll(50)
  .pauseFor(400)
  .typeString("I am a computational")
  .pauseFor(60)
  .typeString(" neuroscientist.")
  .pauseFor(1000)
  // .deleteAll(40)
  .pauseFor(400)
  .typeString("<br>I also shoot <a href='./35mm'>35mm</a> film,")
  .pauseFor(500)
  .typeString("<br>design websites")
  .pauseFor(80)
  .typeString(" (like this one).")
  .pauseFor(1000)
  .pauseFor(120)
  .deleteAll(20)
  .pauseFor(120)
  .typeString("For more,")
  .pauseFor(120)
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
  let navBarLinks = document.querySelector('.site-header').querySelectorAll("a");

  navBarLinks.forEach(link => {
    // get link name from id
    let currLink = link.id.split('-')[1]

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
  let videoList = document.querySelector('.video-list');
  if(photoList) {
    imagesLoaded(photoList, function() {
      let masonryGrid = new Masonry(photoList, {
        columnWidth: '.photo-item',
        itemSelector: '.photo-item',
        percentPosition: true,
      });
    });
  };
  if(videoList) {
    imagesLoaded(videoList, function() {
      let masonryGrid = new Masonry(videoList, {
        itemSelector: '.video-item',
        percentPosition: true
      });
    });
  };
};
photoMasonryGrid();

/* SHOW TAG-NAV ONLY WHEN IN 35MM */
const effectsFor35mm = () => { 
  let loc = window.location.pathname;
  if(true){ 
    tagNav = document.querySelector(".tag-nav");
    if(loc.includes("35mm")) { // if in 35mm page
      tagNav.classList.remove('hidden-nav');
    }
    else {
      tagNav.classList.add('hidden-nav');
    }
  }
  /* WHEN AT 35MM PAGE, CHANGE XX .PAGE-CONTENT BACKGROUND COLOR XX */
  // pageWrapper = document.querySelector(".page-content");
  // if(loc.includes("35mm")) { // if in 35mm page
  //   pageWrapper.classList.add('translucent-background');
  // }
  // else {
  //   pageWrapper.classList.remove('translucent-background');
  // }
}
effectsFor35mm();

/* SHOW CATEGORY-NAV ONLY WHEN IN STORIES */
const effectsForStories = () => { 
  // let loc = window.location.pathname;
  // if(true){ 
  //   catNav = document.querySelector(".category-nav");
  //   if(loc.includes("stories")) { // if in 35mm page
  //     catNav.classList.remove('hidden-nav');
  //   }
  //   else {
  //     catNav.classList.add('hidden-nav');
  //   }
  // }
}
effectsForStories();
// 

let postMasonryGrid = () => {
  let postList = document.querySelector('.post-list');
  if(postList) {
    imagesLoaded(postList, function() {
      let masonryGrid = new Masonry(postList, {
        columnWidth: '.post',
        itemSelector: '.post',
        percentPosition: true
      });
    });
  };  
};
postMasonryGrid();

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
        audio.setAttribute('src', '/assets/jeehye.mp3');
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
        if(commentBox) {
          commentBox.style.fontFamily = 'Ubuntu Mono'
          
          commentContents = document.querySelectorAll('.post-message p');
          commentContents.forEach(content => {
            content.style.backgroundColor="white";
            content.style.padding = "1rem";
          });
        }
      };
      styleComments();
      
      let disqusForSwup = () => {
        let disqusComments = document.querySelector('#disqus_thread');
        if(disqusComments) {
          
          // DISQUS.reset({
          //   reload: true,
          //   config: function () {  
          //     this.page.identifier = $('#disqus_thread').attr('data-id');
          //     this.page.url = window.location.href;
          //   }
          // });
          
          
          var disqus_config = function () {
            this.page.url = window.location.href;
            this.page.identifier = $('#disqus_thread').attr('data-id');
          };
          
          (function() {
            var d = document, s = d.createElement('script');
            s.src = 'https://'+ 'an-jeehye' +'.disqus.com/embed.js';
            s.setAttribute('data-timestamp', +new Date());
            (d.head || d.body).appendChild(s);
          })();
          
          // var disqus_config = function () {
          //   this.page.url = '{{ page.url | absolute_url }}';
          //   this.page.identifier = '{{ page.url | absolute_url }}';
          // };
          
          // (function() {
          //   var d = document, s = d.createElement('script');
          
          //   s.src = 'https://{{ site.disqus.shortname }}.disqus.com/embed.js';
          
          //   s.setAttribute('data-timestamp', +new Date());
          //   (d.head || d.body).appendChild(s);
          // })();
        }
      };
      disqusForSwup();
      
      let modalPreview = () => {
        const modalTrigger = document.querySelectorAll('.modal-link');
        const modalOverlay = document.querySelector('.modal-overlay');
        
        modalTrigger.forEach(trigger => {
          trigger.addEventListener("click", (e) => {
            let image = trigger.getElementsByTagName('img')[0];
            let tags = trigger.getElementsByTagName('p')[0];
            
            // Modal image
            let modalImage = new Image;
            modalImage.src = image.src;
            let modalTags = tags.cloneNode(true);
            
            // Overlay
            modalOverlay.classList.remove('hidden');
            modalOverlay.appendChild(modalImage);
            modalOverlay.appendChild(modalTags);
            
            modalOverlay.addEventListener("click", (e) => {
              modalOverlay.innerHTML = "";
              modalOverlay.classList.add("hidden");
            });
          });
        })
      };
      modalPreview();


// ——————————————————————————————————————————————————
// TextScramble
// From https://codepen.io/soulwire/pen/mEMPrK?editors=0010
// ——————————————————————————————————————————————————
class TextScramble {
  constructor(el) {
    this.el = el
    this.chars = '!<>-_\\/[]{}—=+*^?#________'
    this.update = this.update.bind(this) // bind borrows method
  }
  setText(newText) {
    const oldText = this.el.innerText
    const length = Math.max(oldText.length, newText.length)
    const promise = new Promise((resolve) => this.resolve = resolve)
    this.queue = []
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || ''
      const to = newText[i] || ''
      const start = Math.floor(Math.random() * 40)
      const end = start + Math.floor(Math.random() * 40)
      this.queue.push({ from, to, start, end })
    }
    cancelAnimationFrame(this.frameRequest)
    this.frame = 0
    this.update()
    return promise
  }
  update() {
    let output = ''
    let complete = 0
    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i]
      if (this.frame >= end) {
        complete++
        output += to
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.randomChar()
          this.queue[i].char = char
        }
        output += `<span class="dud">${char}</span>`
      } else {
        output += from
      }
    }
    this.el.innerHTML = output
    if (complete === this.queue.length) {
      this.resolve()
    } else {
      this.frameRequest = requestAnimationFrame(this.update)
      this.frame++
    }
  }
  randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)]
  }
}

let scrambleText = (phrases, div, timeout=800) => {
  const el = document.querySelector(div) 
  const fx = new TextScramble(el)

  setTimeout(function() { // after a delay of .5s
    
  }, 500);
  
  if(el) {
    setTimeout(function() {
      let counter = 0
      const next = () => {
        fx.setText(phrases[counter]).then(() => {
          setTimeout(next, timeout)
        })
        counter = (counter + 1) % phrases.length
      }
      next()
  
    }, timeout)
    
  }
}

// const phrases = ["Hi, I'm Jeehye",
// "I study mind and brain.",
// "I shoot 35mm",
// "For more, read my posts."]
// scrambleText(phrases, '#typewriter-text')
// scrambleText(['지혜', 'Jeehye'], '.scramble-text-name', 1200)
let scramble_phrases = ['Diver 🌊🤿🐙', "Art admirer", 'Doctoral researcher']
scrambleText(scramble_phrases, '.scramble-text-about', 1300)

/* TOGGLING NAV BAR */
var prevScrollpos = window.scrollY;
var w = document.documentElement.clientWidth;

function toggleNav(w) {
  // let currentScrollPos = window.scrollY;
  // let homeNavBar = document.querySelector('.site-header');
  // let secondaryNavBar = document.querySelector('.secondary-navs');

  // let headerHeight = homeNavBar.offsetHeight;
  // let secondaryNavHeight = secondaryNavBar.offsetHeight;
  // let heightDiff = headerHeight - secondaryNavHeight;
  // heightDiff = heightDiff - 16 -4; // Padding of 1rem (16 px) plus some extra

  // if (w < 768) { // mobile
  //   if(window.scrollY <= 50) {
  //     homeNavBar.style.top = 0;
  //   }
  //   else {
  //     if (prevScrollpos >= currentScrollPos) {
  //       homeNavBar.style.top = "0";
  //     } else {
  //       homeNavBar.style.top = "-" + heightDiff + "px";
  //     }
  //     prevScrollpos = currentScrollPos;
  //   }
  //   prevScrollpos = currentScrollPos;
  // }
}
const getMessage = () => {
  switch(location.pathname.split('/')[1]){
    case '35mm':
      return 'Tracking life with 35mm film.';
    case 'brain':
      return 'Neuroscience.';
  case 'stories':
      return '[...]';
    default:
      return 'Hello ㋡';
  }
}

const navBarMiddleText = () => {
  let message = getMessage();
  const navBarMiddle = document.getElementById('nav-middle-text');
  navBarMiddle.textContent = message;
}
navBarMiddleText();

// Match heights of main navbar and navbar back
const backNavBar = () => {
  const navbar = document.getElementsByClassName('main-nav')[0];
  const navbarBack = document.getElementsByClassName('main-nav-back')[0];
  
  if (navbar && navbarBack) {
    const height = navbar.clientHeight;
    navbarBack.style.height = height + 'px';
  }
}
backNavBar();

const parallaxEffect = () => {
  let loc = window.location.pathname;
  if (loc == URL_DEFAULT) { // If at home page
    // Parallax effect with ParallaxMagic.js
    var controller = new ScrollMagic.Controller();

    ///////////////////
    // Box 2 (globe) //
    ///////////////////
  	const globeImgs = [
      "../assets/home/globe1.svg",
      "../assets/home/globe2.svg",
      "../assets/home/globe3.svg",
      "../assets/home/globe4.svg",
      "../assets/home/globe5.svg",
      "../assets/home/globe6.svg",
    ];
    const obj = {curImg: 0};
  	const tween_spinGlobe = TweenMax.to(obj, 0.5,
      {
        curImg: globeImgs.length - 1,	// animate propery curImg to number of images
        roundProps: "curImg",				// only integers so it can be used as an array index
        repeat: 2,									// repeat 3 times
        immediateRender: true,			// load first image automatically
        ease: Linear.easeNone,			// show every image the same ammount of time
        onUpdate: function () {
          if(document.querySelector("#globe-img")) {
            document.querySelector("#globe-img").src = globeImgs[obj.curImg];
          } 
        }
      }
    );
    const scene_spinGlobe = new ScrollMagic.Scene({triggerElement: "#home-box2", duration: 500, triggerHook: 0.9})
    .setTween(tween_spinGlobe)
    // .addIndicators() // add indicators (requires plugin)
    .addTo(controller);
    // build tween
    const tween_box2 = new TimelineMax ()
    .add([
      TweenMax.fromTo("#home-box2 .home-img", 1, {top: "100"}, {top: "-2000", ease: Linear.easeNone}), 
      TweenMax.fromTo("#home-box2 p", 1, {top: "300"}, {top: "0", ease: Linear.easeNone})
    ]);
    // build scene
    const scene_box2 = new ScrollMagic.Scene({triggerElement: "#home-box2", duration: (document.body.scrollHeight*1.5), triggerHook: 0.9,})
            .setTween(tween_box2)
            // .addIndicators() // add indicators (requires plugin)
            .addTo(controller);

    ///////////////////
    // Box 3 (brain) //
    ///////////////////
    const tween_box3 = new TimelineMax ()
    .add([
      TweenMax.fromTo("#home-box3 .home-img", 1, {top: "100"}, {top: "-900", ease: Linear.easeNone}), 
      TweenMax.fromTo("#home-box3 .home-text", 1, {top: "0"}, {top: "-500", ease: Linear.easeNone}),
    ]);

    // build scene
    const scene_box3 = new ScrollMagic.Scene({triggerElement: "#home-box3", duration: (document.body.scrollHeight), triggerHook: 1})
            .setTween(tween_box3)
            .addTo(controller);

    ///////////////////
    // Box 4 (photo) //
    ///////////////////
    // Stop for a while and say : (arrow) tap to see my photos
    const box4RevealText = "˄ tap to see my photos [ ◉¯]"
    const objText = {curImg: 0};
  	const tween_photoText = TweenMax.to(objText, 0.5,
      {
        curImg: box4RevealText.length,	// animate propery curImg to number of images
        roundProps: "curImg",				// only integers so it can be used as an array index
        repeat: 0,									// repeat 3 times
        immediateRender: true,			// load first image automatically
        ease: Linear.easeNone,			// show every image the same ammount of time
        onUpdate: function () {
          if(document.querySelector("#photo-link-text")) {
            document.querySelector("#photo-link-text").innerHTML = box4RevealText.slice(0, objText.curImg);
          }
        }
      }
    );
    // pause while the text loads (box4RevealText.length events)
    const scene_photoText = new ScrollMagic.Scene({triggerElement: "#home-box4", duration: 500})
    .setTween(tween_photoText)
    .setPin( "#home-box4" )
    .addTo(controller);

    // reset pin when resized
    window.onresize = function() {
      scene_photoText.removePin(true);
      scene_photoText.setPin("#home-box4");
      scene_photoText.refresh();
    }

    ///////////////////
    // Box 5 (posts) //
    ///////////////////
    // If parallax effect, add some extra margin for box 5
    const box5 = document.querySelector('#home-box5');
    box5.style.marginTop = '25rem';

    // show second line with delay
    // .is-visible
    new ScrollMagic.Scene({
      triggerElement: "#home-box5",
      triggerHook: 0.9, // show, when scrolled 10% into view
      duration: "80%", // hide 10% before exiting view (80% + 10% from bottom)
      offset: 50 // move trigger to center of element
    })
    .setClassToggle("#box5-small-text", "visible") // add class to reveal
    // .addIndicators() // add indicators (requires plugin)
    .addTo(controller);
  };
};
parallaxEffect();

const animateGlobe = () => {
  let loc = window.location.pathname;
  if(loc == URL_DEFAULT) {
    const frames = document.getElementById("globe-img").children;
    const frameCount = frames.length;
    let i = 0;
    setInterval(function () { 
        frames[i % frameCount].style.display = "none";
        frames[++i % frameCount].style.display = "block";
    }, 200);
  }
}
// animateGlobe();

const animateBrain = () => {
  const frameHeight = 10000/24;
  const frames = 24;
  const brainImgDiv = document.getElementById("brain-img");
  if(brainImgDiv) {
    let frame = 0;
    setInterval(function () {
        const frameOffset = (++frame % frames) * -frameHeight;
        brainImgDiv.style.backgroundPosition = "center " + frameOffset + "px";
    }, 100);
  }
}
animateBrain();