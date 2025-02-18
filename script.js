// Wait for the DOM content to be fully loaded
document.addEventListener("DOMContentLoaded", function () {

    // Image Slider Functionality
    const slides = document.querySelectorAll('.slider img'); // Select all images in the slider
    let currentSlide = 0; // Initialize the index of the current slide

    // Function to show the current slide
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active'); // Remove 'active' class from all slides
            if (i === index) {
                slide.classList.add('active'); // Add 'active' class to the current slide
            }
        });
    }

    // Function to move to the next slide
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length; // Move to the next slide in a circular manner
        showSlide(currentSlide); // Display the current slide
    }

    // Set interval for automatic slide change every 5 seconds
    setInterval(nextSlide, 15000); // Change slide every 15000 milliseconds (15 seconds)
    
    // Show the first slide on initial load
    showSlide(currentSlide);

    // Dropdown Menu Functionality
    const dropdownButtons = document.querySelectorAll('.dropdown > button'); // Select all dropdown buttons

    dropdownButtons.forEach(button => {
        button.addEventListener('click', function () {
            const dropdownContent = this.nextElementSibling; // Get the corresponding dropdown content
            // Toggle the dropdown display
            dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
        });
    });

    // Close the dropdown if the user clicks outside of it
    window.onclick = function (event) {
        if (!event.target.matches('.dropdown > button')) {
            dropdownButtons.forEach(button => {
                const dropdownContent = button.nextElementSibling; // Get the corresponding dropdown content
                dropdownContent.style.display = 'none'; // Hide dropdown
            });
        }
    };
});
document.addEventListener("DOMContentLoaded", () => {
    const newsContainer = document.querySelector(".news-items");

    // Example array of news items
    const newsData = [
        {
            title: "the GCE 2025 time table ",
            description: "go to read more to download it.",
            image: "GCE.png",
            link: "https://camgceb.org/wp-content/uploads/2024/01/2024-GCE-TimeTable.pdf"
        },
        {
            title: "GCE 2025 COMING SOON",
            description: "get to the official gce board website for more information.",
            image: "news4.jpg",
            link: "https://camgceb.org/"
        }
        // Add more news items as needed
    ];

    newsData.forEach(news => {
        const newsItem = document.createElement("div");
        newsItem.className = "news-item";

        newsItem.innerHTML = `
            <img src="${news.image}" alt="${news.title}" class="news-image">
            <h3 class="news-title">${news.title}</h3>
            <p class="news-description">${news.description}</p>
            <a href="${news.link}" class="news-read-more">Read more</a>
        `;

        newsContainer.appendChild(newsItem);
    });
});

