
import chat from "../functions/chat.js"
export const initchat = (email) => {
  const divChatUnit = document.createElement("div");
  firebase.auth().onAuthStateChanged((user) => {
    const uid = user.email;
    const name = user.displayName;
    const img = user.photoURL;
    const date = new Date();
    const fecha = `${(`00${date.getDate()}`).slice(-2)}/${(`00${date.getMonth() + 1}`).slice(-2)}/${date.getFullYear()} ${(`00${date.getHours()}`).slice(-2)}:${(`00${date.getMinutes()}`).slice(-2)}:${(`00${date.getSeconds()}`).slice(-2)}`;
      firebase.firestore().collection('Chats')
                  .where('usuarios', 'array-contains', email)
                  .get()
                  .then((querySnapshot) => {
                    let docID;
                    querySnapshot.forEach((doc) => {
                      docID = doc.id;
                      const pareja = (doc.data().usuarios[1]=== uid)? doc.data().usuarios[0]:doc.data().usuarios[1]
                      firebase.firestore().collection('perfil')
                              .where('email', '==', pareja)
                              .onSnapshot((perfil) => {
                                  perfil.forEach((datos) => {
                                    if (email === datos.data().email){
                                      const viewChatUnit = ` 
                                      <header class="d-flex justify-content align-items-center">
                                      <!-- Nuestro botón. para volver y crear -->
                                      <a href="#/wall" class="btn " >  <i class="fa fa-chevron-left text-white"></i>  </a>
                                      <div id="header-title" class="principales "> ${datos.data().name} </div>
                                    
                                      </header>
                                    
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
                                        formulario.addEventListener('submit', (e) => {
                                          console.log("tengo click");
                                          e.preventDefault();
                                          chat.guardarChatUnit(answerChat, fecha, uid, docID);
                                        });
                                        chat.mostrarChatUnico(email,doc);     
                                    }
                                  });
                              });
                                   
                    });
                  });
                              
  });              
  return divChatUnit;
};