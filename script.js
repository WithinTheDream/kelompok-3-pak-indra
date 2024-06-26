// Mock array of products (replace with your actual products)
const products = [
    { name: 'Product 1', image: 'img/produk1.png', description: 'Description of Product 1' },
    { name: 'Product 2', image: 'img/produk2.png', description: 'Description of Product 2' },
    { name: 'Product 3', image: 'img/produk3.jpg', description: 'Description of Product 3' },
    { name: 'Product 4', image: 'img/produk4.png', description: 'Description of Product 4' },

    { name: 'Product 5', image: 'img/produk5.png', description: 'Description of Product 5' },
    { name: 'Product 6', image: 'img/produk6.png', description: 'Description of Product 6' },
    { name: 'Product 7', image: 'img/produk7.jpg', description: 'Description of Product 7' },
    { name: 'Product 8', image: 'img/produk8.png', description: 'Description of Product 8' },

    { name: 'Product 1', image: 'product1.jpg', description: 'Description of Product 1' },
    { name: 'Product 2', image: 'product2.jpg', description: 'Description of Product 2' },
    { name: 'Product 3', image: 'product3.jpg', description: 'Description of Product 3' },
    { name: 'Product 4', image: 'product4.jpg', description: 'Description of Product 4' },

    { name: 'Product 1', image: 'product1.jpg', description: 'Description of Product 1' },
    { name: 'Product 2', image: 'product2.jpg', description: 'Description of Product 2' },
    { name: 'Product 3', image: 'product3.jpg', description: 'Description of Product 3' },
    { name: 'Product 4', image: 'product4.jpg', description: 'Description of Product 4' },
    // Add more products here
];


  // Menambahkan event listener untuk tombol "Products"
  document.getElementById('products-link').addEventListener('click', function(event) {
    event.preventDefault(); // Menghentikan perilaku default dari tautan

    // Scroll ke bagian "Produk Kami"
    document.getElementById('Produk-Kami').scrollIntoView({
        behavior: 'smooth'
    });
});

// Function to dynamically generate product grid
function generateProductGrid() {
    const productGrid = document.querySelector('.product-grid');

    products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.classList.add('product');
        
        const productImage = document.createElement('img');
        productImage.src = product.image;
        productImage.alt = product.name;

        const productName = document.createElement('h3');
        productName.textContent = product.name;

        const productDescription = document.createElement('p');
        productDescription.textContent = product.description;

        const addToCartButton = document.createElement('button');
        addToCartButton.textContent = 'Add to Cart';
        addToCartButton.onclick = function() {
            addToCart(product.name);
        };

        productItem.appendChild(productImage);
        productItem.appendChild(productName);
        productItem.appendChild(productDescription);
        productItem.appendChild(addToCartButton);

        productGrid.appendChild(productItem);
    });
}


// Generate product grid when the page loads
window.onload = generateProductGrid;