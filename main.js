let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);

let nombresuario = id("nombresuario"),
    email = id("correoelectronico"),
    contrasena = id("contrasena"),
    formulario = id("formulario"),
    
    msjError = classes("error"),
    iconoExito = classes("success-icon"),
    failureIcon = classes("failure-icon");

formulario.addEventListener("enviar", (e) =>{
    e.prevenDefault();

    motor(nombresuario, 0, "Incompleto");
    motor(correoelectronico, 1, "Incompleto");
    motor(contrasena, 2, "Incompleto");

});

let motor = (id, serial, mensaje) =>{
    if(id.value.trim()=== ""){
        msjError[serial].innerHTML = mensaje;
        id.style.border = "2px solid red";
    
        // iconos
        failureIcon[serial].style.opacity = "1";
        successicon[serial].style.opacity = "0";
    }
    else{
        msjError[serial].innerHTML = "";
        id.style.border = "2px solid green";

        failureIcon[serial].style.opacity = "0";
        successicon[serial].style.opacity = "1";
    }
}












