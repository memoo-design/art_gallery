document.addEventListener('DOMContentLoaded', () => {
    const categoryList = document.getElementById('category-list');
    const categories = document.querySelectorAll('.category img');
    const hero = document.querySelector('.hero');

    function updateHeroImage(src) {
        hero.style.backgroundImage = `url('${src}')`;
    }

    categoryList.addEventListener('click', (event) => {
        if (event.target.tagName === 'LI') {
            const imageSrc = event.target.getAttribute('data-image');
            updateHeroImage(imageSrc);
        }
    });

    categories.forEach(category => {
        category.addEventListener('click', (event) => {
            const imageSrc = event.target.getAttribute('data-image');
            updateHeroImage(imageSrc);
        });
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const searchForm = document.getElementById('searchForm');
    const searchInput = document.getElementById('searchInput');
    const categoryList = document.getElementById('categoryList');
    const filteredCategories = document.getElementById('filteredCategories');

    searchForm.addEventListener('submit', function(event) {
        event.preventDefault();
        filterCategories();
    });

    searchInput.addEventListener('input', filterCategories);

    function filterCategories() {
        const searchTerm = searchInput.value.toLowerCase();
        let matched = false;

        for (let category of filteredCategories.children) {
            const categoryName = category.querySelector('p').textContent.toLowerCase();
            if (categoryName.includes(searchTerm)) {
                category.style.display = '';
                matched = true;
            } else {
                category.style.display = 'none';
            }
        }

        if (!matched) {
            filteredCategories.innerHTML = '<p>No results found</p>';
        }
    }
});
document.addEventListener('DOMContentLoaded', () => {
    const lightbox = document.querySelector('#lightbox');
    const thumbnailsContainer = document.querySelector('.thumbnails');
    const imageSelection = document.querySelectorAll('.image-selection img');
    const primaryImage = lightbox.querySelector('.primary-image img');

    // Populate thumbnails once
    const createThumbnails = () => {
        thumbnailsContainer.innerHTML = ''; // Clear previous thumbnails
        imageSelection.forEach(img => {
            const thumbnail = document.createElement('img');
            thumbnail.src = img.src;
            thumbnail.alt = img.alt || 'Thumbnail'; // Add alt for accessibility
            thumbnailsContainer.appendChild(thumbnail);
        });
    };

    // Open lightbox with selected image
    imageSelection.forEach(image => {
        image.addEventListener('click', () => {
            primaryImage.src = image.src;
            lightbox.classList.add('active');
            if (!thumbnailsContainer.hasChildNodes()) createThumbnails(); // Ensure no duplication
        });
    });

    // Handle thumbnail click using event delegation
    thumbnailsContainer.addEventListener('click', (e) => {
        if (e.target.tagName === 'IMG') {
            primaryImage.src = e.target.src;
        }
    });


    lightbox.addEventListener('click', (e) => {
        if (e.target === e.currentTarget) { 
            lightbox.classList.remove('active');
            primaryImage.src = '';
        }
    });

    const form = document.querySelector('#newsletter form');
    form.addEventListener('submit', e => {
        form.querySelector('#name')
    })
});