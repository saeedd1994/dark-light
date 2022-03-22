// vars
const toggleTheme = document.querySelector('input[type=checkbox]');
const nav = document.querySelector('#nav');
const toggleIcon = document.querySelector('.toggle-icon');
const img1 = document.querySelector('#image1');
const img2 = document.querySelector('#image2');
const img3 = document.querySelector('#image3');

// functions
function colorMode(color) {
    img1.src = `img/undraw_collaborating_re_l43g_${color}.svg`;
    img2.src = `img/undraw_getting_coffee_re_f2do_${color}.svg`;
    img3.src = `img/undraw_winners_re_wr1l_${color}.svg`;
}

function darkMode() {
    nav.style.backgroundColor = 'rgba(0 0 0)';
    toggleIcon.style.color = 'rgba(250 250 250 /50%)';
    nav.style.boxShadow = '0px 2px 8px 0px rgba(0 0 0 / 50%)';
    toggleIcon.children[0].textContent = 'Dark Mode';
    toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
    colorMode('dark');
}

function lightMode() {
    nav.style.backgroundColor = 'rgba(250, 250, 250)';
    toggleIcon.style.color = 'rgba(0 0 0 / 50%)';
    nav.style.boxShadow = '0px 2px 8px 0px #ebebeb';
    toggleIcon.children[0].textContent = 'Light Mode';
    toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
    colorMode('light');
}



function changeTheme(e) {
    if (e.target.checked)

    {
        document.documentElement.setAttribute('data-theme', 'dark');
        darkMode();
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        lightMode();
        localStorage.setItem('theme', 'light')
    }
}


toggleTheme.addEventListener('change', changeTheme)

// check localstorage
const currentTheme = localStorage.getItem('theme');
console.log(currentTheme);
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme)
    if (currentTheme === 'dark') {
        toggleTheme.checked = true;
        darkMode();
    }
}