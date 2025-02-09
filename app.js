'use strict';

const themechange = document.querySelector('.btn');

themechange.addEventListener('click', function() {
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');

    const className = document.body.className;
    if(className == "light-theme") {
        this.textContent = "Dark mode";
    } else {
        this.textContent = "Light mode";
    }

    console.log('current class name: ' + className);
    
});

