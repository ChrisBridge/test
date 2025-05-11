// Tab functionality
        document.addEventListener('DOMContentLoaded', function() {
            // Header hide/show on scroll
            const header = document.getElementById('header');
            let lastScrollTop = 0;
            
            window.addEventListener('scroll', function() {
                let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                
                if (scrollTop > lastScrollTop && scrollTop > 80) {
                    // Scrolling down & not at the top
                    header.classList.add('hide');
                } else {
                    // Scrolling up or at the top
                    header.classList.remove('hide');
                }
                
                lastScrollTop = scrollTop;
            });
            
            const tabButtons = document.querySelectorAll('.tab-btn');
            const tabContents = document.querySelectorAll('.tab-content');
            
            tabButtons.forEach(button => {
                button.addEventListener('click', () => {
                    // Remove active class from all buttons and contents
                    tabButtons.forEach(btn => btn.classList.remove('active'));
                    tabContents.forEach(content => content.classList.remove('active'));
                    
                    // Add active class to clicked button
                    button.classList.add('active');
                    
                    // Show corresponding tab content
                    const tabId = button.getAttribute('data-tab');
                    document.getElementById(tabId).classList.add('active');
                });
            });
            
            // Smooth scrolling for anchor links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    
                    const targetId = this.getAttribute('href');
                    if (targetId === '#') return;
                    
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        window.scrollTo({
                            top: targetElement.offsetTop - 80,
                            behavior: 'smooth'
                        });
                    }
                });
            });
            
            // Form submission
            const contactForm = document.getElementById('contactForm');
            if (contactForm) {
                contactForm.addEventListener('submit', function(e) {
                    e.preventDefault();
                    alert('Thank you for your message! We will get back to you soon.');
                    contactForm.reset();
                });
            }
            
            // Add to cart functionality
            const addToCartButtons = document.querySelectorAll('.add-to-cart');
            addToCartButtons.forEach(button => {
                button.addEventListener('click', function() {
                    const productCard = this.closest('.product-card');
                    const productName = productCard.querySelector('.product-title').textContent;
                    alert(`${productName} added to your cart!`);
                });
            });
            
            // Wishlist functionality
            const wishlistButtons = document.querySelectorAll('.wishlist');
            wishlistButtons.forEach(button => {
                button.addEventListener('click', function() {
                    this.textContent = this.textContent === '♡' ? '❤' : '♡';
                });
            });
        });