document.addEventListener('DOMContentLoaded', () => {
    const mainMenuItems = document.querySelectorAll('.main-nav ul li a[data-menu]');
    const subMenus = document.querySelectorAll('.sub-menu');
    const header = document.querySelector('.header');

    let activeMenu = null;

    mainMenuItems.forEach(item => {
        item.addEventListener('mouseover', function() {
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

        item.addEventListener('click', function(e) {
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
        });
    });

    const subMenuContainer = document.querySelector('.sub-menu-container');

    document.body.addEventListener('mousemove', (e) => {
        const isMouseOverHeader = header.contains(e.target);
        const isMouseOverSubMenu = subMenuContainer.contains(e.target);

        if (!isMouseOverHeader && !isMouseOverSubMenu && activeMenu) {
             setTimeout(() => {
                const isMouseStillOverHeader = header.matches(':hover');
                const isMouseStillOverSubMenu = subMenuContainer.matches(':hover');

                if (!isMouseStillOverHeader && !isMouseStillOverSubMenu) {
                    activeMenu.style.display = 'none';
                    activeMenu = null;
                    mainMenuItems.forEach(a => a.classList.remove('active'));
                }
             }, 100); 
        }
    });

    subMenuContainer.addEventListener('mouseleave', () => {
        if(activeMenu) {
            activeMenu.style.display = 'none';
            activeMenu = null;
            mainMenuItems.forEach(a => a.classList.remove('active'));
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