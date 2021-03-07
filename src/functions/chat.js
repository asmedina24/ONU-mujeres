const chat = {
  mostrarChat: (user) => {
    const contenidoProtegido = document.querySelector("#contenidoprotegido");
    
    firebase.firestore().collection('Chats')
    .where('usuarios', 'array-contains', user)
    .onSnapshot((query) => {
      contenidoProtegido.innerHTML='';
      query.forEach(doc => {
      const pareja = (doc.data().usuarios[1]=== user)? doc.data().usuarios[0]:doc.data().usuarios[1]
        firebase.firestore().collection('perfil')
        .where('email', '==', pareja)
        .onSnapshot((perfil) => {
          perfil.forEach((datos)=>{
            const profilePhotoIcon = `<img src="../Imagenes/iconchat.png" id="filePost" class="imgChat"></img>`
            const profilePhoto = `<img src="${datos.data().photo}" class="imgChat"></img>`;
      
            contenidoProtegido.innerHTML += `
            <a href="#/initchat?${datos.data().email}" class="list-group-item list-group-item-action ">
            <div class="d-flex w-100 justify-content-between">
              <div class = "div-img-chat">
                 ${datos.data().photo === '' ? profilePhotoIcon : profilePhoto}

              </div> 
                <h5 class="name-chat ">${datos.data().name}</h5>
            </div>
          
                      
          </a>`;

          });
         
        });
         
      }); ;
    });

  },

  mostrarChatUnico: (email, doc) => {
    const contenidoprotegidoChat = document.querySelector("#contenidoprotegidoChat");
    firebase.firestore().collection(`Chats/${doc.id}/mensajes`)
    .onSnapshot((query) => {
      contenidoprotegidoChat.innerHTML = "";
      query.forEach(doc => {
         console.log(doc.id);
        if (doc.data().sender === email) {
          console.log('entro al if de mostrar');
          contenidoprotegidoChat.innerHTML +=
            ` <div class="derecha" >
        <span class=""> ${doc.data().mensaje}</span>
        <small>${moment(doc.data().fecha, "DD/MM/YYYY h:mm:ss").fromNow(true)}</small>
        
        </div>
        `;

        } else {
          contenidoprotegidoChat.innerHTML += ` <div class="izquierda">
        <span class=""> ${doc.data().mensaje}</span>
        
        <small>${moment(doc.data().fecha, "DD/MM/YYYY h:mm:ss").fromNow(true)}</small>
       
          </div>`;

        }

        
      });
    });


  },

  guardarChatUnit: (mensaje, fecha, sender, id) => {
    firebase.firestore()
      .collection("Chats")
      .doc(id)
      .collection('mensajes').add({
        mensaje: mensaje.value,
        sender: sender,
        fecha: fecha,


      }).then((res) => {
        console.log('mensaje guardado, guardarChatUnit');
        answerChat.value = "";
      }).catch((e) => {
        console.log(e)

      });
  },

  guardarColeccionChart: (sender, email) => {
    firebase.firestore().collection('Chats').add({
      canalChats: "",
      usuarios: [
        sender,
        email,
      ],
    }).then((res) => {
      console.log('mensaje guardado, guardarColeccionChart');
    }).catch((e) => {
      console.log(e)
    });

  },
  

  guardarChart: (name, answerChat, uid, fecha, img) => {
    firebase.firestore().collection('chat').add({
      nombre: name,
      texto: answerChat.value,
      uid: uid,
      fecha: fecha,
      img: img,

    }).then((res) => {
      console.log('mensaje guardado, guardarChart');
      answerChat.value = "";
    }).catch((e) => {
      console.log(e)

    });
  },
  guardarGrupoChat: (name, description, estado, fecha) => {
    console.log(name.value, estado, fecha);

    firebase.firestore().collection("chat").add({
      img: "",
      estado: estado,
      descripcion: description.value,
      nombreComunidad: name.value,
      fecha: fecha,

    })
      .then((res) => {
        console.log("mensaje guardado en firebase, guardarGrupoChat");
        window.location.hash = "#/Chat";
      })
      .catch((e) => {
        console.log(e);
      });
  },
  mostrarChat2: () => {
    const nombreCanal = document.querySelector("#nombreCanal");
    const bodyCanal = document.querySelector("#bodyCanal");

    firebase.firestore().collection('chat').doc().get() //para obtener el dato
      .then((querySnapshot) => {
        nombreCanal.innerHTML = querySnapshot.data();
      });

    firebase.firestore().collection('chat').onSnapshot((query) => {
      bodyCanal.innerHTML = "";
      query.forEach((doc) => {
        // console.log(doc.data());
        bodyCanal.innerHTML += `
        <div class="list-group-item  ">
          <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1 ">${doc.data().mensaje}</h5>
            <small>${doc.data().fecha}</small>
          </div>
          <p class="mb-1">${doc.data().usuario}</p>
        <div class="d-flex justify-content-around">
        <button class="btn"><i class="fas fa-thumbs-up "></i> Me gusta</button>
        <button class="btn" ><i class="fas fa-comment-alt"></i> Responder</div></button>
                </div>   
       
        `;
      });
    });
  },

  saveMessage: (usuario, mensaje, fecha) => {
    firebase
      .firestore().collection("chat").doc().collection("mensaje").add({
        usuario: usuario,
        mensaje: mensaje.value,
        fecha: fecha,
      })
      .then((res) => {
        mensaje.value = "";
        console.log("mensaje guarda canal");
      })
      .catch((e) => {
        console.log(e);
      });
  },
  buscarCorreo: () => {
    const buscarCorreo = document.querySelectorAll("#buscarCorreo");
    console.log(buscarCorreo);
    firebase.firestore().collection('perfil').onSnapshot((query) => {
      buscarCorreo.innerHTML = "";
      query.forEach(doc => {
        console.log(doc.id);
        buscarCorreo.innerHTML += `
        <p> ${doc.data().nombre}</p>
        <p> ${doc.data().correo}</p>`;


      });
    });

  },

  guardarChatMasivo: (mensaje, fecha, sender) => {
    firebase.firestore()
      .collection("ChatMasivo")
      .add({
        mensaje: mensaje.value,
        sender: sender,
        fecha: fecha,


      }).then((res) => {
        console.log('mensaje guardado, ChatMasuvo');
        answerChat.value = "";
      }).catch((e) => {
        console.log(e)

      });
  },

  mostrarChatMasivo: () => {
    const contenidoprotegidoChatMasivo = document.querySelector("#contenidoprotegidoChatMasivo");
    firebase.firestore()
    .collection('ChatMasivo')
    .orderBy('fecha', 'desc')
    .onSnapshot((query) => {
                contenidoprotegidoChatMasivo.innerHTML = "";
                query.forEach(doc => {
                  // console.log(doc.id);
                    contenidoprotegidoChatMasivo.innerHTML +=
                      ` <div class="derecha" >
                  <span class=""> ${doc.data().mensaje}</span>
                  <small>${moment(doc.data().fecha, "DD/MM/YYYY h:mm:ss").fromNow(true)}</small>
                  
                  </div>
                  `;
  
                })
            });
              }

};
export default chat;