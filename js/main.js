document.addEventListener('DOMContentLoaded', () => {
    const mainMenuItems = document.querySelectorAll('.main-nav ul li a[data-menu]');
    const subMenus = document.querySelectorAll('.sub-menu');
    const header = document.querySelector('.header');

    const hamburger = document.querySelector('.hamburger-menu');
    const mainNav = document.querySelector('.main-nav');

    if (hamburger && mainNav) {
        hamburger.addEventListener('click', () => {
            const isActive = mainNav.classList.toggle('active');
            hamburger.classList.toggle('active');

            if (isActive && activeMenu) {
                activeMenu.style.display = 'none';
                activeMenu = null;
                mainMenuItems.forEach(a => a.classList.remove('active'));
            }
        });
    }

    let activeMenu = null;

    mainMenuItems.forEach(item => {
        item.addEventListener('mouseover', function () {
            // Only handle mouseover on desktop or if we want specific behavior
            // On mobile with click-toggle menu, mouseover might be annoying or ignored if we rely on click.
            // But we'll keep existing logic.
            const targetMenuId = this.getAttribute('data-menu') + '-menu';

            subMenus.forEach(menu => {
                menu.style.display = 'none';
            });

            const targetMenu = document.getElementById(targetMenuId);
            if (targetMenu) {
                targetMenu.style.display = 'flex';
                activeMenu = targetMenu;
                mainMenuItems.forEach(a => a.classList.remove('active'));
                this.classList.add('active');
            }
        });

        item.addEventListener('click', function (e) {
            e.preventDefault();
            const targetMenuId = this.getAttribute('data-menu') + '-menu';

            subMenus.forEach(menu => {
                menu.style.display = 'none';
            });

            const targetMenu = document.getElementById(targetMenuId);
            if (targetMenu) {
                targetMenu.style.display = 'flex';
                activeMenu = targetMenu;
                mainMenuItems.forEach(a => a.classList.remove('active'));
                this.classList.add('active');
            }

            if (mainNav && mainNav.classList.contains('active')) {
                mainNav.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });
    });

    const subMenuContainer = document.querySelector('.sub-menu-container');

    document.addEventListener('click', (e) => {
        const isClickInsideHeader = header.contains(e.target);
        const isClickInsideSubMenu = subMenuContainer.contains(e.target);

        if (!isClickInsideHeader && !isClickInsideSubMenu) {
            if (activeMenu) {
                activeMenu.style.display = 'none';
                activeMenu = null;
                mainMenuItems.forEach(a => a.classList.remove('active'));
            }
            if (mainNav && mainNav.classList.contains('active')) {
                mainNav.classList.remove('active');
                hamburger.classList.remove('active');
            }
        }
    });
});

function showMenu(menuType) {
    const subMenus = document.querySelectorAll('.sub-menu');
    const targetMenuId = menuType + '-menu';
    const targetMenu = document.getElementById(targetMenuId);

    subMenus.forEach(menu => {
        menu.style.display = 'none';
    });

    if (targetMenu) {
        targetMenu.style.display = 'flex';
        targetMenu.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}