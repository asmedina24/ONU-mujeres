const chat = {
    mostrarChat: (uid) =>{
        const contenidoProtegido = document.querySelector("#contenidoprotegido");
        firebase.firestore().collection('chat').orderBy('fecha').onSnapshot((query) => {
            contenidoProtegido.innerHTML = "" ;
            query.forEach(doc =>{
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

};
export default chat;