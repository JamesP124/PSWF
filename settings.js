// Get the modal
var modal = document.getElementById("paymentModal");

// Get the button that opens the modal
var btn = document.getElementById("subscribePremium");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Handle turning off ads
document.getElementById("enableAds").addEventListener("click", function() {
    alert("You need premium to turn off ads!");
});

// Handle payment method selection
document.querySelectorAll(".payment-button").forEach(button => {
    button.addEventListener("click", function() {
        alert("Payment method selected: " + this.textContent);
    });
});
