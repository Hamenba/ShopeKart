document.querySelectorAll('.small-image-11').forEach(images =>{
    images.onclick = () =>{
        document.querySelector('.big-image-11').src = images.getAttribute('src');
    }
});
