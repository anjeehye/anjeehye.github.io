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
  scrambleText(scramble_phrases, '.scramble-text-about', 1200)
};
const resizeFunctions = () => {
  photoMasonryGrid();
  postMasonryGrid();
}

// redo masonry grid when dom is resized
window.onresize = function() {
  resizeFunctions();
};

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
  .deleteAll(20)
  .pauseFor(400)
  .typeString("I study")
  .pauseFor(60)
  .typeString(" mind & brain.")
  .pauseFor(1000)
  .deleteAll(20)
  .pauseFor(400)
  .typeString("I shoot <a href='./35mm'>35mm</a> film.")
  .pauseFor(1000)
  .deleteAll(20)
  .pauseFor(80)
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
/* WHEN AT 35MM PAGE, CHANGE .PAGE-CONTENT BACKGROUND COLOR */
const effectsFor35mm = () => { 
  let loc = window.location.pathname;
  if(true){ //VERTICAL_HEADER
    tagNav = document.querySelector(".tag-nav");
    if(loc.includes("35mm")) { // if in 35mm page
      tagNav.classList.remove('hidden-nav');
    }
    else {
      tagNav.classList.add('hidden-nav');
    }
  }
  pageWrapper = document.querySelector(".page-content");
  if(loc.includes("35mm")) { // if in 35mm page
    pageWrapper.classList.add('translucent-background');
  }
  else {
    pageWrapper.classList.remove('translucent-background');
  }
}
effectsFor35mm();

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
            console.log("1",tags);
            
            // Modal image
            let modalImage = new Image;
            modalImage.src = image.src;
            let modalTags = tags.cloneNode(true);
            console.log(modalTags);
            
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
