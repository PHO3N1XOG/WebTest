// Function to display alert message
function showAlert(message) {
    var alertContainer = document.getElementById('alert-container');
    alertContainer.textContent = message;
    alertContainer.style.display = 'block';
    setTimeout(function() {
        alertContainer.style.display = 'none';
    }, 5000); // Hide the alert after 5 seconds
}

// Parse the command from Discord
function parseCommand(command) {
    var parts = command.split(' ');
    if (parts.length >= 2 && parts[0] === '!alert') {
        var message = parts.slice(1).join(' ');
        showAlert(message);
    } else {
        // Invalid command
        console.log('Invalid command');
    }
}
