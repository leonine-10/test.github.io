// JavaScript for handling scroll behavior
let lastScrollTop = 0;

window.addEventListener("scroll", function() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    // Determine scroll direction
    if (currentScroll > lastScrollTop) {
        // Scrolling down
        document.getElementById("header").classList.add("hide");
    } else {
        // Scrolling up
        document.getElementById("header").classList.remove("hide");
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
}, false);
document.addEventListener('DOMContentLoaded', function() {
    const bookingForm = document.getElementById('bookingForm');
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent form submission

            // Get values from the form
            const departure = document.getElementById('departure').value;
            const destination = document.getElementById('destination').value;

            // Perform basic validation
            if (!departure || !destination) {
                alert('Please select both departure and destination.');
                return;
            }

            // Redirect to a new page with the selected departure and destination
            window.location.href = `search.html?departure=${departure}&destination=${destination}`;
        });
    }
});
