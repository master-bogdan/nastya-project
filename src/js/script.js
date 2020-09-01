window.addEventListener('DOMContentLoaded', () => {

    // Gallery rendering
    const gallery = document.getElementById('gallery');
    
    const galleryRender = () => {
        /**
         * i < 12 means render 12 photos, change this for decrase or increase number of photos
         * File name on server must be like 1.jpg, 2.jpg etc. or you can make php file parser
         */
        for (let i = 0; i < 12; i++) {
        gallery.insertAdjacentHTML('beforeend', `
        <div id=${i + 1} class="portfolio__img">
            <img src="img/portfolio/${i + 1}.jpg" alt="photo ${i + 1}" class="portfolio__img_item">
            <div class="after">Click to zoom</div>
        </div>
        `);
        }
    };

    galleryRender();

    const [...portfolioImg] = document.getElementsByClassName('portfolio__img_item');

    const popupRender = (item) => {
        document.body.insertAdjacentHTML('beforeend', `
        <div id="overlay" class="overlay">
            <div class="overlay__img">
                <span id="close" class="close">&times;</span>
                <img src="${item}" alt="photo 1" class="overlay__img_item">
            </div>
        </div>
        `);
        
        const overlay = document.getElementById('overlay');
        overlay.style.display = 'flex';

        const close = document.getElementById('close');
        close.addEventListener('click', () => {
            overlay.style.display = 'none';
            overlay.remove();
        });

    };

    portfolioImg.forEach(item => {
        item.addEventListener('click', (event) => {
            return popupRender(event.target.src);
        });
    });
    
});