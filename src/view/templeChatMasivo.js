
import chat from "../functions/chat.js"

export const chatMasivo = () => {
  const divChatMasivo = document.createElement("div");
  
        const viewChatUnit = /*html*/` 
        <header class="d-flex justify-content align-items-center">
        <!-- Nuestro botón. para volver y crear -->
        <a href="#/wall" class="btn " >  <i class="fa fa-chevron-left text-white"></i>  </a>
        <div id="header-title" class="principales "> Mensaje Masivo </div>
      
         </header>
      
        <div class="card canal" id="cardCanalMasivo">
        <div class="card-body">
           <div id="contenidoprotegidoChatMasivo"></div>
             
              </div>
              </div>
              <div class="card-footer footerCanal">
               <form id="formulario">
               <div class="row">
                  <div class="col-9">
                    <input type="text" placeholder="Enviar mensaje" class="form-control" id="answerChat">
                  </div>
                  <div class="col-3">
                    <button id="btnformulario" class="btn-clip" type="submit"><i class="fa fa-paperclip" aria-hidden="true"></i><i class="fas fa-play"></i></button>
                  </div>
               </div>
              </form>
              </div>
               `;
      
      
        divChatMasivo.innerHTML = viewChatUnit;
        const formulario = divChatMasivo.querySelector("#formulario");
        const answerChat = divChatMasivo.querySelector("#answerChat");
      
              firebase.auth().onAuthStateChanged((user) => {
                const uid = user.email;
                const name = user.displayName;
                const img = user.photoURL;
                const date = new Date();
                const fecha = `${(`00${date.getDate()}`).slice(-2)}/${(`00${date.getMonth() + 1}`).slice(-2)}/${date.getFullYear()} ${(`00${date.getHours()}`).slice(-2)}:${(`00${date.getMinutes()}`).slice(-2)}:${(`00${date.getSeconds()}`).slice(-2)}`;
      
                formulario.addEventListener('submit', (e) => {
                  e.preventDefault()
                  chat.guardarChatMasivo(answerChat, fecha, uid);
      
                });
                chat.mostrarChatMasivo();
              })
        //     })
        //   });
//       }

//     });
//   });  
  
  return divChatMasivo;
};