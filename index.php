<!doctype html>
<html lang="es">
<link rel="stylesheet" href="estilo.css">
<script src="rut.js"></script>
<head>
    <meta charset="UTF-8">
    <title>Validador de RUT</title>
</head>
<body>
<header>
<nav class="navbar navbar-dark bg-dark">
  <span class="navbar-text">
  <h1>Validar RUT</h1>
  </span>
</nav>

</header>
  <content>
    <div id="wrapper" >
      <p>&nbsp;</p>
      <div class="input-group input-group-lg">
        <form>
        <input type="text" id="rut" name="rut"  required oninput="checkRut(this)" placeholder="Ingrese RUT">

        <input type="text" id="rut" name="rut"  required oninput="checkRut(this)" placeholder="Digito verificador">
        <button type="submit">Validar RUT</button>
    </form>
      </div>
      <p class="text-info" id="msgerror"></p>
    </div>
  </content>

</body>
</html>