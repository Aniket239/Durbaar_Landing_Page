document.getElementsByClassName('close')[0].onclick = function() {
    var popup = document.getElementById('popupForm');
    popup.style.display = 'none';
    document.body.classList.remove('blurred');
    document.body.style.overflow = 'auto';
};

document.getElementById('openPopup_bottom_nav').onclick = function() {
    var popup = document.getElementById('popupForm');
    popup.style.display = 'block';
    document.body.classList.add('blurred');
    document.body.style.overflow = 'hidden';

};

document.getElementsByClassName('close')[0].onclick = function() {
    var popup = document.getElementById('popupForm');
    popup.style.display = 'none';
    document.body.classList.remove('blurred');
    document.body.style.overflow = 'auto';
};

document.getElementById('openPopup_side_nav').onclick = function() {
    var popup = document.getElementById('popupForm');
    popup.style.display = 'block';
    document.body.classList.add('blurred');
    document.body.style.overflow = 'hidden';

};

document.getElementsByClassName('close')[0].onclick = function() {
    var popup = document.getElementById('popupForm');
    popup.style.display = 'none';
    document.body.classList.remove('blurred');
    document.body.style.overflow = 'auto';
};

// Close the popup if the user clicks anywhere outside of the popup content
window.onclick = function(event) {
    var popup = document.getElementById('popupForm');
    var popupContent = document.querySelector('.popup-content');

    if (event.target == popup) {
        popup.style.display = 'block';
        document.body.classList.add('blurred');
        document.body.style.overflow = 'hidden';
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const hamburgerButton = document.getElementById('hamburgerButton');
    const menu = document.getElementById('menu');
    const menuLinks = menu.querySelectorAll('a');

    hamburgerButton.addEventListener('click', () => {
        menu.classList.toggle('open');
    });

    menuLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent default anchor behavior
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            const navbarHeight = document.getElementById('navbar').offsetHeight;
            const targetPosition = targetSection.offsetTop - navbarHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });

            menu.classList.remove('open');
        });
    });

    window.addEventListener('scroll', () => {
        var bottom_nav = document.getElementById("bottom_nav");
        var side_enquiry_button = document.getElementById("side_enquiry_button");
        var navbar = document.getElementById("navbar");
        var menuTags = document.querySelectorAll('.menu_tag');
        var sideIcons = document.getElementById("side_icon");
        if (window.scrollY > 0) {
            navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.4)';
            navbar.style.backdropFilter = 'blur(10px)'
            navbar.classList.add('scrolled');
            bottom_nav.style.display = 'flex';
            sideIcons.style.display = 'flex';
            
            // Change menu color to black only on non-mobile view
            if (window.innerWidth >= 768) {
                menuTags.forEach(tag => {
                    tag.style.color = 'black';
                });
            }
    
            if (window.innerWidth >= 768) {
                side_enquiry_button.style.display = 'block';
            }
        } else {
            navbar.style.backgroundColor = 'transparent';
            navbar.style.backdropFilter = 'blur(0px)'
            navbar.classList.remove('scrolled');
            sideIcons.style.display = 'none';
            
            // Change menu color to white on scroll up
            if (window.innerWidth >= 768) {
                menuTags.forEach(tag => {
                    tag.style.color = 'white';
                });
            }
    
            bottom_nav.style.display = 'none';
            if (window.innerWidth > 768) {
                side_enquiry_button.style.display = 'none';
            }
        }
    
        // Ensure menu color stays white in mobile view
        if (window.innerWidth < 768) {
            menuTags.forEach(tag => {
                tag.style.color = 'white';
            });
        }
    });
    
    
    
    



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
        else{
            validation.style.display = 'none';
            phone.style.border = '2px solid black';
        }
    });
});
/* phone number validation end*/
