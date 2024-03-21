document.querySelectorAll('.btnDetail').forEach(picture =>{
    picture.addEventListener('click', (e) => {
            let parent = e.target.parentNode.parentNode;

            let gambar = parent.querySelector('.card-img-top').src;
            let numb = parent.querySelector(`.numb`).innerHTML;
            console.log(`numb: ${numb}`);
    });
});