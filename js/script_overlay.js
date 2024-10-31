document.addEventListener("DOMContentLoaded", function() {
    const changeButton = document.querySelector(".button-change-remove .change");
    const removeButton = document.querySelector(".button-change-remove .remove");
    const overlayChange = document.getElementById("overlay-change");
    const overlayRemove = document.getElementById("overlay-remove");


    changeButton.addEventListener("click", () => {
        overlayChange.style.visibility = "visible";
    });

    const formChange = document.querySelector("#overlay-change form");

    formChange.addEventListener("submit", (event) => {
        event.preventDefault();

        const medicineName = document.getElementById("medicine-name").value;
        const price = document.getElementById("price").value;
        const expiryDate = document.getElementById("expiry-date").value;
        const stockQuantity = document.getElementById("stock-quantity").value;

        if (!medicineName || !price || !expiryDate || !stockQuantity) {
            alert("Please fill out all required fields.");
            return;
        }

        overlayChange.style.visibility = "visible";
        alert("Medicine changed successfully!");
    });

    removeButton.addEventListener("click", () => {
        overlayRemove.style.visibility = "visible";
    })

    const yesButton = document.querySelector(".yes");
    const noButton = document.querySelector(".no");
    
    yesButton.addEventListener("click", (event) => {
        event.preventDefault();
        overlayRemove.style.visibility = 'hidden';
        alert('Remove successfully!');
    });

    noButton.addEventListener("click", (event) => {
        event.preventDefault();
        overlayRemove.style.visibility = 'hidden';
    });
});