// Add JavaScript for interactivity if needed


// Example: Alert message on click
document.addEventListener("DOMContentLoaded", function() {
    // Get all menu items
    var menuItems = document.querySelectorAll('.main-menu ul li a');

    // Add click event listener to each menu item
    menuItems.forEach(function(item) {
        item.addEventListener('click', function(event) {
            // Prevent default link behavior
            event.preventDefault();

            // Get the text content of the clicked item
            var menuItemText = item.textContent;

            // Display an alert with the clicked menu item text
            alert('You clicked: ' + menuItemText);
        });
    });
});
