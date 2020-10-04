//sign up
var modal1 = document.getElementById("myModal1");
// Get the button that opens the modal
var btn1 = document.getElementById("SigninBtn");
// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("close")[0];
// When the user clicks the button, open the modal 
btn1.onclick = function() {
  modal1.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span1.onclick = function() {
  modal1.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
}
//sign in
var modal2 = document.getElementById("myModal2");
// Get the button that opens the modal
var btn2 = document.getElementById("SignupBtn");
// Get the <span> element that closes the modal
var span2 = document.getElementsByClassName("close")[1];
// When the user clicks the button, open the modal 
btn2.onclick = function() {
  modal2.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span2.onclick = function() {
  modal2.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}