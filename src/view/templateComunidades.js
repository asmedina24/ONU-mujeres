import comunidad from "../functions/comunidad.js";
export const Comunidades = () => {
  const divComunity = document.createElement("div");
  const viewComunity = `  

  <div class="input-group">
    <div class="form-outline">
    <input type="search" placeholder=" Buscar" id='search'/>
      <label><i class="fas fa-search"></i></label>
    </div>
  </div>
 
    <div id="bodyComunidades"></div>
 
    <!-- Default dropup button -->
    <div class="dropup">
      <button type="button" class="fabComunity " data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <i class="fas fa-ellipsis-v"></i>
      </button>
      <div class="dropdown-menu">
        <a class="dropdown-item" href="#"><i class="fas fa-eye"></i> Encontrar nueva comunidad</a>
      <a class="dropdown-item" href="#/crearComunidades"><i class="fas fa-plus"></i> Crear Comunidad</a>
    </div>
</div>

      `;
  divComunity.innerHTML = viewComunity;
     //obtiene el usuario actual de Auth .
  firebase.auth().onAuthStateChanged((user) => {
    //console.log(user);
     comunidad.mostrarComunidades();
  });
  return divComunity;
};
