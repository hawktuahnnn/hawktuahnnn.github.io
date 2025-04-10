document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, attaching scroll listeners');

    const productsNavButton = document.querySelector('.scroll-to-products');
    if (productsNavButton) {
        console.log('Products nav button found:', productsNavButton);
        productsNavButton.addEventListener('click', (e) => {
            e.preventDefault();
            console.log('Products nav button clicked');
            const productsSection = document.querySelector('#products');
            if (productsSection) {
                console.log('Scrolling to products section');
                productsSection.scrollIntoView({ behavior: 'smooth' });
            } else {
                console.error('Products section not found');
            }
        });
    } else {
        console.error('Products nav button not found');
    }
});
