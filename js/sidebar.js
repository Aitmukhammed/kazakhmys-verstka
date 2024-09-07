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

// При нажатии на кнопку - меню (X)
sidebarBtn.onclick = () => {
    sidebar.classList.toggle('sidebar-open');
    widgets.classList.remove('raise-widgets');
    topRow.classList.remove('top-row-active');
    hidden.style.display = "block";

    if(!sidebar.classList.contains('sidebar-open')) {
        hiddenWidget.style.display = "none";
    }
    
    updateSubmenuAndIcons(); 
}

// При нажатии на списков
firstItem.onclick = () => {
    sidebar.classList.add('sidebar-open'); // Открываем боковую панель, если она закрыта
    submenu.classList.toggle('open-submenu'); // Открываем его подменю
    rightRow.classList.toggle('row-active'); // Переворачиваем его стрелку вниз
}

secondItem.onclick = () => {
    sidebar.classList.add('sidebar-open'); 
    submenu_2.classList.toggle('open-submenu');
    rightRow_2.classList.toggle('row-active');
}

thirdItem.onclick = () => {
    sidebar.classList.add('sidebar-open'); 
    submenu_3.classList.toggle('open-submenu'); 
    rightRow_3.classList.toggle('row-active');
}

fourthItem.onclick = () => {
    sidebar.classList.add('sidebar-open'); 
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
    } else {
        hiddenWidget.style.display = "none";
        hidden.style.display = "block";
    }
}


