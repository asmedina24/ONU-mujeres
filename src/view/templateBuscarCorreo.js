
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
     <button  id="boton">buscarrrrr</button>

   </div>
 </div>
     
  
        <div id="buscarCorreo"></div>                          
       
         `;
  divbuscarCorreo.innerHTML = viewbuscarCorreo;
  const buscarCorreoid = divbuscarCorreo.querySelector("#buscarCorreo");
  //  console.log(buscarCorreoid); 
  // let search = divbuscarCorreo.querySelector("#search");
  // let searchboton = divbuscarCorreo.querySelector("#boton");
  // searchboton.addEventListener("click", myFunction)


 firebase.firestore().collection('perfil').onSnapshot((query) => {
    buscarCorreoid.innerHTML = "";
    query.forEach((doc) => {
      
        // <a href="#/initchat?${doc.data().email}" class="list-group-item list-group-item-action ">
      buscarCorreoid.innerHTML += `    
         <div id="div_${doc.id}" class="d-flex w-100 justify-content-between">
             <h5 id="nombre${doc.id}" class="mb-1 ">${doc.data().name}</h5>
             <p  id="email${doc.id}"> ${doc.data().email}</p>
         </div>`;
         
        
      // console.log(doc.data());
      // console.log(111, doc.data().email)
      // console.log(222, `nombre${doc.id}`);
      // console.log(333, doc.data().uid);
       
     
     //  chat.guardarColeccionChart(`nombre${doc.id}`, doc.data().uid)
    });
    
    query.forEach((doc) => {
      firebase.auth().onAuthStateChanged((user) => {
      const uid = user.email;
      const nombre = divbuscarCorreo.querySelector(`#div_${doc.id}`);
      nombre.addEventListener('click', () => {
      window.location= `#/initchat?${doc.data().email}`
      chat.guardarColeccionChart(uid, doc.data().email)
      })
    });
  });
});

  return divbuscarCorreo;
};