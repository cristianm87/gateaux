const navBrand = document.querySelector('.navigation-brand')

$(document).ready(function(){
    window.location.href = '#'
});

// Center Text

function textCenter() {
    let textCenter = document.querySelectorAll('h1,h2,h3,h4,h5,p,dt,dl,dd')
    textCenter.forEach(text => {
    text.style.textAlign = "center"
    })
}

// Remove padding Container Img-cover

function imgCoverPaddingRemover() {
    document.querySelector('.img-cover').parentElement.style.padding = "0px"
}

// Remove and add class lg/sm

function navigationMediaQuery() {
    const navTag = document.querySelector('nav')
    const mediaQuery = window.matchMedia("(max-width: 700px)")
    const currentWidth = window.innerWidth;

    if (currentWidth < 700) {
        navTag.classList.remove('navigation-lg')
        navBrand.classList.remove('navigation-brand-lg')           
    } else {
        navTag.classList.add('navigation-lg')
        navBrand.classList.add('navigation-brand-lg')
    }

    mediaQuery.addEventListener('change', (e) => {
        if (e.matches) {
            navTag.classList.remove('navigation-lg')
            navBrand.classList.remove('navigation-brand-lg')        
        } else {
            navTag.classList.add('navigation-lg')
            navBrand.classList.add('navigation-brand-lg')
        }
    })
}


// Hide/show Logo Intersection Observer

navBrand.classList.add('navigation-brand-display')

function logoIntersectionDisplay() {
    const sectionLogo = document.querySelector('.section-logo')
    const navigationElement = document.querySelector('.navigation')

    const sectionObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                navBrand.classList.add('navigation-brand-visible')
                navBrand.classList.remove('navigation-brand-hidden')
                navigationElement.classList.add('navigation-bg-color')
            } else {
                navigationElement.classList.remove('navigation-bg-color')
                navBrand.classList.remove('navigation-brand-visible')
                navBrand.classList.add('navigation-brand-hidden')
                navBrand.classList.remove('navigation-brand-display')
            }
        })
    })
    sectionObserver.observe(sectionLogo)
}

imgCoverPaddingRemover();
textCenter();
navigationMediaQuery();
logoIntersectionDisplay();




