import { showTabs } from "../router.js";
export const Chat = () => {
  const divChat = document.createElement("div");
  const viewChat = `   
    <div class="Tab" id="tabs">
        </div>

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
  showTabs("", divTabs);
  const toggle = divChat.querySelector(".toggle");
  const menu = divChat.querySelector(".menu");
  const items = divChat.querySelectorAll(".item");
  const btnComunidad = divChat.querySelector("#btnComunidad");
  const btnChat = divChat.querySelector("#btnChat");
  const formulario = divChat.querySelector("#formulario");
  const answerChat = divChat.querySelector("#answerChat");
  const contenidoProtegido = divChat.querySelector("#contenidoprotegido");

  const contenidoChat = () => {
    firebase.auth().onAuthStateChanged(() => {
   
      const currentUserData = firebase.auth().currentUser;
      const uid = currentUserData.uid;
      const date = new Date();
      const fecha = `${
        (`00${date.getDate()}`).slice(-2)}/${(`00${date.getMonth() + 1}`).slice(-2)}/${
        date.getFullYear()} ${
        (`00${date.getHours()}`).slice(-2)}:${
        (`00${date.getMinutes()}`).slice(-2)}:${
        (`00${date.getSeconds()}`).slice(-2)}`;
    
    formulario.addEventListener('submit', (e) =>{
    e.preventDefault()
    console.log(answerChat.value)
    firebase.firestore().collection('chat').add({
     texto:  answerChat.value,
     uid: uid,
     fecha: fecha,
    })
   
      .then(res => {(console.log('mensaje guardado'))})
      .cath(e => console.log(e))
     // answerChat.value.reset()       
  })

  firebase.firestore().collection('chat').orderBy('fecha').onSnapshot(query => {
    contenidoProtegido.innerHTML = "" ;
    query.forEach(doc =>{
      console.log(doc.data())
      if(doc.data().uid === uid){
        contenidoProtegido.innerHTML += ` <div class="derecha">
        <span class=""> ${doc.data().texto}</span>
        <br>
        <span class=""> ${doc.data().fecha}</span>
        </div>
        `;

      } else {
        contenidoProtegido.innerHTML += ` <div class="izquiera">
      <span class=""> ${doc.data().texto}</span>
      <br>
      <span class=""> ${doc.data().fecha}</span>
      </div>`;

      }
      contenidoProtegido.scrollTop = contenidoProtegido.scrollHeight;
    })


  })
});
}; 
contenidoChat();


  // const filtrar = () =>{
  //   console.log(search.value);
  //   // const searching = search.value.toLowerCase()
  // };
  // const search = divWall.querySelector(('#search'));
  // const search2 = divWall.querySelector(('#boton'));
  // console.log(search2);
  // search2.addEventListener('click', filtrar)

  // const add = divWall.querySelector('#agregar');
  // add.addEventListener('click', () => {
  //   console.log('buscando chat nuevo');
  //   });
  

return divChat;

};
 
