import comunidad from "../functions/comunidad.js";

export const crearComunidades = () => {
  const divCreateComunity = document.createElement("div");
  const viewCreateComunity = ` 
  
  <header class="d-flex justify-content-between align-items-center">
<!-- Nuestro botón. para volver y crear -->
 <a href="#/wall" class="btn " >  <i class="fa fa-chevron-left text-white"></i>  </a>
   <p class="tituloNuevaComunidad">Nueva Comunidad</p>
  <button type="" class="btn  text-white" id="btnCrear"> Crear </button>
</header>
 
  
  <div class="container">

<form id="formularioCrear" class="form">
  <div class="form-group">
    <label class="nombreComunidad" for="exampleInputEmail1">Nombre</label>
    <input type="text" class="form-control" id="nombre" aria-describedby="NameHelp" placeholder="ej:  (#Santiago-biblioredes) ">
  </div>
  <div class="form-group">
    <label class="descripcionCommunidad"  for="exampleInputPassword1">Descripción (opcional)</label>
    <input type="text" class="form-control" id="descripcion" placeholder="¿De que se trata éste canal?">
  </div>
  <div class="form-group form-check">
    
    <label class="form-check-label" for="exampleCheck1">Compartir esta comunidad</label>
    <input type="checkbox" class="" id="estado">
  </div>

</form>
   </div>
      `; 
  divCreateComunity.innerHTML = viewCreateComunity;
  const formulario = divCreateComunity.querySelector("#formularioCrear");
  const nombre = divCreateComunity.querySelector("#nombre");
  const descripcion = divCreateComunity.querySelector("#descripcion");
  const estado = divCreateComunity.querySelector("#estado");
  const btnCrear = divCreateComunity.querySelector("#btnCrear");

  //le damos la funcionalidad al boton crear
  btnCrear.addEventListener(
    "click",
    () => {
      let valorEstado = false;
      if (estado.checked == true) valorEstado = true;

      const date = new Date();
      const fecha = `${`00${date.getDate()}`.slice(-2)}/${`00${
        date.getMonth() + 1
      }`.slice(-2)}/${date.getFullYear()} ${`00${date.getHours()}`.slice(
        -2
      )}:${`00${date.getMinutes()}`.slice(-2)}:${`00${date.getSeconds()}`.slice(
        -2
      )}`;
      //condicionamos que si el valor del nombre del canal y la descripción es distinto de vacio guardamos.
      if (nombre.value != "" && descripcion.value != "") {
        comunidad.guardarComunidad(nombre, descripcion, valorEstado, fecha);
        window.location.hash = "#/wall";
      }
    },
    false
  );
  return divCreateComunity;
};
