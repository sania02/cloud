document.getElementById("inquiryForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from actually submitting

    // Collect form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;

    // Basic validation check
    if (!name || !email || !phone || !message) {
        alert("Please fill out all fields before submitting.");
        return;
    }

    // for contact us redirect it on call 

    document.getElementById('contactBtn').addEventListener('click', function() {
        const phoneNumber = '+919310740388'; 
        window.location.href = `tel:${phoneNumber}`;
      });


 //    for the last links in footer
document.querySelectorAll('.stay-connected a').forEach(link => {
    link.addEventListener('click', function(event) {
      // Ensure the link is clickable
      window.open(link.href, '_blank');
      event.preventDefault();
    });
  });

    // Display thank you message in the designated div
    const thankYouMessage = document.getElementById("thankYouMessage");
    thankYouMessage.textContent = `Thank you, ${name}! Your inquiry has been submitted successfully. We will get back to you soon.`;
    thankYouMessage.style.padding = "15px";
    thankYouMessage.style.backgroundColor = "#e7d10c";
    thankYouMessage.style.color = "#333";
    thankYouMessage.style.textAlign = "center";
    thankYouMessage.style.borderRadius = "5px";
    thankYouMessage.style.marginTop = "15px";

    setTimeout(() => {
        // Clear the form after showing the message
        document.getElementById("inquiryForm").reset();
        thankYouMessage.textContent = ""; // Clear the message after reset
    }, 3000); // Delay of 3 seconds before clearing the form and message
});


// Function to generate images dynamically
// Function to generate images dynamically
function generateImages(rowId, start, end) {
    const row = document.getElementById(rowId);
    for (let i = start; i <= end; i++) {
        let img = document.createElement("img");
        img.src = `img/${i}.png`;
        img.alt = `Brand ${i}`;
        row.appendChild(img);
    }
}

// North Indian (5 + 4)
generateImages("northIndian1", 1, 5);
generateImages("northIndian2", 6, 9);

// Chinese Brand (6)
generateImages("chinese", 10, 15);

// Multi Cuisine (3)
generateImages("multiCuisine", 16, 18);

// North Indian Premium (2)
generateImages("northIndianPremium", 19, 20);


document.addEventListener("DOMContentLoaded", function () {
    // Get all category elements
    const categories = document.querySelectorAll(".category");

    if (categories.length === 0) {
        console.warn("No categories found! Check your HTML.");
        return;
    }

    // Add click event listener to each category
    categories.forEach(category => {
        category.addEventListener("click", function () {
            // Normalize category text (remove spaces & lowercase)
            const categoryText = this.textContent.trim().toLowerCase().replace(/\s+/g, '');

            console.log("Clicked category:", categoryText); // Debugging log

            // Map category names to their section IDs
            const sectionMap = {
                "northindian": "northIndian1",
                "chinese": "chinese",
                "multicuisine": "multiCuisine",
                "northindianpremium": "northIndianPremium"
            };

            // Get corresponding section ID
            const targetId = sectionMap[categoryText];

            if (!targetId) {
                console.warn(`No section mapping found for category: ${categoryText}`);
                return;
            }

            // Find the target section
            const targetSection = document.getElementById(targetId);

            if (!targetSection) {
                console.warn(`No section found with ID: ${targetId}`);
                return;
            }

            // Ensure section has enough height to be scrollable
            if (targetSection.offsetHeight === 0) {
                console.warn(`Section '${targetId}' has no visible height. Add content or min-height.`);
                return;
            }

            // Get the exact position of the section
            const offsetTop = targetSection.getBoundingClientRect().top + window.scrollY;

            // Scroll smoothly with an offset to prevent overscrolling
            window.scrollTo({
                top: offsetTop - 100, // Adjust the value if needed to fine-tune alignment
                behavior: "smooth"
            });

            console.log(`Scrolled to section: ${targetId}`);
        });
    });
});





document.getElementById('mobile-menu').addEventListener('click', function() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active');
});
