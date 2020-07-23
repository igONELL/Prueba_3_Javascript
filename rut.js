function checkRut(rut,digitoVerificador) {
    var valor = rut.value.replace('.', '');
        valor = valor.replace('-', '');
//var cuerpo = valor.slice(0, -1);
var cuerpo = rut.value;

    var resultado = (cuerpo.length <= 8 && digitoVerificador.value.length == 1);

    if (!resultado) return resultado;
    alert("luchito1");


    var suma = 0;
    var multiplo = 2;
    var index = 0;
    for (i = 1; i <= cuerpo.length; i++) {
        index = multiplo * valor.charAt(cuerpo.length + i);
        suma = suma + index;
        if (multiplo <= 7) {
            multiplo = multiplo + 1;
            alert("Luchito2");
        } else {
            multiplo = 2;
        }
    }
    
    var dvEsperado = 11 - (suma % 11);
    resultado = dvEsperado == digitoVerificador;

    return resultado;
}