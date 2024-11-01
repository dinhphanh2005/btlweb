function handleFileUpload(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            // Set the uploaded image as the background of the container
            document.querySelector('.picture-of-medicine').style.backgroundImage = `url(${e.target.result})`;
            document.querySelector('.picture-of-medicine').style.backgroundSize = 'cover';
            document.querySelector('.picture-of-medicine').style.backgroundPosition = 'center';
        };
        reader.readAsDataURL(file);
    }
}