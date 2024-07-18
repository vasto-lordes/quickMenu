let appItemBtns = document.querySelectorAll(".app-item");
let appItemPreviews = document.querySelectorAll(".app-item-img");

if (appItemBtns !== null) {
    appItemBtns.forEach((itemBtn) => {
        itemBtn.addEventListener("click", function () {
            appItemBtns.forEach((btn) => {
                btn.classList.remove("selected-app-item");
                btn.classList.add("unselected-app-item");
            });
            itemBtn.classList.remove("unselected-app-item");
            itemBtn.classList.add("selected-app-item");

            appItemPreviews.forEach((itemImg) => {
                if (itemImg.classList.contains(itemBtn.getAttribute("data-attr"))) {
                    itemImg.classList.add("selected-app-item-preview");
                    itemImg.classList.remove("unselected-app-item-preview");
                } else {
                    itemImg.classList.add("unselected-app-item-preview");
                    itemImg.classList.remove("selected-app-item-preview");
                }
            });
        });
    });
}
