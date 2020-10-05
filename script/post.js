//sign up & sign in model for header
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
//like button changes
function likeBtn(){
  document.getElementById("contentEditable") = contentEditable;
  var save = document.getElementById("saveId");
  save.display;

}
var signUpButton = document.getElementById("signUpButtonId");

signUpButton.onclick = function() {
  signInModal.style.display="none";
  signUpModal.style.display = "block";
  }