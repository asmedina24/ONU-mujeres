
import chat from "../functions/chat.js"

export const buscarCorreo = () => {
  // const currentUserData = firebase.auth().currentUser;
  // const emailData = currentUserData.email;
  const divbuscarCorreo = document.createElement("div");
  const viewbuscarCorreo = `  
    
   <div class="input-group">
   <div class="form-outline">
   <input type="search" placeholder=" Buscar" id='search'/>
     <label><i class="fas fa-search"></i></label>
     

   </div>
 </div>
     
  
        <div id="buscarCorreo"></div>                          
       
         `;
  divbuscarCorreo.innerHTML = viewbuscarCorreo;
  const buscarCorreoid = divbuscarCorreo.querySelector("#buscarCorreo");


  firebase.firestore().collection('perfil').onSnapshot((query) => {
    buscarCorreoid.innerHTML = "";
    query.forEach((doc) => {

      // <a href="#/initchat?${doc.data().email}" class="list-group-item list-group-item-action ">
      buscarCorreoid.innerHTML += `  <div class="card canal">
         <div id="div_${doc.id}" class="d-flex w-100 ">
         <img src="${doc.data().photo}" class="imgg" >
         <h5 id="nombre${doc.id}" class="mb-1 ">${doc.data().name}</h5>
         </div>
         </div>`;


      });

    firebase.auth().onAuthStateChanged((user) => {
      query.forEach((doc) => {
        const uid = user.email;
        const nombre = divbuscarCorreo.querySelector(`#div_${doc.id}`);

        nombre.addEventListener('click', () => {
          firebase.firestore().collection('Chats').where('usuarios', 'in',  [[uid, doc.data().email]]).get().then((docChat) => {
            if(docChat.empty){
            firebase.firestore().collection('Chats').where('usuarios', 'in',  [[doc.data().email, uid]]).get().then((user2) => {
            console.log(user2.docs)
            console.log(777, user2.empty, uid, doc.data().email)
            if(!user2.empty){
             console.log("Entro al if")
             window.location = `#/initchat?${doc.data().email}`
            } else {
              chat.guardarColeccionChart(uid, doc.data().email)
              window.location = `#/initchat?${doc.data().email}`
              console.log("Entro al Else")
            }
            }) 
          } else {
            console.log(docChat.docs)
            console.log("Entro al else2")
             window.location = `#/initchat?${doc.data().email}`
          }

          }) 

        })
      });
    });
  });

  return divbuscarCorreo;
};