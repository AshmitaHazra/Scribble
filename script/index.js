// Get the modal
var signUpModal = document.getElementById("SignUpModel");
var signUpBtn = document.getElementById("SignUpBtn");
var signUpSpan = document.getElementById('CloseSignUp');

var signInModal = document.getElementById("SignInModel");
var signInBtn = document.getElementById("SignInBtn");
var signInSpan = document.getElementById('CloseSignIn');

var createModal = document.getElementById("CreateModel");
var createBtn = document.getElementById("CreatePostBtn");
var createSpan = document.getElementById('CloseCreate');

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
openModel(createBtn, createModal);
closeModel(createSpan, createModal);
closeModel(signUpSpan, signUpModal);
closeModel(signInSpan, signInModal);

window.onclick = function(event) {
  if (event.target == signUpModal) {
    signUpModal.style.display = "none";
  }

  if (event.target == signInModal) {
    signInModal.style.display = "none";
  }
  if (event.target == createModal) {
    createModal.style.display = "none";
  }
}

function AllPostsBtn(){
  window.location.href = "./html/postslist.html";
}

var signUpButton = document.getElementById("signUpButtonId");

signUpButton.onclick = function() {
  signInModal.style.display="none";
  signUpModal.style.display = "block";
  }