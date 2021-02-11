  
 import chat from "../functions/chat.js"

 export const buscarCorreo = () => {
  const currentUserData = firebase.auth().currentUser;
  const emailData = currentUserData.email;
   const divbuscarCorreo = document.createElement("div");
   const viewbuscarCorreo = `    
  
 
         <div id="buscarCorreo"></div>
                               
       
         `;
 
 
         divbuscarCorreo.innerHTML = viewbuscarCorreo;
         const buscarCorreoid = divbuscarCorreo.querySelector("#buscarCorreo");
         console.log(buscarCorreoid); 

         firebase.firestore().collection('perfil').onSnapshot((query) => {
            buscarCorreoid.innerHTML = "";
            query.forEach(doc => {
              console.log(doc.data());
              buscarCorreoid.innerHTML += `
               
               <a href="#/initchat?${doc.data().email}" class="list-group-item list-group-item-action ">
              <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1 ">${doc.data().name}</h5>
                <p> ${doc.data().email}</p>
                </div></a>`; 
                chat.guardarColeccionChart(emailData, doc.data().email)
            });
          });
        //  chat.buscarCorreo();
    return divbuscarCorreo;
 };