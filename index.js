const submenuItems = document.querySelectorAll('.relative');

submenuItems.forEach(item => {
    const submenu = item.querySelector('.submenu');

    item.addEventListener('mouseenter', () => {
        submenu.classList.add('active');
    });

    item.addEventListener('mouseleave', () => {
        submenu.classList.remove('active');
    });
});


