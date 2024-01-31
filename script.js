document.getElementById("btn").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get form data (if needed)
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;

    // Your form processing logic goes here...

    // Navigate to another page (replace "target-page.html" with the actual page URL)
    window.location.href = "target-page.html";
    return false; // Ensure the handler returns false
});
