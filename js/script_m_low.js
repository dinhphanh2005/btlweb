document.addEventListener("DOMContentLoaded", () => {
    fetch('data/db.json') // Update the path to your JSON file
        .then(response => response.json())
        .then(data => {
            const lowSuppliesContainer = document.querySelector(".low-supplies .medicine");
            lowSuppliesContainer.innerHTML = ''; 
            data.medicines
                .filter(item => item.stock < 30)
                .forEach(item => {
                    const itemElement = document.createElement("p");
                    itemElement.textContent = `- ${item.name}: ${item.stock}`;
                    lowSuppliesContainer.appendChild(itemElement);
                });
        })
        .catch(error => console.error("Error loading low supplies data:", error));
});
