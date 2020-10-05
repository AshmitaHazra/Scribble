// Get the modal
var signUpModal = document.getElementById("SignUpModel");
var signUpBtn = document.getElementById("SignUpBtn");
var signUpSpan = document.getElementById('CloseSignUp');

var signInModal = document.getElementById("SignInModel");
var signInBtn = document.getElementById("SignInBtn");
var signInSpan = document.getElementById('CloseSignIn');

var deleteModal = document.getElementById("myModalDel");
var deleteBtn = document.getElementById("SignInBtn");

function openModel (btn, modal) {
  btn.onclick = function() {
    modal.style.display = "block";
  }
}

function closeModel (span, modal) {
  span.onclick = function() {
    modal.style.display = "none";
  }
}

openModel(signInBtn, signInModal);
openModel(signUpBtn, signUpModal);
closeModel(signUpSpan, signUpModal);
closeModel(signInSpan, signInModal);

window.onclick = function(event) {
  if (event.target == signUpModal) {
    signUpModal.style.display = "none";
  }

  if (event.target == signInModal) {
    signInModal.style.display = "none";
  }
}



//delete model

var modalDel = document.getElementById("myModalDel");
// Get the button that opens the modal
var btnDel = document.getElementById("DelBtn");
// Get the <span> element that closes the modal
var spanDel = document.getElementsByClassName("close")[2];
// When the user clicks the button, open the modal 
// btnDel.onclick = function() {
//   modalDel.style.display = "block";
// }
// When the user clicks on <span> (x), close the modal
spanDel.onclick = function() {
  modalDel.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalDel) {
    modalDel.style.display = "none";
  }
}

function moredotsclick(){
  window.location.href = "./post.html";
}

function deletePost(){
  modalDel.style.display = "none";
  // ((btn.parentNode).parentNode).removeChild(btn.parentNode);
  //btnDel.DOCUMENT_NODE
  var id=sessionStorage.getItem('id')
  console.log("Console logged",id)
  var ele=document.getElementById(id)
  ele.style.display='none';
}

function deletefun(id){
sessionStorage.setItem('id',id)
modalDel.style.display = "block";
}
var signUpButton = document.getElementById("signUpButtonId");

signUpButton.onclick = function() {
  signInModal.style.display="none";
  signUpModal.style.display = "block";
  }