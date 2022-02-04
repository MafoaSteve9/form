let button = document.getElementById('button');
let nom = document.getElementById('nom');
let prenom = document.getElementById('prenom');
let email = document.getElementById('email');
let date = document.getElementById('date');
let adresse = document.getElementById('adresse');
let postal = document.getElementById('postal');
let password = document.getElementById('password');
let confirm_password = document.getElementById('confirm_password');

let regex_email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

let regex_date = /^\d{4}\-\d{1,2}\-\d{1,2}$/;

/* Marion */
let regex_date2 = /^(19[2-9][0-9]|20[01][0-9])-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;

button.addEventListener('click', (event) => {
  event.preventDefault();

  document.getElementById('error_nom').innerHTML = ''

  if(nom.value === ""){
    document.getElementById('error_nom').innerHTML = `
    <p class='error'>champ vide !</p>
  `
  }
  else if(nom.value.length < 5 || nom.value.length > 15){
    document.getElementById('error_nom').innerHTML = `
      <p class='error'>Le nom doit contenir au minimum 5 caractères !</p>
    `
  }else{
    document.getElementById('sucess_nom').innerHTML = `
      <img src="img/verifier.png" width="15"/>
    `
  }

  document.getElementById('error_prenom').innerHTML = ''

  if(prenom.value.length < 5 || prenom.value.length > 15){
    document.getElementById('error_prenom').innerHTML = `
      <p class='error'> error prenom</p>
    `
  }

  document.getElementById('error_email').innerHTML = ''

  if(!regex_email.test(email.value)){
    document.getElementById('error_email').innerHTML = `
      <p class='error'> error email</p>
    `
  }

  document.getElementById('error_date').innerHTML = ''

  if(!regex_date.test(date.value)){
    document.getElementById('error_date').innerHTML = `
      <p class='error'> error date</p>
    `
  }

  document.getElementById('error_adresse').innerHTML = ''

  if(adresse.value.length < 5){
    document.getElementById('error_adresse').innerHTML = `
      <p class='error'> error adresse</p>
    `
  }

  document.getElementById('error_postal').innerHTML = ''

  if(isNaN(postal.value) || postal.value == ""){
    document.getElementById('error_postal').innerHTML = `
      <p class='error'> error postal</p>
    `
  }

  document.getElementById('error_password').innerHTML = ''

  if(password.value.length < 8 || confirm_password.value.length < 8){
    document.getElementById('error_password').innerHTML = `
      <p class='error'> error password</p>
    `
  }

  if(nom.value.length >= 5 && nom.value.length <= 15 && prenom.value.length >= 5 && prenom.value.length <= 15 ){
    if(regex_email.test(email.value) && regex_date.test(date.value)){
      if(adresse.value !== "" && !isNaN(postal.value)){
        if(password.value.length >= 8 && password.value === confirm_password.value){
          confirm('OK');
        }
      }
    }
  }
  
});

console.log('test');