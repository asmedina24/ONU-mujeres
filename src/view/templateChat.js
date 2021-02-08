 import chat from "../functions/chat.js"

import { showTabs } from "../router.js";
export const Chat = () => {
  const divChat = document.createElement("div");
  const viewChat = `  

        <div id="contenidoprotegido"></div>
           <form id="formulario">
              <input type="text" placeholder="Enviar mensaje" class="input-chat" id="answerChat">
                <div class="div-chat">
                <button class="btn-chat" type="submit">Enviar</button>
                </div>
           </form>
             
      <div id="agregar"><p id="suma">+</p></div>
        `;


      divChat.innerHTML = viewChat;
      const divTabs = divChat.querySelector("#tabs");
      // showTabs("Chat", divTabs);
      // const toggle = divChat.querySelector(".toggle");
      // const menu = divChat.querySelector(".menu");
      // const items = divChat.querySelectorAll(".item");
      // const btnComunidad = divChat.querySelector("#btnComunidad");
      // const btnChat = divChat.querySelector("#btnChat");
      
      const formulario = divChat.querySelector("#formulario");
      const answerChat = divChat.querySelector("#answerChat");
    
      firebase.auth().onAuthStateChanged((user) => {
        const uid = user.uid;
        const name = user.displayName;
        const img = user.photoURL;
        const date = new Date();
        const fecha = `${
          (`00${date.getDate()}`).slice(-2)}/${(`00${date.getMonth() + 1}`).slice(-2)}/${
          date.getFullYear()} ${
          (`00${date.getHours()}`).slice(-2)}:${
          (`00${date.getMinutes()}`).slice(-2)}:${
          (`00${date.getSeconds()}`).slice(-2)}`;
    
                formulario.addEventListener('submit', (e) => {
                e.preventDefault()
                  chat.guardarChart(name, answerChat, uid, fecha, img);
              });
              chat.mostrarChat(uid);
              
      });       
   return divChat;
};
