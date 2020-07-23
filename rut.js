function checkRut(rut) {
    var valor = rut.value.replace('.', '');
    var valor = valor.replace('-', '');
    var cuerpo = valor.slice(0, -1);
    var digitoVerificador = valor.slice(-1).toUpperCase();


    if (cuerpo.value.length > 8 || digitoVerificador.value.length > 1) {
        cuerpo.value = "";
        digitoVerificador.value = "";
        alert("RUT equivocado ha ingresado mas digitos de lo requerido");
    } else{
        alert("Es correcto")
    }


    suma = 0;
    multiplo = 2;
    for (i = 1; i <= cuerpo.value.length; i++) {
        index = multiplo * valor.charAt(cuerpo.value.length + i);
        suma = suma + index;
        if (multiplo < 7) {
            multiplo = multiplo + 1;
            alert("El numero ingresado es demasiado largo")
        } else {
            multiplo = 2;
        }


        dvEsperado = 11 - (suma % 11);
        digitoVerificador = (digitoVerificador == 'K') ? 10 : digitoVerificador;
        digitoVerificador = (digitoVerificador == 0) ? 11 : {
        }
    }
}