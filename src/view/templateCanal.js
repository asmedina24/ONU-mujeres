// import comunidad from "../functions/comunidad.js";
import { saveMessage, displayChannel, getProfile, likeFb } from "../functions/canalDeComunidad.js";

import { showTabs } from "../router.js";

export const canal = (uid) => {
  let idUserMessage;
  const currentUserData = firebase.auth().currentUser; // Datos del Usuario que accedió
  const emailUSer = currentUserData.email; // Email del usuario que accedio
  const idUSer =currentUserData.uid;
  
  const divcanal = document.createElement("div");
  const viewCanal = /*html*/`  
    <header class="d-flex justify-content align-items-center">
      <!-- Nuestro botón. para volver y crear -->
      <a href="#/wall" class="btn " >  <i class="fa fa-chevron-left text-white"></i>  </a>
        <p class="tituloCanal" id='nombreCanal'></p>
    </header>
 
    <div class="card canal">
        <div class="card-body">
          <div id="bodyCanal">
          </div>
        </div>
          <div class="card-footer">
            <form id="formSendChannel">
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

  const bodyCanal = divcanal.querySelector("#bodyCanal");
  firebase.firestore().collection(`comunidades/${uid}/mensaje`).onSnapshot((query) => {
    bodyCanal.innerHTML = "";
    query.forEach((doc) => {
      idUserMessage = `${doc.data().idUsuario}`;
      bodyCanal.innerHTML += /*html*/`
        <div class="list-group-item ">
          <div class="d-flex w-100 justify-content-between">
            <img src="Imagenes/profile-image.svg" class="photoUserChannel" id="photoProfileChannel-${doc.id}">
            <h5 class="mb-1 " id="nameProfileChannel-${doc.id}"></h5>
            <small>${doc.data().fecha}</small>
          </div>
          <p class="mb-1">${doc.data().mensaje}</p>
          <div class="d-flex justify-content-around">
          <button class="btn"><i class="fas fa-thumbs-up " id="buttonLike-${doc.id}"></i> Me gusta ${doc.data().correo}</button>
          <button class="btn" ><i class="fas fa-comment-alt"></i> Responder</div></button>
        </div>   
    `;

  getProfile(idUserMessage, `nameProfileChannel-${doc.id}`, `photoProfileChannel-${doc.id}`);

  });
  
  query.forEach((doc) => {
    const likeButton = document.getElementById(`buttonLike-${doc.id}`); // boton para el like
    console.log("likeButton", likeButton)

    // llama a la funcion LIKE
    likeButton.addEventListener('click', () => {
      console.log("entro al like")
        likeFb(doc.id, emailUSer, uid);
      });
  })

});

  const divTabs = divcanal.querySelector("#tabs");

  const formSendChannel = divcanal.querySelector("#formSendChannel");
  const messageCanal = divcanal.querySelector("#messageCanal");

   //obtiene el usuario actual de Auth .
  firebase.auth().onAuthStateChanged((user) => {

    formSendChannel.addEventListener("submit", (e) => {
      e.preventDefault();
      // const img = user.photoURL;
      const date = new Date();
      const dateMessage = `${`00${date.getDate()}`.slice(-2)}/${`00${
        date.getMonth() + 1
      }`.slice(-2)}/${date.getFullYear()} ${`00${date.getHours()}`.slice(
        -2
      )}:${`00${date.getMinutes()}`.slice(-2)}:${`00${date.getSeconds()}`.slice(
        -2
      )}`;

      if (messageCanal.value!='') saveMessage(messageCanal, dateMessage, uid, emailUSer, idUSer);
    });
 
    displayChannel(uid);
  

  });
  return divcanal;
};
