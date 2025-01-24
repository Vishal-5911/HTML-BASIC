// Smooth Scroll for Navigation Links
document.querySelectorAll('a.a1').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Handle Booking Form
const checkButton = document.querySelector('.check-button');
checkButton.addEventListener('click', () => {
    const dateInput = document.querySelector('.date-input').value;
    const guestInput = document.querySelector('.guest-input').value;

    if (!dateInput || !guestInput) {
        alert('Please fill in the Check In - Check Out dates and the number of guests.');
    } else {
        alert(`Checking availability for:\nDates: ${dateInput}\nGuests: ${guestInput}`);
    }
});

// Room Booking Buttons
document.querySelectorAll('.book-btn').forEach(button => {
    button.addEventListener('click', () => {
        alert('Redirecting to the booking page...');
        // You can replace the alert with a URL redirection if needed
        // window.location.href = '/booking-page.html';
    });
});

// Visit Restaurant Button
const visitRestaurantButton = document.querySelector('.check-buttonvisit');
visitRestaurantButton.addEventListener('click', () => {
    alert('Redirecting to the restaurant page...');
    // Replace with your restaurant page URL if available
    // window.location.href = '/restaurant-page.html';
});

// Highlight Featured Rooms
document.querySelectorAll('.room .featured-badge').forEach(badge => {
    badge.addEventListener('mouseover', () => {
        badge.style.backgroundColor = '#FFD700'; // Highlight with gold color
    });
    badge.addEventListener('mouseout', () => {
        badge.style.backgroundColor = ''; // Revert to original color
    });
});

// Sticky Navigation Bar
window.addEventListener('scroll', () => {
    const header = document.getElementById('d1');
    if (window.scrollY > 50) {
        header.style.position = 'fixed';
        header.style.top = '0';
        header.style.width = '100%';
        header.style.boxShadow = '0px 2px 5px rgba(0, 0, 0, 0.2)';
    } else {
        header.style.position = 'relative';
        header.style.boxShadow = 'none';
    }
});

// Star Rating Display
const ratingStars = document.querySelector('.stars');
ratingStars.innerHTML = '★★★★★'; // Replace with dynamic logic if required
