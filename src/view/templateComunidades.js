import comunidad from "../functions/comunidad.js";
import login from "../functions/login.js";

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
export const menu =()=>{
  firebase.auth().onAuthStateChanged((user) => {
    console.log(user)
    const uid = user.email; 
      console.log(uid)
      firebase.firestore().collection('perfil').where('email', '==', uid).get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const containerRoot = document.getElementById('root2');
          containerRoot.innerHTML = `
          <header>
          <button class="botonMenu">
          <i class="fa fa-bars"></i>  
      </button>
   
    <!--   Los links -->
      <nav class="principal">
          <ul>
             
              <li><a href="#/profile"><i class="fa fa-user" aria-hidden="true"></i> ${doc.data().email} ${doc.data().name}</a></li>
              <li><a href="#/profile">Editar Perfil  </a></li>
              <li class="principales" id="cerrarSesion"> <i class="fas fa-sign-out-alt"></i> Cerrar </li>
          </ul>
      </nav>
     <p class="titulo">Tu Oportunidad</p>
  </header>  
      `;
        
          const cerrar = document.getElementById('cerrarSesion');
          cerrar.addEventListener("click", () => {
              login.cerrarSesion();
        
          });
        });
      });
  });      
 
};
