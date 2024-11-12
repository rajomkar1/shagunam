 class SpecialHeader extends HTMLElement{
   connectedCallback(){
     this.innerHTML= ` <style>
     * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
    font-family: "Inter", sans-serif;
}

body {
    background: #FFFFFF; /* White background */
    color: #000000; /* Black text color */
}

header {
    position: fixed;
    width: 100%;
    top: 0;
    right: 0;
    z-index: 1000;
    padding: 35px 8%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #FFFFFF; /* White background for header */
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Soft shadow for a premium feel */
    transition: all 0.5s ease;
}

.logo {
    display: flex;
    align-items: center;
    font-size: 28px;
    color: #000000; /* Black logo text */
    font-weight: 800;
}

.logo img {
    width: 50px;
    height: auto;
}

.navlist {
    display: flex;
}

.navlist a {
    display: inline-block;
    margin: 0 35px;
    color: #000000; /* Black text for nav links */
    font-size: 16px;
    font-weight: 600;
    transition: all 0.5s ease;
}

.navlist a:hover {
    color: #555555; /* Dark gray text on hover */
    text-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); /* Subtle shadow for hover effect */
}

.nav-right {
    display: flex;
    align-items: center;
}

.btn {
    display: inline-block;
    padding: 12px 30px;
    background: #000000; /* Black background for button */
    font-size: 14px;
    font-weight: 600;
    color: #FFFFFF; /* White text on button */
    border-radius: 10px;
    margin-right: 12px;
    transition: all 0.4s ease;
}

.btn:hover {
    background: #FFFFFF; /* Switch to white on hover */
    color: #000000; /* Black text on hover */
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.3); /* Premium shadow effect */
    transform: scale(1.05); /* Slight scale-up for hover effect */
}

#menu-icon {
    font-size: 34px;
    color: #000000; /* Black color for menu icon */
    z-index: 10001;
    cursor: pointer;
    display: none; /* Initially hidden */
}

.container {
    height: 100vh;
    width: 100%;
    background: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
}

.container h1 {
    font-size: 4rem;
    font-weight: 800;
    color: #000000; /* Black color for main heading */
}

@media (max-width: 1300px) {
    header {
        padding: 20px 4%;
    }
}

@media (max-width: 1050px) {
    .logo {
        font-size: 25px;
    }
    .logo img {
        width: 40px;
        height: auto;
    }
    .navlist a {
        margin: 0 25px;
    }
    .btn {
        padding: 11px 23px;
    }
    .container h1 {
        font-size: 3.2rem;
    }
}

@media (max-width: 940px) {
    #menu-icon {
        display: block; /* Show menu icon on small screens */
    }
    .navlist {
        position: absolute;
        top: 0;
        right: -100%;
        width: 100%;
        height: 100vh;
        backdrop-filter: blur(10px);
        background: #FFFFFF; /* White background for mobile menu */
        display: flex;
        align-items: center;
        flex-direction: column;
        padding-top: 180px;
        transition: all 0.7s ease;
    }
    .navlist a {
        display: block;
        padding: 0;
        margin: 0px 0px 50px 0px;
        font-size: 1.7rem;
        color: #000000; /* Black text for mobile menu links */
    }
    .navlist.open {
        right: 0; /* Show menu when open */
    }
}

@media (max-width: 450px) {
    .container h1 {
        font-size: 2.5rem;
    }
}

     </style>
     <a href="#" class="logo"><img src="/android-chrome-512x512.png">SMA</a>
      <ul class="navlist">
        <li><a href="#home">Home</a></li>
        <li><a href="/about.html">About Us</a></li>
        <li><a href="/projects.html">Projects</a></li>
        <li><a href="#our-team">Our Team</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div class="nav-right">
          <a href="#" class="btn">Donate</a>
          <div class="bx bx-menu" id="menu-icon"></div>
      </div> `
   }
 }

 customElements.define('special-header',SpecialHeader)