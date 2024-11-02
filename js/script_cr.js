document.addEventListener("DOMContentLoaded", function() {
    // Elements for overlay and button actions
    const overlayChange = document.getElementById("overlay-change");
    const overlayRemove = document.getElementById("overlay-remove");
    const formChange = document.querySelector("#overlay-change form");
    const yesButton = document.querySelector(".yes");
    const noButton = document.querySelector(".no");
    const searchInput = document.querySelector("[medicine-search]");
    const overlayChangeHide = document.querySelector(".overlay-change > button");
    let medicines = [];

    // Fetch medicines from JSON
    fetch("https://dinhphanh2005.github.io/btlweb/data/db.json") 
        .then(res => res.json())
        .then(data => {
            medicines = data.map(medicine => {
                const card = createMedicineCard(medicine);
                document.querySelector("[data-medicine-card-container]").append(card);
                return { name: medicine.name, element: card };
            });
        });

    // Function to create medicine card
    function createMedicineCard(medicine) {
        const template = document.querySelector(".data-medicine").content.cloneNode(true);
        const card = template.querySelector(".search-items");
        const img = card.querySelector(".img");
        const title = card.querySelector(".title");
        const description = card.querySelector(".description");
        const changeButton = card.querySelector(".change");
        const removeButton = card.querySelector(".remove");

        // Populate card with data
        img.src = medicine.image || "";  // Ensure image source is valid
        title.textContent = medicine.name;
        description.textContent = medicine.description;

        // Add event listeners to buttons
        changeButton.addEventListener("click", () => {
            overlayChange.style.visibility = "visible";
        });

        removeButton.addEventListener("click", () => {
            overlayRemove.style.visibility = "visible";
        });

        return card;
    }

    // Change form submission
    formChange.addEventListener("submit", (event) => {
        event.preventDefault();
    
        const medicineName = document.getElementById("medicine-name").value;
        const price = document.getElementById("price").value;
        const expiryDate = document.getElementById("expiry-date").value;
        const stockQuantity = document.getElementById("stock-quantity").value;
    
        // Basic required field validation
        if (!medicineName || !price || !expiryDate || !stockQuantity) {
            alert("Please fill out all required fields.");
            return;
        }
    
        // Check if stock quantity is a positive integer
        if (parseInt(stockQuantity) <= 0 || isNaN(stockQuantity)) {
            alert("Please enter a valid stock quantity.");
            return;
        }
    
        // Custom confirmation for successful submission
        alert("Medicine added successfully!");
    
        // Clear all form fields after successful submission
        formChange.reset();
        imagePreview.style.display = "none"; // Hide the image preview
        imagePreview.src = "";
        overlayChange.style.visibility = "hidden";
    });

    overlayChangeHide.addEventListener("click", (event) =>{
        overlayChange.style.visibility = "hidden";
    })
    // Remove overlay actions
    yesButton.addEventListener("click", (event) => {
        event.preventDefault();
        overlayRemove.style.visibility = 'hidden';
        alert('Remove successfully!');
    });

    noButton.addEventListener("click", (event) => {
        event.preventDefault();
        overlayRemove.style.visibility = 'hidden';
    });

    // Search Functionality
    searchInput.addEventListener("input", (e) => {
        const value = e.target.value.toLowerCase();
        medicines.forEach(medicine => {
            const isVisible = medicine.name.toLowerCase().includes(value);
            medicine.element.classList.toggle("hide", !isVisible);
        });
    });
});

// CSS class to hide non-matching items
const style = document.createElement('style');
style.innerHTML = `
    .hide {
        display: none;
    }
`;
document.head.appendChild(style);

function handleFileUpload(event) {
    const fileInput = event.target;
    const imagePreview = document.getElementById("imagePreview");

    if (fileInput.files && fileInput.files[0]) {
        const reader = new FileReader();

        reader.onload = function(e) {
            imagePreview.src = e.target.result;
            imagePreview.style.display = "block"; // Show the preview image
        };

        reader.readAsDataURL(fileInput.files[0]);
    }
}
