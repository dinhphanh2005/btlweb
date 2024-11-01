const formChange = document.getElementById("formChange");

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
});

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