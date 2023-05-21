
function addEnterToTextarea(textareaId, buttonId) {
    // Get the textarea element.
    const textarea = document.getElementById(textareaId);
  
    // Get the button element.
    const button = document.getElementById(buttonId);
  
    // Add an event listener to the textarea element.
    textarea.addEventListener("keypress", function(event) {
      // If the user presses the Enter key on the keyboard
      if (event.keyCode === 13) {
        // Trigger the button element with a click
        button.click();
      }
    });
}
addEnterToTextarea('buyer-details-input', 'detail-submit-btn');
