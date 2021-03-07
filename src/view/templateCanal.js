import { saveMessage, displayChannel, getProfile, likeFb, deleteChannel } from "../functions/canalDeComunidad.js";

import { showTabs } from "../router.js";

export const canal = (uid) => {

  const divcanal = document.createElement("div");
   firebase.auth().onAuthStateChanged((user) => {
    const idUSer = user.uid;
    const emailUSer = user.email;


    const opcionDelete = `<i class="fa fa-trash" id="delete" aria-hidden="true"></i>`
    const emailAdministrador = 'onu@administradora.com';

    const viewCanal = /*html*/`  
    <header class="d-flex justify-content align-items-center" id="headerName">
      <!-- Nuestro botón. para volver y crear -->
      <a href="#/wall" class="btn " >  <i class="fa fa-chevron-left text-white"></i>  </a>
      <div id="headertitleCanal">
        <p class="tituloCanal" id='nombreCanal'></p>
        <p class="tituloCanal" id='miembros'>17 miembros</p>
      </div>
      <span id="spanDelete">
      ${emailUSer === emailAdministrador ? opcionDelete : ''}
      
      </span>
    </header>
 
    <div class="card canal" id="cardCanal">
        <div class="card-body" id="CardBody">
          <div id="bodyCanal">
          </div>
        </div>
          <div class="card-footer">
            <form id="formSendChannel">
                <div class="row">
                  <div class="col-9">
                    <input type="text" placeholder="Enviar mensaje" class="form-control" id="messageCanal">
                  </div>
                  <div class="col-3" id="divSubmit">
                    <i class="fa fa-paperclip" aria-hidden="true" id="clip"></i>
                    <button class="btn" type="submit"><i class="fas fa-play"></i></button>
                  </div>
                </div>
            </form>
          </div>
    </div> 
    `;

  divcanal.innerHTML = viewCanal;

  const bodyCanal = divcanal.querySelector("#bodyCanal");

 

    const postWall = (uid) => {
      firebase.firestore()
      .collection(`comunidades/${uid}/mensaje`)
      .orderBy('fecha', 'desc')
      .get()
      .then((query) => {
        bodyCanal.innerHTML = "";
        query.forEach((doc) => {
          const idUserMessage = `${doc.data().idUsuario}`;
          const likeColorBlue = `<button class="btn btn-small-font likeCanal" id="buttonLike-${doc.id}" style="color: rgb(0, 157, 220)" ><i class="fas fa-thumbs-up" id="iconLike-${doc.id}"></i> Me gusta  ${doc.data().meGusta.length}</button>`
          const likeColorBlack = `<button class="btn btn-small-font likeCanal" id="buttonLike-${doc.id}" style="color: #212529" ><i class="fas fa-thumbs-up" id="iconLike-${doc.id}"></i> Me gusta  ${doc.data().meGusta.length}</button>`
         
         bodyCanal.innerHTML += /*html*/`
          <div class="list-group-item " id="headerPost">
            <div id=divPhoto>
              <img src="Imagenes/profile-image.svg" class="photoUserChannel" id="photoProfileChannel-${doc.id}">
            </div>
            <div id=divInfo>
              <div class="d-flex w-100 justify-content-between">
                <div id=divName>
                 <h5 class="mb-1 " id="nameProfileChannel-${doc.id}"></h5>
                  <small>${moment(doc.data().fecha, "DD/MM/YYYY h:mm:ss").fromNow(true)}</small>
                </div>
              </div>
              <p class="mb-4">${doc.data().mensaje}</p>
              <div class="d-flex justify-content-around">
                ${doc.data().meGusta.includes(emailUSer) ? likeColorBlue : likeColorBlack}
                <button class="btn btn-small-font btn-respoder" ><i class="fas fa-comment-alt"></i> Responder</div></button>
              </div>
            </div>
          </div>
               
        `;

          getProfile(idUserMessage, `nameProfileChannel-${doc.id}`, `photoProfileChannel-${doc.id}`);

        });
        query.forEach((doc) => {
          const likeButton = document.getElementById(`buttonLike-${doc.id}`); // boton para el like
          firebase.auth().onAuthStateChanged((user) => {

            // llama a la funcion LIKE
            likeButton.addEventListener('click', () => {
              console.log("entro al like")
              likeFb(doc.id, user.email, uid);
            });



          });
        });
        const divTabs = divcanal.querySelector("#tabs");

        const formSendChannel = divcanal.querySelector("#formSendChannel");
        const messageCanal = divcanal.querySelector("#messageCanal");
        const deleteChannelAdm =divcanal.querySelector("#spanDelete");
        

        // eliminar canal 
        deleteChannelAdm.addEventListener("click", () =>{ 
          deleteChannel(uid);
        })

        formSendChannel.addEventListener("submit", (e) => {
          e.preventDefault();
          const date = new Date();
          const dateMessage = `${`00${date.getDate()}`.slice(-2)}/${`00${date.getMonth() + 1
            }`.slice(-2)}/${date.getFullYear()} ${`00${date.getHours()}`.slice(
              -2
            )}:${`00${date.getMinutes()}`.slice(-2)}:${`00${date.getSeconds()}`.slice(
              -2
            )}`;

          if (messageCanal.value != '') {
            saveMessage(messageCanal, dateMessage, uid, emailUSer, idUSer);
            postWall(uid)
          }
        });
        displayChannel(uid);

        // document.getElementById("CardBody").scrollTo(document.getElementById("cardCanal").scrollHeight, 0)
      });
    }
    postWall(uid)
  });
  return divcanal;
};
