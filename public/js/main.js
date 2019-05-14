var flag = false;

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

function alterflag() {
  flag = true;
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

function showafter() {
  document.getElementById('mainform').style.marginTop = '30px';
  document.getElementById('mainform').style.marginBottom = '30px';
  document.getElementById('next').style.display = 'none';
  document.getElementById('after').style.display = 'block';
  document.getElementById('extraquotes').style.display = 'block';
}

function addgenre() {
  genreval = document.getElementById('select_id').value;

  var buttonadd = document.createElement('button');
  var name = 'btn btn-danger marg hashbutton';
  var arr = buttonadd.className.split(' ');
  if (arr.indexOf(name) == -1) {
    buttonadd.className += ' ' + name;
  }
  buttonadd.id = genreval + 'b';
  var node = document.createTextNode(genreval);
  buttonadd.appendChild(node);

  var myElement = document.getElementById(genreval + 'b');
  if (myElement) {
    document.getElementById('repeattext').innerHTML = '* Already Selected';
  } else {
    document.getElementById('repeattext').innerHTML = '';
    if (genreval.length > 0) {
      var element = document.getElementById('addhere');
      element.appendChild(buttonadd);
      document.getElementById('genre').value = '';
    }
  }
}

function enabler() {
  var i = 1;
  var check = document.getElementById('regoption');
  if (check.checked) {
    for (i = 1; i <= 5; i++) {
      var subele = document.getElementById(i.toString());
      subele.disabled = false;
    }
  }
  if (!check.checked) {
    for (i = 1; i <= 5; i++) {
      var subele = document.getElementById(i.toString());
      subele.disabled = true;
    }
  }
}

function enabler1() {
  var i = 1;
  var check = document.getElementById('intoption');
  if (check.checked) {
    for (i = 1; i <= 5; i++) {
      var subele = document.getElementById('lang' + i.toString());
      subele.disabled = false;
    }
  }
  if (!check.checked) {
    for (i = 1; i <= 5; i++) {
      var subele = document.getElementById('lang' + i.toString());
      subele.disabled = true;
    }
  }
}

function activateblockregional() {
  var check = document.getElementById('regoption');
  var f = document.getElementById('reglang');
  if (check.checked) {
    f.style.display = 'block';
  }
  if (!check.checked) {
    f.style.display = 'none';
  }
}

function activateblockinternational() {
  var check = document.getElementById('intoption');
  var f = document.getElementById('intlang');
  if (check.checked) {
    f.style.display = 'block';
  }
  if (!check.checked) {
    f.style.display = 'none';
  }
}

document.getElementById('mainform').onkeypress = function(e) {
  var key = e.charCode || e.keyCode || 0;
  if (key == 13) {
    e.preventDefault();
  }
};
