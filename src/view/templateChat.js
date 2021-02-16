import chat from "../functions/chat.js"
export const Chat = () => {

  // firebase.auth().onAuthStateChanged((user) => {
  //   const idUSer = user.uid;
  //   const emailUSer = user.email;
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
                <a class="dropdown-item" href="#/buscarCorreo"><i class="fa fa-user" aria-hidden="true"></i>  Nuevo Chat</a>
                <a class="dropdown-item" href="#/crearGrupoChat"><i class="fa fa-users" aria-hidden="true"></i> Crear Grupo</a>
                <a class="dropdown-item" href="#/chatMasivo" id='opcionAdministrador'></a>
           </div>
       </div>
      `;


      divChat.innerHTML = viewChat;
      firebase.auth().onAuthStateChanged((user) => {
          const idUSer = user.uid;
          const emailUSer = user.email;
          const emailAdministrador = 'onu@administradora.com';
          const opcionMessageAdm = `<a class="dropdown-item" href="#/chatMasivo"><i class="fa fa-comments" aria-hidden="true"></i> Mensaje Masivo</a>`
          const opcionMessage = divChat.querySelector("#opcionAdministrador");

          opcionMessage.innerHTML = `${emailUSer === emailAdministrador ? opcionMessageAdm : ''}`


          
        chat.mostrarChat();
                  
       });       
   return divChat;
};