// import { filtrar } from "../functions/wall.js";
// import { userInfo } from "os";
import { showTabs } from "../router.js";
export const wall = () => {
  const divWall = document.createElement("div");
  const viewWall = `  
    <div class="selection">
      <div class="button-selection" id="btnComunidad">
        <p>comunidad</p>
      </div>
      <div class="button-selection" id="btnChat">
      <p>chat</p>
      </div>
      </div>
        <div class="Tab" id="tabs">
            </div>

      <div class="input-group">
        <div class="form-outline">
         <input type="search" placeholder=" Buscar" id='search'/>
         <button id="boton"> BUscar</button>
          <label><i class="fas fa-search"></i></label>
      </div>
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
  divWall.innerHTML = viewWall;
  const divTabs = divWall.querySelector("#tabs");
  showTabs("", divTabs);
  const toggle = divWall.querySelector(".toggle");
  const menu = divWall.querySelector(".menu");
  const items = divWall.querySelectorAll(".item");
  const btnComunidad = divWall.querySelector("#btnComunidad");
  const btnChat = divWall.querySelector("#btnChat");
  const formulario = divWall.querySelector("#formulario");
  const answerChat = divWall.querySelector("#answerChat");
  const contenidoProtegido = divWall.querySelector("#contenidoprotegido")
  
 
 

  
  /* Event Listeners */
  // toggle.addEventListener("click", toggleMenu(menu,toggle), false);
  btnComunidad.addEventListener("click",() => showTabs("Comunidades", divTabs),
    false );

  btnChat.addEventListener("click", () => showTabs("Chat", divTabs), false);
   
  
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


    const filtrar = () =>{
      console.log(search.value);
      // const searching = search.value.toLowerCase()
    };
    const search = divWall.querySelector(('#search'));
    const search2 = divWall.querySelector(('#boton'));
    console.log(search2);
    search2.addEventListener('click', filtrar)

    // const add = divWall.querySelector('#agregar');
    // add.addEventListener('click', () => {
    //   console.log('buscando chat nuevo');
    //   });
    
 
  return divWall;

};



// let search = document.getElementById("search1");
//     search.addEventListener("keyup", (text) => {
//         porcenType.innerHTML = "";
//         let searchPokemon = text.target.value.toLowerCase() // variable igual al palabras igresadas x usuario en miniscula  
//         contenedor.mostrarlista(funciones.search(pokemon, searchPokemon))
        
        
//     })
     