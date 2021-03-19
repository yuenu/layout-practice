function santasNav() {
    const section = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');

    section.forEach(section => {
        section.addEventListener('mouseenter', function () {
            const id = this.getAttribute('id');
            const navActive = document.querySelector(`a[href="#${id}"]`);
            navLinks.forEach(link => link.classList.remove('active'));
            navActive.classList.add('active');
        })
    })
}

santasNav();