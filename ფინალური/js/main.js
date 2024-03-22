(function () {
    "use strict";

    // Dropdown on mouse hover
    document.addEventListener("DOMContentLoaded", function () {
        function toggleNavbarMethod() {
            if (window.innerWidth > 992) {
                document.querySelectorAll('.navbar .dropdown').forEach(function (dropdown) {
                    dropdown.addEventListener('mouseover', function () {
                        dropdown.querySelector('.dropdown-toggle').click();
                    });
                    dropdown.addEventListener('mouseout', function () {
                        dropdown.querySelector('.dropdown-toggle').click();
                        dropdown.querySelector('.dropdown-toggle').blur();
                    });
                });
            } else {
                document.querySelectorAll('.navbar .dropdown').forEach(function (dropdown) {
                    dropdown.removeEventListener('mouseover', function () {});
                    dropdown.removeEventListener('mouseout', function () {});
                });
            }
        }
        toggleNavbarMethod();
        window.addEventListener('resize', toggleNavbarMethod);
    });

    // Back to top button
    window.addEventListener('scroll', function () {
        var backToTopButton = document.querySelector('.back-to-top');
        if (window.scrollY > 100) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    document.querySelector('.back-to-top').addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Facts counter
    var counterElements = document.querySelectorAll('[data-toggle="counter-up"]');
    counterElements.forEach(function (counterElement) {
        var delay = parseInt(counterElement.getAttribute('data-delay'));
        var time = parseInt(counterElement.getAttribute('data-time'));
        counterUp(counterElement, {
            delay: delay,
            time: time
        });
    });

    // Courses carousel
    var coursesCarousel = new Siema({
        selector: '.courses-carousel',
        loop: true,
        perPage: {
            0: 1,
            576: 2,
            768: 3,
            992: 4
        }
    });

    // Team carousel
    var teamCarousel = new Siema({
        selector: '.team-carousel',
        loop: true,
        perPage: {
            0: 1,
            576: 1,
            768: 2,
            992: 3
        },
        onInit: function () {
            var nav = document.querySelector('.team-carousel .prev');
            nav.addEventListener('click', function () {
                teamCarousel.prev();
            });
            nav = document.querySelector('.team-carousel .next');
            nav.addEventListener('click', function () {
                teamCarousel.next();
            });
        }
    });

    // Testimonials carousel
    var testimonialCarousel = new Siema({
        selector: '.testimonial-carousel',
        loop: true,
        perPage: 1,
        onInit: function () {
            var nav = document.querySelector('.testimonial-carousel .prev');
            nav.addEventListener('click', function () {
                testimonialCarousel.prev();
            });
            nav = document.querySelector('.testimonial-carousel .next');
            nav.addEventListener('click', function () {
                testimonialCarousel.next();
            });
        }
    });

    // Related carousel
    var relatedCarousel = new Siema({
        selector: '.related-carousel',
        loop: true,
        perPage: {
            0: 1,
            576: 1,
            768: 2
        },
        onInit: function () {
            var nav = document.querySelector('.related-carousel .prev');
            nav.addEventListener('click', function () {
                relatedCarousel.prev();
            });
            nav = document.querySelector('.related-carousel .next');
            nav.addEventListener('click', function () {
                relatedCarousel.next();
            });
        }
    });

})();

fetch("https://reqres.in/api/users?page=2", {
        method: "GET",
    })
    .then(function (responsedata) {
        console.log(responsedata);
        if (!responsedata.ok) {
            throw responsedata.status;
        }
        return responsedata.json();
    })
    .then(function (responseInfoJs) {
        console.log(responseInfoJs);
        const fragment = document.createDocumentFragment();

        responseInfoJs.data.forEach(function (item) {
            let li = document.createElement("li");

            let pUserInfo = document.createElement("p");
            pUserInfo.textContent = item.first_name + ' ' + item.last_name;

            let imgElement = document.createElement("img");
            imgElement.src = item.avatar;

            li.appendChild(pUserInfo);
            li.appendChild(imgElement);
            fragment.appendChild(li);
        });
        document.getElementById("list-users").innerHTML = "";
        document.getElementById("list-users").appendChild(fragment);

        totalPages = responseInfoJs.total_pages;
    })
    .catch(function (error) {
        if (error === 404) {
            let pError = document.createElement("p");
            pError.textContent = "Server Error";
            document.getElementById("server-api").appendChild(pError);
        } else {
            console.log("Error Text");
        }
    });
    document.querySelector('#coockies-btn').addEventListener('click',() =>{
        document.querySelector('#coockie').style.display = 'none'
      })