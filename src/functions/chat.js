const chat = {
    mostrarChat: (uid) =>{
        const contenidoProtegido = document.querySelector("#contenidoprotegido");
        firebase.firestore().collection('chat').orderBy('fecha').onSnapshot((query) => {
            contenidoProtegido.innerHTML = "" ;
            query.forEach(doc =>{
              contenidoProtegido.innerHTML += 
              console.log(doc.data())
              if(doc.data().uid === uid){
                contenidoProtegido.innerHTML += ` <div class="derecha">
                <span class=""> ${doc.data().texto}</span>
                <span class=""> ${doc.data().fecha}</span>
                <span class=""> ${doc.data().img}</span>
                <span class=""> ${doc.data().nombre}</span>
                </div>
                `;
        
              } else {
                contenidoProtegido.innerHTML += ` <div class="izquiera">
                <span class=""> ${doc.data().texto}</span>
                <span class=""> ${doc.data().fecha}</span>
                <span class=""> ${doc.data().img}</span>
                <span class=""> ${doc.data().nombre}</span>
                  </div>`;
        
              }
            contenidoProtegido.scrollTop = contenidoProtegido.scrollHeight;
            });
        });

    },
   
    guardarChart: (name, answerChat, uid, fecha, img) =>{
        firebase.firestore().collection('chat').add({
            nombre: name,
            texto: answerChat.value,
            uid: uid,
            fecha: fecha,
            img: img,

    }).then((res) => {
        console.log('mensaje guardado');
        answerChat.value = "";  
      }).catch((e) => {
        console.log(e)
          
      });
    },
    guardarNuevoGrupo: (name, fecha, img) =>{
      firebase.firestore().collection('chat').add({
          nombre: name,
        
          fecha: fecha,
         
  }).then((res) => {
      console.log('mensaje guardado');
      answerChat.value = "";  
    }).catch((e) => {
      console.log(e)
        
    });
  },
    mostrarChat2: () => {
      const contenidoProtegido = document.querySelector("#contenidoprotegido");
      firebase.firestore().collection("chat").orderBy("fecha", "desc").onSnapshot((query) => {
        contenidoProtegido.innerHTML = "";
          query.forEach((doc) => {
            // console.log(doc.id);
             contenidoProtegido.innerHTML += `<a href="#/Chat2?${doc.id}" class="list-group-item list-group-item-action ">
             <div class="d-flex w-100 justify-content-between">
               <h5 class="mb-1 ">${doc.data().nombreComunidad}</h5>
               <small>${moment(
                 doc.data().fecha,
                 "DD/MM/YYYY h:mm:ss"
               ).fromNow(true)}</small>
               
             </div>
             <p class="mb-1">${doc.data().descripcion}</p>
           
           </a>`;
    contenidoProtegido.scrollTop = contenidoProtegido.scrollHeight;
          });
        });
    },
    mostrarChat: (uid) => {
      //console.log(uidComunidad);
      const nombreCanal = document.querySelector("#nombreCanal");
      const bodyCanal = document.querySelector("#bodyCanal");
  
      firebase.firestore().collection(`chat`).doc(uid).get() //para obtener el dato
        .then((querySnapshot) => {
          nombreCanal.innerHTML = querySnapshot.data().nombreComunidad;
        });
  
      firebase.firestore().collection(`chat/${uidComunidad}/mensaje`).onSnapshot((query) => {
          bodyCanal.innerHTML = "";
          query.forEach((doc) => {
            bodyCanal.innerHTML += `
          <div class="list-group-item  ">
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1 ">${doc.data().usuario}</h5>
              <small>${doc.data().fecha}</small>
            </div>
            <p class="mb-1">${doc.data().mensaje}</p>
   <div class="d-flex justify-content-around">
   <button class="btn"><i class="fas fa-thumbs-up "></i> Me gusta</button>
   <button class="btn" ><i class="fas fa-comment-alt"></i> Responder</div></button>
          </div>   
         
          `;
          });
        });
    },

    

};
export default chat;