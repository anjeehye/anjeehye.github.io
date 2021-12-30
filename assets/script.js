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

const homeType = () => {
    if(window.location.pathname === URL_DEFAULT){
      const options = {
        stringsElement: "#typed-strings",
        typeSpeed: 60,
        smartBackspace: false,
        loop: true,
        backDelay: 2500,
        backSpeed: 10
      }
      let type = new Typed('#typed', options);
    }
  }