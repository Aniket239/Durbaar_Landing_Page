/* ===================================== banner lazy load ============================================*/
document.addEventListener("DOMContentLoaded", () => {
    const videos = document.querySelectorAll('video[data-autoplay]');

    const loadVideo = (video) => {
        const sources = video.querySelectorAll('source[data-src]');
        sources.forEach(source => {
            source.src = source.getAttribute('data-src');
        });
        video.load();
        video.play();
    };

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.25
    };

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                loadVideo(entry.target);
                obs.unobserve(entry.target);
            }
        });
    }, observerOptions);

    videos.forEach(video => {
        observer.observe(video);
    });
});
/*========================================================================================================================== */


/*===================================== scroll after video ends ================================================== */
document.addEventListener('DOMContentLoaded', function() {
    // Set a timeout for 30 seconds (30000 milliseconds)
    setTimeout(function() {
        // Select the welcome section
        var welcomeSection = document.getElementById('welcome');
        
        if (welcomeSection) {
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
        nav.style.backdropFilter = 'blur(10px)';
        nav.style.backgroundColor = 'rgba(249, 237, 216, 0.5)';
        nav.classList.add('scrolled');
        side_icon.style.display = 'flex'
        nav_items.forEach(items => {
            items.style.color = 'black'
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


document.addEventListener('DOMContentLoaded', () => {
    // Slider functionality
    const slides = document.querySelectorAll('.slide');
    let counter = 0;
    slides.forEach((slide, index) => {
        slide.style.left = `${index * 100}%`;
    });

    const slideImages = () => {
        slides.forEach((slide) => {
            slide.style.transform = `translateX(-${counter * 100}%)`;
        });
    };

    window.goNextImage = () => {
        counter++;
        if (counter >= slides.length) {
            counter = 0;
        }
        slideImages();
    };

    window.goPrevImage = () => {
        counter--;
        if (counter < 0) {
            counter = slides.length - 1;
        }
        slideImages();
    };

});

/* phone number validation start*/
document.addEventListener('DOMContentLoaded', function () {
    // Function to validate phone number
    function validatePhoneNumber(phoneNumber) {
        // Regular expression for 10-digit phone number
        const phoneRegex = /^[0-9]{10}$/;
        return phoneRegex.test(phoneNumber);
    }

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
        const text = element.textContent;
        const wordsAndSpaces = text.split(/(\s+)/); // Split and keep the spaces

        element.innerHTML = ''; // Clear existing text

        wordsAndSpaces.forEach((part) => {
            if (/\s+/.test(part)) {
                // If the part is whitespace, add it as a text node
                element.appendChild(document.createTextNode(part));
            } else {
                // If the part is a word, wrap it in a span
                const span = document.createElement('span');
                span.textContent = part;
                span.classList.add('word'); // Add a class for styling if needed
                span.style.opacity = '0'; // Initially hide the word
                span.style.display = 'inline-block'; // Ensure proper spacing
                span.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                span.style.transform = 'translateY(20px)'; // Initial position

                // Append the span to the element
                element.appendChild(span);
            }
        });
    }

    // Function to animate words with a staggered delay
    function animateWords(element) {
        const spans = element.querySelectorAll('span.word');
        spans.forEach((span, index) => {
            // Use setTimeout to stagger the animation
            setTimeout(() => {
                span.style.opacity = '1';
                span.style.transform = 'translateY(0)';
            }, index * 100); // 100ms delay between each word
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
