document.addEventListener("DOMContentLoaded", function() {
    const overlayAdd = document.getElementById("overlay-add");
    const dropdownButton = document.querySelector(".dropdown .button");
    const dropDown = document.querySelector(".dropdown-container");
    const addButton = document.querySelector(".add-btn");

    dropDown.style.visibility = "hidden";

    dropdownButton.addEventListener("click", () => {
        if (dropDown.style.visibility === "hidden") {
            dropDown.style.visibility = "visible";
        } else {
            dropDown.style.visibility = "hidden";
        }
    });
    
    addButton.addEventListener("click", () => {
        overlayAdd.style.visibility = "visible";   
    });

    document.addEventListener("click", (event) => {
        if ((!dropdownButton.contains(event.target)) && (!dropDown.contains(event.target))) {
            dropDown.style.visibility = "hidden";
        }
    });

    const form = document.querySelector("#overlay-add form");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const medicineName = document.getElementById("medicine-name").value;
        const price = document.getElementById("price").value;
        const expiryDate = document.getElementById("expiry-date").value;
        const stockQuantity = document.getElementById("stock-quantity").value;

        if (!medicineName || !price || !expiryDate || !stockQuantity) {
            alert("Please fill out all required fields.");
            return;
        }

        if (confirm("Do you want to add this medicine?")) {
            overlayAdd.style.visibility = "hidden";
            alert("Medicine added successfully!");
        }
    });

    const theChart = document.getElementById("chart-canvas").getContext("2d");
    const dataSets = {
        weekly: {
            labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            data: [10000, 12000, 9000, 15000, 13000, 11000, 16000]
        },
        monthly: {
            labels: ["Week #1", "Week #2", "Week #3", "Week #4"],
            data: [10000, 342243, 213123, 1231]
        },
        yearly: {
            labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            data: [123123, 213123, 45354, 53452, 534535, 35143, 634624, 645646, 36547, 43622, 262457, 167654]
        }
    }

    let myChart = new Chart(theChart, {
        type: "bar",
        data: {
            labels: dataSets.weekly.labels,
            datasets: [{
                labels: "Revenue of the week",
                data: dataSets.weekly.data,
                backgroundColor: "rgba(75, 192, 192, 0.2)",
                borderColor: "rgba(75, 192, 192, 1)",
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    function updateChart(timeframe) {
        myChart.data.labels = dataSets[timeframe].labels;
        myChart.data.datasets[0].data = dataSets[timeframe].data;
        myChart.update();
    }

    document.querySelector(".pag-weekly").addEventListener("click", () => updateChart("weekly"));
    document.querySelector(".pag-monthly").addEventListener("click", () => updateChart("monthly"));
    document.querySelector(".pag-yearly").addEventListener("click", () => updateChart("yearly"));
});