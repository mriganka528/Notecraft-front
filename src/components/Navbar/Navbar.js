* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    overflow-x: hidden;
}

body {
    overflow-x: hidden;
}

ul {
    gap: 2rem;
    list-style-type: none;
}

img {
    cursor: pointer;
}

.header {
    background: rgb(255, 255, 255);
    position: sticky;
    top: 0;
    left: 0;
    z-index: 1000;
    backdrop-filter: blur(20px);
    box-shadow: 2px 3px 35px;
    height: 9rem;
    padding: 2.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: all 0.3s linear, ;

}

.logo {
    width: 16rem;
    border-radius: 30px;
    transition: transform 0.3s linear;
}

.navbar {
    background: transparent;
    list-style-type: none;
}

.navbar-list {
    display: flex;
    gap: 4.5rem;
    margin-top: 1rem;
    justify-content: center;
    align-items: center;
    list-style-type: none;
}

.navbar-links:link,
.navbar-links:visited {
    display: inline-block;
    text-transform: capitalize;
    text-decoration: none;
    font-size: 2.5rem;
    color: #000000;
    transition: all 0.5s;
}

.button-84:hover {
    color: #fff;
}

.mobile_mood {
    display: none;
}

.mobile_auth_section {
    display: none;
}

.navbar-links:hover {
    transform: translateY(-20%) scale(1.1);
}

.end_items {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2.5rem;
}

.mobile_nav_btn {
    display: none;
    background-color: transparent;
    cursor: pointer;
    padding: .4rem;
}

.mobile_nav_btn .close_icon {
    display: none;
}

@media (max-width:1355px) {
    .navbar-list {
        gap: 2rem;
    }

    .header .logo {
        width: 13rem;
    }

    .navbar-links:link,
    .navbar-links:visited {

        font-size: 2.3rem;

    }
}

@media (max-width:1145px) {
    .navbar-list {
        gap: 1.5rem;
    }

    .header .logo {
        width: 12rem;
    }

    .navbar-links:link,
    .navbar-links:visited {

        font-size: 1.8rem;

    }
}

/*____________CSS for small devices__________ */

@media (max-width:1060px) {

    .mobile_nav_btn {
        display: block;
        z-index: 999;
    }

    .mobile_mood {
        display: inline-block;
    }

    .mood {
        display: none;
    }

    .mobile_auth_section {
        display: inline-block;
    }

    .auth_section {
        display: none;
    }

    .header .logo {
        width: 10rem;
    }

    .header {
        height: 6rem;
        position: relative;
    }

    .navbar {
        /* display: none; */
        width: 100%;
        height: 100vh;
        background: rgba(255, 255, 255, 0.9);
        backdrop-filter: blur(20px);
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        transform: translateX(100%);
        transition: all 0.4s linear;
        opacity: 0;
        visibility: hidden;
        pointer-events: none;
    }

    .navbar-list {
        flex-direction: column;
        align-items: center;
        gap: 4rem;
    }

    .active .navbar {
        transform: translateX(0);
        opacity: 1;
        visibility: visible;
        pointer-events: auto;
    }

    .active .mobile_nav_btn .close_icon {

        display: block;
    }

    .active .mobile_nav_btn .open_icon {

        display: none;
    }

    .dark .navbar {
        background: rgba(1, 1, 1, .9);
    }

}

/*______________CSS For dark theme_______________*/

.dark {
    background-color: #010101;
    box-shadow: none;
    color: rgb(228, 224, 224);

}

.dark .navbar-links,
.dark .mobile_nav_btn i {
    color: rgb(236, 233, 233);

}
