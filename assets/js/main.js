let navbarMoreWraps = document.getElementsByClassName("header__navbar-more-wrap");
let navbarMoreWrap = navbarMoreWraps[0];

// .header__navbar-notification click handler
let navbarNotifications = document.getElementsByClassName("header__navbar-notification");
let navbarNotification = navbarNotifications[0];
let navbarNotificationWraps = document.getElementsByClassName("header__navbar-notification-wrap");
let navbarNotificationWrap = navbarNotificationWraps[0];

navbarNotificationWrap.addEventListener("click", function (e) {
    e.stopPropagation();
});
navbarNotification.addEventListener("click", function () {
    if (navbarNotificationWrap.style.display == "block") {
        navbarNotificationWrap.style.display = "none";
    } else {
        navbarNotificationWrap.style.display = "block";
    }
});

let navbarNotificationOptions = document.getElementsByClassName("header__navbar-notification-option");
let navBarNotificationActivity = document.getElementById("header__navbar-notification-activity");
let navBarNotificationNews = document.getElementById("header__navbar-notification-news");

let navbarNotificationActivity = document.getElementById("header__navbar-notication-activity");
let navbarNotificationNews = document.getElementById("header__navbar-notication-news");

navBarNotificationActivity.addEventListener("click", function () {
    removeActive();
    navBarNotificationActivity.classList.add("header__navbar-notification-option--active");

    navbarNotificationWrap.removeChild(navbarNotificationNews);
    navbarNotificationWrap.appendChild(navbarNotificationActivity);
});
navBarNotificationNews.addEventListener("click", function () {
    removeActive();
    navBarNotificationNews.classList.add("header__navbar-notification-option--active");
    navbarNotificationWrap.removeChild(navbarNotificationActivity);
    navbarNotificationNews.style.display = "block";
    navbarNotificationWrap.appendChild(navbarNotificationNews);
});

function removeActive() {
    for (let i = 0; i < navbarNotificationOptions.length; i++) {
        navbarNotificationOptions[i].classList.remove("header__navbar-notification-option--active");
    }
}

// .header__navbar-more click handler
let navbarMores = document.getElementsByClassName("header__navbar-more");
let navbarMore = navbarMores[0];

navbarMore.addEventListener("click", function () {
    if (navbarMoreWrap.style.display == "block") {
        navbarMoreWrap.style.display = "none";
        // navbarMoreWrap.removeChild()
    } else {
        navbarMoreWrap.style.display = "block";
    }
});