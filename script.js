// Tab Switching Logic for Full Menu Section
function openMenu(evt, menuCategory) {
    // 1. Get all elements with class="tab-content" and hide them
    let tabContents = document.getElementsByClassName("tab-content");
    for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].classList.remove("active");
    }

    // 2. Get all elements with class="tab-btn" and remove the class "active"
    let tabButtons = document.getElementsByClassName("tab-btn");
    for (let i = 0; i < tabButtons.length; i++) {
        tabButtons[i].classList.remove("active");
    }

    // 3. Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(menuCategory).classList.add("active");
    evt.currentTarget.classList.add("active");
}
