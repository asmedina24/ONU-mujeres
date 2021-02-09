import chat from "../functions/chat.js"
export const Chat = () => {
  const divChat = document.createElement("div");
  const viewChat = `  
  <div class="input-group">
    <div class="form-outline">
    <input type="search" placeholder=" Buscar" id='search'/>
      <label><i class="fas fa-search"></i></label>
    </div>
  </div>
        <div id="contenidoprotegido"></div>
        <div id="contenidoprotegidoChat"></div>
         
        <!-- Default dropup button -->
           <div class="dropup">
             <button type="button" class="fabComunity " data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
               <i class="fas fa-ellipsis-v"></i>
             </button>
             <div class="dropdown-menu">
               <a class="dropdown-item" href="#/buscarCorreo"><i class="fas fa-eye"></i> Iniciar Chat</a>
             <a class="dropdown-item" href="#/crearGrupoChat"><i class="fas fa-plus"></i> Crear Grupo</a>
           </div>
       </div>
      `;


      divChat.innerHTML = viewChat;
      // const divTabs = divChat.querySelector("#tabs");
      // showTabs("Chat", divTabs);
      // const toggle = divChat.querySelector(".toggle");
      // const menu = divChat.querySelector(".menu");
      // const items = divChat.querySelectorAll(".item");
      // const btnComunidad = divChat.querySelector("#btnComunidad");
      // const btnChat = divChat.querySelector("#btnChat");
      
      // const formulario = divChat.querySelector("#formulario");
      // const answerChat = divChat.querySelector("#answerChat");
    
       firebase.auth().onAuthStateChanged((user) => {
      //   const uid = user.uid;
      //   const name = user.displayName;
      //   const img = user.photoURL;
      //   const date = new Date();
      //   const fecha = `${
      //     (`00${date.getDate()}`).slice(-2)}/${(`00${date.getMonth() + 1}`).slice(-2)}/${
      //     date.getFullYear()} ${
      //     (`00${date.getHours()}`).slice(-2)}:${
      //     (`00${date.getMinutes()}`).slice(-2)}:${
      //     (`00${date.getSeconds()}`).slice(-2)}`;
    
      //         //   formulario.addEventListener('submit', (e) => {
      //         //   e.preventDefault()
      //         //     chat.guardarChart(name, answerChat, uid, fecha, img);
      //         // });
       chat.mostrarChat();
      //  chat.mostrarChatUnico();
              
       });       
   return divChat;
};