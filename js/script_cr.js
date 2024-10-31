const medicineCardTemplate = document.querySelector(".data-medicine");
const medicineCardContainer = document.querySelector("[data-medicine-card-container]");

fetch("http://localhost:3000/medicines").then(res => res.json()).then(data => {
    data.forEach(medicine => {
        const card = medicineCardTemplate.content.cloneNode(true).children[0];
        console.log(medicine);
        const img = card.querySelector(".img");
        const title = card.querySelector(".title");
        const description = card.querySelector(".description");
        img.textContent = medicine.image;
        title.textContent = medicine.name;
        description.textContent = medicine.description;
        medicineCardContainer.append(card);
    })
})

