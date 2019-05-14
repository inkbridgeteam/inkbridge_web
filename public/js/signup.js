function check() {
  var password = document.getElementById('password').value;
  var password1 = document.getElementById('password1').value;
  if (password1 == password) {
    return true;
  } else {
    alert("Passwords didn't match");
    return false;
  }
}

function fillcheck() {
  var password = document.getElementById('password').value;
  var password1 = document.getElementById('password1').value;
  var fullname = document.getElementById('fullname').value;
  var penname = document.getElementById('penname').value;
  var email = document.getElementById('email').value;
  var f = document.getElementById('next');
  if (flag == true) f.style.display = 'none';
  else {
    if (
      password.length != 0 &&
      password1.length != 0 &&
      fullname.length != 0 &&
      penname.length != 0 &&
      email.length != 0
    ) {
      f.disabled = false;
    } else {
      f.disabled = true;
    }
  }
}

document.getElementById('mainform').onkeypress = function(e) {
  var key = e.charCode || e.keyCode || 0;
  if (key == 13) {
    e.preventDefault();
  }
};
