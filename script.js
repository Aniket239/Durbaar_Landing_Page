/* ===================================== banner lazy load ============================================*/
document.addEventListener("DOMContentLoaded", () => {
    const video = document.getElementById('bannerVideo');
    const bannerImage = document.querySelector('.banner_image');
    const muteToggle = document.getElementById('muteToggle');
    const muteButtonIcon = document.getElementById('mute_button');

    const loadVideoSources = () => {
        const sources = video.querySelectorAll('source[data-src]');
        sources.forEach(source => {
            source.src = source.getAttribute('data-src');
        });
        video.load();
    };

    const handleVideoPlay = () => {
        // Fade out the image and fade in the video
        bannerImage.style.opacity = '0';
        video.classList.add('playing');
    };

    const handleVideoCanPlay = () => {
        video.play().then(() => {
            handleVideoPlay();
        }).catch(error => {
            console.error("Error attempting to play the video:", error);
            // Optionally, keep showing the image if video fails to play
        });
    };

    const setupIntersectionObserver = () => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.25
        };

        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    loadVideoSources();
                    video.addEventListener('canplaythrough', handleVideoCanPlay, { once: true });
                    obs.unobserve(entry.target);
                }
            });
        }, observerOptions);

        observer.observe(video);
    };

    const toggleMute = () => {
        video.muted = !video.muted;
        muteButtonIcon.textContent = video.muted ? 'volume_off' : 'volume_up';
    };

    muteToggle.addEventListener('click', toggleMute);

    // Initialize
    setupIntersectionObserver();
});

/*========================================================================================================================== */


/*===================================== scroll after video ends ================================================== */
document.addEventListener('DOMContentLoaded', function () {
    // Set a timeout for 30 seconds (30000 milliseconds)
        setTimeout(function () {
            // Select the welcome section
            var welcomeSection = document.getElementById('welcome');
            console.log('====================================');
            console.log(window.scrollY);
            console.log('====================================');
            if (welcomeSection && window.scrollY < 150) {
                // Calculate the position to scroll to, subtracting the offset (70px)
                var offset = 85; // Offset in pixels
                var elementPosition = welcomeSection.getBoundingClientRect().top + window.pageYOffset;
                var offsetPosition = elementPosition - offset;

                // Scroll to the calculated position smoothly
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            } else {
                console.warn('Element with id "welcome" not found.');
            }
        }, 32000); // 30000 milliseconds = 30 seconds
});

/*========================================================================================================================== */

document.getElementsByClassName('close')[0].onclick = function () {
    var popup = document.getElementById('popupForm');
    popup.style.display = 'none';
    document.body.classList.remove('blurred');
    document.body.style.overflow = 'auto';
};

document.getElementById('openPopup_bottom_nav').onclick = function () {
    var popup = document.getElementById('popupForm');
    popup.style.display = 'block';
    document.body.classList.add('blurred');
    document.body.style.overflow = 'hidden';

};

document.getElementsByClassName('close')[0].onclick = function () {
    var popup = document.getElementById('popupForm');
    popup.style.display = 'none';
    document.body.classList.remove('blurred');
    document.body.style.overflow = 'auto';
};

document.getElementById('openPopup_side_nav').onclick = function () {
    var popup = document.getElementById('popupForm');
    popup.style.display = 'block';
    document.body.classList.add('blurred');
    document.body.style.overflow = 'hidden';

};

document.getElementsByClassName('close')[0].onclick = function () {
    var popup = document.getElementById('popupForm');
    popup.style.display = 'none';
    document.body.classList.remove('blurred');
    document.body.style.overflow = 'auto';
};

// Close the popup if the user clicks anywhere outside of the popup content
window.onclick = function (event) {
    var popup = document.getElementById('popupForm');
    var popupContent = document.querySelector('.popup-content');

    if (event.target == popup) {
        popup.style.display = 'block';
        document.body.classList.add('blurred');
        document.body.style.overflow = 'hidden';
    }
};



// ===================================== Add shadow in nav ================================
const nav = document.querySelector('nav');
const side_icon = document.getElementById('side_icon');
const nav_items = document.querySelectorAll('.nav-items li a');
console.log('====================================');
console.log(nav_items);
console.log('====================================');
function addShadowOnScroll() {
    let scrollPosition = window.scrollY;
    if (scrollPosition > 0) {
        nav.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.3)";
        nav.style.backdropFilter = 'blur(15px)';
        nav.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
        nav.classList.add('scrolled');
        side_icon.style.display = 'flex'
        nav_items.forEach(items => {
            items.style.color = '#986048'
        })
    } else {
        nav.style.boxShadow = "none";
        nav.style.backdropFilter = 'none';
        nav.style.backgroundColor = 'transparent';
        nav.classList.remove('scrolled');
        side_icon.style.display = 'none'
        nav_items.forEach(items => {
            items.style.color = 'white'
        })
    }
}
window.addEventListener('scroll', addShadowOnScroll);
// ================================================== scroll to section =========================================================


document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            const offset = 140;
            window.scrollTo({
                top: targetSection.offsetTop - offset,
                behavior: 'smooth'
            });
        });
    });
});
function openMenu() {
    var checkbox = document.getElementById('hamburger-checkbox');
    const mobileNav = document.querySelector('.mobile-nav');
    if (checkbox.checked) {
        mobileNav.style.display = 'flex';
        mobileNav.style.animationName = 'fadeIn';
    } else {
        mobileNav.style.animationName = 'fadeOut';
        setTimeout(() => {
            mobileNav.style.display = 'none';
        }, 500);  // Delay hiding the menu to allow the animation to complete
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('#nav-links a');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav a');
    const mobileNav = document.querySelector('.mobile-nav');
    var checkbox = document.getElementById('hamburger-checkbox');

    // Function to set the active section
    function setActiveSection(sectionId) {
        mobileNavLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === sectionId) {
                link.classList.add('active');
            }
        });
    }

    // Function to handle scroll event
    function handleScroll() {
        let fromTop = window.scrollY + 80;
        let activeSet = false;
        mobileNavLinks.forEach(link => {
            let section = document.getElementById(link.getAttribute('href').substring(1));
            if (section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
                link.classList.add('active');
                activeSet = true;
            } else {
                link.classList.remove('active');
            }
        });
        return activeSet;
    }

    // Add click event listeners to navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            mobileNav.style.display = 'none';
            checkbox.checked = false;
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            const offset = 70;
            window.scrollTo({
                top: targetSection.offsetTop - offset,
                behavior: 'smooth'
            });
            setActiveSection(targetId);
        });
    });

    mobileNavLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            mobileNav.style.display = 'none';
            checkbox.checked = false;
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            const offset = 70;
            window.scrollTo({
                top: targetSection.offsetTop - offset,
                behavior: 'smooth'
            });
            setActiveSection(targetId);
        });
    });

    // Check initial scroll position on load
    window.addEventListener('load', function () {
        const activeSet = handleScroll();
        if (!activeSet) {
            mobileNavLinks[0].classList.add('active');
        }
    });

    // Handle scroll event
    window.addEventListener('scroll', handleScroll);
});
// ================================================== nav items animation =========================================================

document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('#nav-links li');

    navLinks.forEach((link, index) => {
        setTimeout(() => {
            link.classList.add('animate');
        }, 200 * index);
    });
});

/*============================== gallery scroll ============================================== */

const carousel = document.querySelector('.carousel')
const slider = carousel.querySelector('.carousel_track')
let slides = [...slider.children]

// Initial slides position, so user can go from first to last slide (click to the left first)
slider.prepend(slides[slides.length - 1])

// Creating dot for each slide
const createDots = (carousel, initSlides) => {
    const dotsContainer = document.createElement('div')
    dotsContainer.classList.add('carousel_nav')

    initSlides.forEach((slide, index) => {
        const dot = document.createElement('button')
        dot.type = 'button'
        dot.classList.add('carousel_dot')
        dot.setAttribute('aria-label', `Slide number ${index + 1}`)
        slide.dataset.position = index
        slide.classList.contains('is-selected') && dot.classList.add('is-selected')
        dotsContainer.appendChild(dot)
    })

    carousel.appendChild(dotsContainer)

    return dotsContainer
}

// Updating relevant dot
const updateDot = slide => {
    const currDot = dotNav.querySelector('.is-selected')
    const targetDot = slide.dataset.position

    currDot.classList.remove('is-selected')
    dots[targetDot].classList.add('is-selected')
}

// Handling arrow buttons
const handleArrowClick = arrow => {
    arrow.addEventListener('click', () => {
        slides = [...slider.children]
        const currSlide = slider.querySelector('.is-selected')
        currSlide.classList.remove('is-selected')
        let targetSlide

        if (arrow.classList.contains('jsPrev')) {
            targetSlide = currSlide.previousElementSibling
            slider.prepend(slides[slides.length - 1])
        }

        if (arrow.classList.contains('jsNext')) {
            targetSlide = currSlide.nextElementSibling
            slider.append(slides[0])
        }

        targetSlide.classList.add('is-selected')
        updateDot(targetSlide)
    })
}

const buttons = carousel.querySelectorAll('.carousel_btn')
buttons.forEach(handleArrowClick)

// Handling dot buttons
const handleDotClick = dot => {
    const dotIndex = dots.indexOf(dot)
    const currSlidePos = slider.querySelector('.is-selected').dataset.position
    const targetSlidePos = slider.querySelector(`[data-position='${dotIndex}']`).dataset.position

    if (currSlidePos < targetSlidePos) {
        const count = targetSlidePos - currSlidePos
        for (let i = count; i > 0; i--) nextBtn.click()
    }

    if (currSlidePos > targetSlidePos) {
        const count = currSlidePos - targetSlidePos
        for (let i = count; i > 0; i--) prevBtn.click()
    }
}

const dotNav = createDots(carousel, slides)
const dots = [...dotNav.children]
const prevBtn = buttons[0]
const nextBtn = buttons[1]

dotNav.addEventListener('click', e => {
    const dot = e.target.closest('button')
    if (!dot) return
    handleDotClick(dot)
})

// Auto sliding
const slideTiming = 3000
let interval
const slideInterval = () => interval = setInterval(() => nextBtn.click(), slideTiming)

carousel.addEventListener('mouseover', () => clearInterval(interval))
carousel.addEventListener('mouseleave', slideInterval)
slideInterval()

/*============================== gallery scroll ============================================== */

/* phone number validation start*/
document.addEventListener('DOMContentLoaded', function () {
    // Function to validate phone number
    function validatePhoneNumber(phoneNumber) {
        // Regular expression for 10-digit phone number
        const phoneRegex = /^[0-9]{10}$/;
        return phoneRegex.test(phoneNumber);
    }

    document.getElementById('mobile').addEventListener('input', function () {
        var validation = document.getElementById('validation');
        const phone = document.getElementById('mobile');
        validation.style.display = 'none';
        phone.style.border = '2px solid black';
    });
    

    // Form submission event listener
    const form = document.getElementById('enquiryForm');
    form.addEventListener('submit', function (event) {
        const phoneNumber = document.getElementById('mobile').value;
        var validation = document.getElementById('validation');
        const phone = document.getElementById('mobile');

        if (!validatePhoneNumber(phoneNumber)) {
            event.preventDefault(); // Prevent form submission
            validation.style.display = 'block';
            phone.style.border = '2px solid red';
        }
        else {
            validation.style.display = 'none';
            phone.style.border = '2px solid black';
        }
    });
});

/*============================= typing effect =========================================== */
document.addEventListener('DOMContentLoaded', () => {
    // Function to split text into words and spaces, then wrap words in spans
    function wrapWords(element) {
        // Function to process each node
        function processNode(node) {
            if (node.nodeType === Node.TEXT_NODE) {
                const text = node.textContent;
                const wordsAndSpaces = text.split(/(\s+)/); // Split and keep the spaces
                
                const fragment = document.createDocumentFragment();
                
                wordsAndSpaces.forEach(part => {
                    if (/\s+/.test(part)) {
                        // If the part is whitespace, add it as a text node
                        fragment.appendChild(document.createTextNode(part));
                    } else {
                        // If the part is a word, wrap it in a span
                        const span = document.createElement('span');
                        span.textContent = part;
                        span.classList.add('word'); // Add a class for styling if needed
                        fragment.appendChild(span);
                    }
                });
                
                // Replace the original text node with the new fragment
                node.parentNode.replaceChild(fragment, node);
            } else if (node.nodeType === Node.ELEMENT_NODE) {
                // Recursively process child nodes
                Array.from(node.childNodes).forEach(child => processNode(child));
            }
        }
        
        // Start processing from the root element
        Array.from(element.childNodes).forEach(child => processNode(child));
    }


    // Function to animate words with a staggered delay
    function animateWords(element) {
        const words = element.querySelectorAll('.word');
        words.forEach((word, index) => {
            setTimeout(() => {
                word.classList.add('visible');
            }, index * 100); // Adjust the delay as needed
        });
    }
    
    
    

    // Select the text elements
    const welcomeText = document.getElementById('welcome-text');
    const whyChooseText = document.getElementById('why-choose-text');

    // Wrap words in spans
    wrapWords(welcomeText);
    wrapWords(whyChooseText);

    // Options for the IntersectionObserver
    const options = {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.1 // 10% of the section is visible
    };

    // Callback for IntersectionObserver
    function observerCallback(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const sectionId = entry.target.id;

                if (sectionId === 'welcome') {
                    animateWords(welcomeText);
                    observer.unobserve(entry.target); // Stop observing after animation
                }

                if (sectionId === 'why_choose_us') {
                    // Remove the hidden class to make the text visible
                    whyChooseText.classList.remove('hidden');
                    animateWords(whyChooseText);
                    observer.unobserve(entry.target); // Stop observing after animation
                }
            }
        });
    }

    // Create the IntersectionObserver
    const observer = new IntersectionObserver(observerCallback, options);

    // Observe the sections
    const welcomeSection = document.getElementById('welcome');
    const whyChooseSection = document.getElementById('why_choose_us');

    observer.observe(welcomeSection);
    observer.observe(whyChooseSection);
});
