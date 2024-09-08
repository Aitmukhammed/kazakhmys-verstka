const sidebarBtn = document.querySelector("#sidebar-btn");
const sidebar = document.querySelector("#sidebar");

const firstItem = document.querySelector("#first-item");
const secondItem = document.querySelector("#second-item");
const thirdItem = document.querySelector("#third-item");
const fourthItem = document.querySelector("#fourth-item");

const rightRow = document.querySelector("#right-row");
const rightRows = document.querySelectorAll(".right-row");
const rightRow_2 = document.querySelector("#right-row-2");
const rightRow_3 = document.querySelector("#right-row-3");
const rightRow_4 = document.querySelector("#right-row-4");
const topRow = document.querySelector("#top-row");

const submenu = document.querySelector("#submenu");
const submenus = document.querySelectorAll(".submenu");
const submenu_2 = document.querySelector("#submenu-2");
const submenu_3 = document.querySelector("#submenu-3");
const submenu_4 = document.querySelector("#submenu-4");

const widgets = document.querySelector("#widgets");
const btnWidgets = document.querySelector("#btn-widgets");
const hidden = document.querySelector(".hidden");
const hiddenWidget = document.querySelector(".hidden-widget");

const lineSideBar_1 =  document.querySelector(".line-sideber-1");
const lineSideBar_2 =  document.querySelector(".line-sideber-2");
const lineSideBar_3 =  document.querySelector(".line-sideber-3");

document.querySelectorAll('.sidebar-item').forEach(item => {
    item.addEventListener('click', () => {
        document.querySelectorAll('.sidebar-item').forEach(el => el.classList.remove('active'));
        item.classList.add('active');
    });
});


function updateSubmenuAndIcons(open) {
    if (!sidebar.classList.contains('sidebar-open') || open == true) {
        submenus.forEach(submenu => {
            submenu.classList.remove("open-submenu");
        });
        rightRows.forEach(rightRow => {
            rightRow.classList.remove("row-active");
        });
    } 
}

function openSidebar() {
    sidebar.classList.add('sidebar-open'); 
    lineSideBar_1.classList.add('line-sideber-1-open');
    lineSideBar_2.classList.add('line-sideber-2-open');
    lineSideBar_3.classList.add('line-sideber-3-open');    
}

// При нажатии на кнопку - меню (X)
sidebarBtn.onclick = () => {
    sidebar.classList.toggle('sidebar-open');
    widgets.classList.remove('raise-widgets');
    topRow.classList.remove('top-row-active');
    hidden.style.display = "block";

    lineSideBar_1.classList.toggle('line-sideber-1-open');
    lineSideBar_2.classList.toggle('line-sideber-2-open');
    lineSideBar_3.classList.toggle('line-sideber-3-open');

    if(!sidebar.classList.contains('sidebar-open')) {
        hiddenWidget.style.display = "none";
    }
    
    updateSubmenuAndIcons(); 
}

// При нажатии на списков
firstItem.onclick = () => {
    openSidebar();
    submenu.classList.toggle('open-submenu'); // Открываем его подменю
    rightRow.classList.toggle('row-active'); // Переворачиваем его стрелку вниз
}

secondItem.onclick = () => {
    openSidebar();
    submenu_2.classList.toggle('open-submenu');
    rightRow_2.classList.toggle('row-active');
}

thirdItem.onclick = () => {
    openSidebar();
    submenu_3.classList.toggle('open-submenu'); 
    rightRow_3.classList.toggle('row-active');
}

fourthItem.onclick = () => {
    openSidebar();
    submenu_4.classList.toggle('open-submenu');
    rightRow_4.classList.toggle('row-active');
}

// При нажатии на кнопку - Виджеты
btnWidgets.onclick = () => {
    widgets.classList.toggle('raise-widgets');
    topRow.classList.toggle('top-row-active');

    if(widgets.classList.contains("raise-widgets")) {
        hidden.style.display = "none";
        sidebar.classList.add('sidebar-open');
        hiddenWidget.style.display = "block";
        updateSubmenuAndIcons(true);
        openSidebar();
    } else {
        hiddenWidget.style.display = "none";
        hidden.style.display = "block";
    }
}


