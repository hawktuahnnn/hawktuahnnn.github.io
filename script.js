document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, attaching scroll listeners');

    // Target the Products nav button specifically
    const productsNavButton = document.querySelector('.scroll-to-products');
    const shopNowButton = document.querySelector('.scroll-btn');

    if (productsNavButton) {
        console.log('Products nav button found:', productsNavButton);
        productsNavButton.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default anchor behavior
            console.log('Products nav button clicked');
            const productsSection = document.querySelector('#products');
            if (productsSection) {
                productsSection.scrollIntoView({ behavior: 'smooth' });
            } else {
                console.error('Products section not found');
            }
        });
    } else {
        console.error('Products nav button not found');
    }

    if (shopNowButton) {
        console.log('Shop Now button found:', shopNowButton);
        shopNowButton.addEventListener('click', (e) => {
            e.preventDefault();
            console.log('Shop Now button clicked');
            const productsSection = document.querySelector('#products');
            if (productsSection) {
                productsSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    } else {
        console.error('Shop Now button not found');
    }
});
