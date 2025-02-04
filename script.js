const submitFunction = (event)=>{
    if(!validarFomulario()){
        event.preventDefault()
    }else{
        alert(
            'Los datos enviados fueron: ' + '\n'+
            'Nombre: ' + document.getElementById('nombre').value + '\n' + 
            'Apellido: ' + document.getElementById('apellido').value + '\n' + 
            'DNI: ' + document.getElementById('dni').value + '\n' + 
            'Email: ' + document.getElementById('email').value + '\n' + 
            'Edad: ' + document.getElementById('edad').value + '\n' + 
            'Actividad: ' + document.getElementById('actividad').value + '\n' + 
            'Nivel de estudio: ' + document.getElementById('nivelEstudio').value + '\n' 
        )
    }


};
document.getElementById("formulario").addEventListener('submit',submitFunction); //escucha el envio del formulario

function validarFomulario(){
    const camposTexto= document.querySelectorAll('input[type="text"]');
    let validacionCorrecta=true;

    //validacion de inputs text
    camposTexto.forEach((campo)=>{
        let errorCampo=document.getElementById('error' + campo.id.charAt(0).toUpperCase()+campo.id.slice(1));//busca el div error
        if(campo.value.length == ''){
            mostrarError(errorCampo, 'Este campo es requerido.');
            validacionCorrecta=false;
        }else if(campo.value.length >0 && campo.value.length < 3){
            mostrarError(errorCampo,'Este campo debe tener al menos 3 caracteres.');
        }else{
            ocultarrError(errorCampo);
        }
    });

    //validacion de email
    const email = document.getElementById('email');
    let errorEmail= document.getElementById('errorEmail');

    if(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)){  //este regex valida que el formato del email sea valido
        ocultarrError(errorEmail);
    }else{
        mostrarError(errorEmail,'Ingrese un coreo electronico valido');
        validacionCorrecta=false;
    }

    //validacion de edad
    const edad= document.getElementById('edad');
    let errorEdad= document.getElementById('errorEdad');
    if (edad.value <18){
        mostrarError(errorEdad, 'Debes tener al menos 18 años para registrarte.');
        validacionCorrecta=false;
    }else{
        ocultarrError(errorEdad);
    }

    //validacion de actividad
    const actividad = document.getElementById('actividad');
    let errorActividad= document.getElementById('errorActividad');

    if(actividad.value==''){
        mostrarError(errorActividad,'Por favor selecciona una actividad.');
        validacionCorrecta=false;
    }else{
        ocultarrError(errorActividad);
    }

    //validacion de nivel de estudios

    const nivelEstudio = document.getElementById('nivelEstudio');
    let errorNivelEstudio= document.getElementById('errorNivelEstudio');

    if(nivelEstudio.value==''){
        mostrarError(errorNivelEstudio,'Por favor selecciona una nivel de estudios.');
        validacionCorrecta=false;
    }else{
        ocultarrError(errorNivelEstudio);
    }

    //validacion de terminos y condiciones

    const aceptoTerminos= document.getElementById('aceptoTerminos');
    let errorAceptoTerminos = document.getElementById('errorAceptoTerminos');
    
    if(!aceptoTerminos.checked){
        mostrarError(errorAceptoTerminos,'Debe aceptar los terminos y condiciones.');
        validacionCorrecta=false;
    }
    else{
        ocultarrError(errorAceptoTerminos);
    }

    return validacionCorrecta; //esto dira si el formulario completo es o no valido.
}

const mostrarError =(elemento, mensaje) =>{
    elemento.textContent = mensaje;
    elemento.style.display = 'block'; 

};
const ocultarrError =(element) =>{
    element.textContent = '';

};