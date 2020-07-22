function checkRut(rut) {
    var valor = rut.value.replace('.', '');
    valor = valor.replace('-', '');
    cuerpo = valor.slice(0, -1);
    digitoVerificador = valor.slice(-1).toUpperCase();


    rut.value = cuerpo + '-' + digitoVerificador
    if (cuerpo.length > 8) {
        alert("RUT equivocado ha ingresado mas digitos de lo requerido");
        return false;
    }


    suma = 0;
    multiplo = 2;
    for (i = 1; i <= cuerpo.length; i++) {
        index = multiplo * valor.charAt(cuerpo.length + i);
        suma = suma + index;
        if (multiplo < 7) {
            multiplo = multiplo + 1;
        } else {
            multiplo = 2;
        }


        dvEsperado = 11 - (suma % 11);
        digitoVerificador = (digitoVerificador == 'K') ? 10 : digitoVerificador;
        digitoVerificador = (digitoVerificador == 0) ? 11 : digitoVerificador;
        if (dvEsperado != digitoVerificador) { alert("ta mala la wea"); return false; }
        alert('ta weniooooooo');
    }
}
