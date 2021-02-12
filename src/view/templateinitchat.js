
import chat from "../functions/chat.js"
export const initchat = (email) => {
  const divChatUnit = document.createElement("div");
  const viewChatUnit = ` 

  <div class="card canal">
  <div class="card-body">
     <div id="contenidoprotegidoChat"></div>
       
        </div>
        </div>
         <form id="formulario">
         <div class="row">
            <div class="col-9">
              <input type="text" placeholder="Enviar mensaje" class="form-control" id="answerChat">
            </div>
            <div class="col-3">
              <button id="btnformulario" class="btn-clip" type="submit"><i class="fa fa-paperclip aria-hidden="true"" ></i></i><i class="fas fa-play"></i></button>
            </div>
         </div>
        </form>

         `;


  divChatUnit.innerHTML = viewChatUnit;
  const formulario = divChatUnit.querySelector("#formulario");
  const answerChat = divChatUnit.querySelector("#answerChat");

  firebase.firestore().collection('Chats')
    .where('usuarios', 'array-contains', email)
    .get()
    .then((querySnapshot) => {
      let docID;
      querySnapshot.forEach((doc) => {
        docID = doc.id;

        firebase.auth().onAuthStateChanged((user) => {
          const uid = user.email;
          const name = user.displayName;
          const img = user.photoURL;
          const date = new Date();
          const fecha = `${(`00${date.getDate()}`).slice(-2)}/${(`00${date.getMonth() + 1}`).slice(-2)}/${date.getFullYear()} ${(`00${date.getHours()}`).slice(-2)}:${(`00${date.getMinutes()}`).slice(-2)}:${(`00${date.getSeconds()}`).slice(-2)}`;

          formulario.addEventListener('submit', (e) => {
            console.log("tengo click");
            e.preventDefault()
            chat.guardarChatUnit(answerChat, fecha, uid, docID);

          });
          chat.mostrarChatUnico(email);
        })
      })
    });
  return divChatUnit;
};