import comunidad from "../functions/comunidad.js";

import { showTabs } from "../router.js";
export const canal = (uid) => {
  const divcanal = document.createElement("div");
  const viewCanal = `  
  <header class="d-flex justify-content align-items-center">
<!-- Nuestro botón. para volver y crear -->
 <a href="#/wall" class="btn " >  <i class="fa fa-chevron-left text-white"></i>  </a>
   <p class="tituloCanal" id='nombreCanal'></p>
 
</header>
 
<div class="card canal">
    <div class="card-body">
        <div id="bodyCanal"></div>
    </div>
    <div class="card-footer">
        <form id="formularioEnviar">
            <div class="row">
                <div class="col-9">
                    <input type="text" placeholder="Enviar mensaje" class="form-control" id="messageCanal">
                </div>
                <div class="col-3">
                    <button class="btn" type="submit"><i class="fas fa-play"></i></button>
                </div>
            </div>

        </form>
    </div>
</div>
     
    
        `;

  divcanal.innerHTML = viewCanal;
  const divTabs = divcanal.querySelector("#tabs");

  const formulario = divcanal.querySelector("#formularioEnviar");
  const messageCanal = divcanal.querySelector("#messageCanal");

   //obtiene el usuario actual de Auth .
  firebase.auth().onAuthStateChanged((user) => {
    //console.log(user);

    formulario.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = user.displayName;
      const img = user.photoURL;
      const date = new Date();
      const fecha = `${`00${date.getDate()}`.slice(-2)}/${`00${
        date.getMonth() + 1
      }`.slice(-2)}/${date.getFullYear()} ${`00${date.getHours()}`.slice(
        -2
      )}:${`00${date.getMinutes()}`.slice(-2)}:${`00${date.getSeconds()}`.slice(
        -2
      )}`;

      if (messageCanal.value!='') comunidad.saveMessage(name, messageCanal, fecha, uid);
    });
 
    comunidad.mostrarCanal(uid);
  

  });
  return divcanal;
};
