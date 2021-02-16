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
      
      firebase.auth().onAuthStateChanged((user) => {
         chat.mostrarChat(user.email);
                 
      });       
   return divChat;
};