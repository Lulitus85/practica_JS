/* window.onload = function(){
    
} */

//window.addEventListener('load',cargar);

//function cargar(){
////let formulario = document.querySelector('form');
////formulario.elements.email.focus();
////console.log(formulario.elements); //va a traer una colletion de inputs.
////formulario.onsubmit = function(evento){ //el evento apunta al submit completo de todo el form, para quje traiga y valide todo lo que cargó el usuario.
////////////if(!validaciones()){
////////////////evento.preventDefault(); //esto apunta al evento. de hecho, podría suplantarse con un this.
////////////} else {
////////////////formulario.submit(); //si no hay errores, enviá el formulario.
////////////}
////} 

////function validaciones(){
/////////* let email = formulario.elements.email; */
////////let {email, password, passwordRepeat, userName, termsConditión} = formulario.elements; //pasamos todos los names del formulario para que los agarre y los iguale a los elementos capturados
////////console.log(email.value); //si yo quiero que me traiga lo que introdujo el usuario, voy a llamar al elemento y al valor.
////////if(!validacionEmail(email)) return false;

////////return true;
////}

////function validacionEmail(email){
////////let errorEmail = document.getElementById('errorEmail');
////////let re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

////////if(!re.test(email.value)){
////////////////email.classList.add('is-invalid');
////////////////errorEmail.innerHTML = "El email es inválido.";
////////////////errorEmail.classList.add('alert-danger');
////////////////return false;
////////}else{
////////////email.classList.remove('is-invalid');
////////////errorEmail.innerHTML= "";
////////////errorEmail.classList.remove('alert-danger');
////////////email.classList.add('id-valid');
////////////formulario.elements.password.focus(); //si es correcto se va a pasar (POSICIONA // FOCUS) al siguiente elemento y va a devolver TRUE
////////////return true;
////////}

////}

////function validacionPassword(password){
////////let re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
////////let errorPassword = document.getElementById('errorPassword');
////////if(!re.test(password.value)){
//////////// password.classList.add('is-invalid');
//////////// let placeHolder = password.getAttribute('placeholder');
//////////// console.log(placeHolder);
//////////// password.setAttribute('placeholder','contraseña inválida');

////////}
////}

//} 
 

//de dani para revisar!


window.addEventListener('load',cargar);

function cargar(){
    let formulario = document.querySelector('.form');
    formulario.elements.email.focus();
    console.log(formulario.elements);
    formulario.onsubmit = function(evento){
        if(!validaciones()){
            evento.preventDefault();
        }else{
            formulario.submit();
        }
    }

    function validaciones(){
        //let email = formulario.elements.email;
        let {email,password,passwordRepeat,userName,termsCondition} = formulario.elements;
        console.log(email.value);
        if(!validacionEmail(email)) return false;
        if(!validacionPassword(password)) return false;

        return true;


    }

    function validacionEmail(email){
        let errorEmail = document.getElementById('errorEmail');
        let re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
        if(!re.test(email.value)){
            email.classList.add('is-invalid');
            errorEmail.innerHTML = "El email debe ser válido...";
            errorEmail.classList.add('alert-danger');
            return false;
        }else{
            email.classList.remove('is-invalid');
            errorEmail.innerHTML = "";
            errorEmail.classList.remove('alert-danger');
            email.classList.add('is-valid');
            formulario.elements.password.focus();
            return true;
        }

    }

    function validacionPassword(password){
        let re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}$/;
        let errorPassword = document.getElementById('errorPassword');
        if(!re.test(password.value)){
            password.classList.add('is-invalid');
            let placeHolder = password.getAttribute('placeholder');
            console.log(placeHolder);
            password.value = "";
            password.setAttribute('placeholder', 'Contraseña inválida');
            console.log(placeHolder);
        }

    }

}