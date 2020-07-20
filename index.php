<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="estilo.css">
    <title>Document</title>
</head>
<body>
    


<header>
  <h1>Valida RUT</h1>
  <p>Algoritmo de validaciónd del rut Chileno</p>
</header>
  <content>
    <div id="wrapper" >
      <p>&nbsp;</p>
      <div class="input-group input-group-lg">
        <span class="input-group-addon" id="sizing-addon1">Rut</span>
        <input type="text" class="form-control" placeholder="Rut a validar, ej: 11111111-1" aria-describedby="sizing-addon1" id="txt_rut">
      </div>
            <p>&nbsp;</p>
            <button id="btnvalida" class="btn btn-default">Valida RUT</button>
      <p>&nbsp;</p>
      <p class="text-info" id="msgerror"></p>
    </div>
  </content>

  
<script>


var Fn = {
    // Valida el rut con su cadena completa "XXXXXXXX-X"
    validaRut : function (rutCompleto) {
        rutCompleto = rutCompleto.replace("‐","-");
        if (!/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test( rutCompleto ))
            return false;
        var tmp     = rutCompleto.split('-');
        var digv    = tmp[1]; 
        var rut     = tmp[0];
        if ( digv == 'K' ) digv = 'k' ;
        
        return (Fn.dv(rut) == digv );
    },
    dv : function(T){
        var M=0,S=1;
        for(;T;T=Math.floor(T/10))
            S=(S+T%10*(9-M++%6))%11;
        return S?S-1:'k';
    }
}


$("#btnvalida").click(function(){
    if (Fn.validaRut( $("#txt_rut").val() )){
        $("#msgerror").html("El rut ingresado es válido :D");
    } else {
        $("#msgerror").html("El Rut no es válido :'( ");
    }
});


</script>
  </body>
</html>