function verif(){
  var password = document.getElementById('password').value ;
  var confirmPassword = document.getElementById('confirmPassword').value ;

  if(password == confirmPassword) {
    document.getElementById('password').style.border = 'solid green' ;
    document.getElementById('confirmPassword').style.border = 'solid green' ;
  }else {
    document.getElementById('password').style.border = 'solid red' ;
    document.getElementById('confirmPassword').style.border = 'solid red' ;
  }
}
