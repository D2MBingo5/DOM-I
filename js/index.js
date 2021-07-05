const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const navItem1 = document.querySelector('.container header nav a')
console.log(navItem1);
const navItem2 = navItem1.nextElementSibling
console.log(navItem2);
const navItem3 = navItem2.nextElementSibling
console.log(navItem3);
const navItem4 = navItem3.nextElementSibling
console.log(navItem4);
const navItem5 = navItem4.nextElementSibling
console.log(navItem5);
const navItem6 = navItem5.nextElementSibling
console.log(navItem6);

navItem1.textContent = 'Services'
navItem2.textContent = 'Product'
navItem3.textContent = 'Vision'
navItem4.textContent = 'Features'
navItem5.textContent = 'About'
navItem6.textContent = 'Content'

const lineBreak = document.createElement('br')
console.log(lineBreak);

const ctaTextHeader = document.querySelector('.cta .cta-text h1')

ctaTextHeader.textContent = 'DOM'
ctaTextHeader.appendChild(lineBreak)
ctaTextHeader.textContent += ' Is'
ctaTextHeader.appendChild(lineBreak)
ctaTextHeader.textContent += ' Awesome'

console.log(ctaTextHeader);

const ctaButton = document.querySelector('.cta .cta-text button')
ctaButton.textContent = 'Get Started'
console.log(ctaButton);

const ctaImage = document.querySelector('#cta-img')
ctaImage.src = 'img/header-img.png'
console.log(ctaImage);

const topContentHeader1 = document.querySelector('.main-content .top-content .text-content')
console.log(topContentHeader1);
const topContentHeader2 = topContentHeader1.nextElementSibling
console.log(topContentHeader2);

const tch1H4 = topContentHeader1.querySelector('h4')
tch1H4.textContent = 'Features'
console.log(tch1H4);
const tch1P = topContentHeader1.querySelector('p')
tch1P.textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
console.log(tch1P);

const tch2H4 = topContentHeader2.querySelector('h4')
tch2H4.textContent = 'About'
console.log(tch2H4);
const tch2P = topContentHeader2.querySelector('p')
tch2P.textContent = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
console.log(tch2P);