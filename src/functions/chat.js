const chat = {
  mostrarChat: () => {
    const contenidoProtegido = document.querySelector("#contenidoprotegido");
    firebase.firestore().collection('chat').orderBy('fecha').onSnapshot((query) => {
      contenidoProtegido.innerHTML = "";
      query.forEach(doc => {
        console.log(doc.id);
        contenidoProtegido.innerHTML += `
                
            <a href="#/posteoChat?${doc.id}" class="list-group-item list-group-item-action ">
              <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1 ">${doc.data().nombreComunidad}</h5>
                <small>${moment(doc.data().fecha, "DD/MM/YYYY h:mm:ss").fromNow(true)}</small>
              </div>
             
            
            </a>`;
        // if(doc.data().uid === uid){
        //   contenidoProtegido.innerHTML += ` <div class="derecha">
        //   <span class=""> ${doc.data().texto}</span>
        //   <span class=""> ${doc.data().fecha}</span>
        //   <span class=""> ${doc.data().img}</span>
        //   <span class=""> ${doc.data().nombre}</span>
        //   </div>
        //   `;

        // } else {
        //   contenidoProtegido.innerHTML += ` <div class="izquiera">
        //   <span class=""> ${doc.data().texto}</span>
        //   <span class=""> ${doc.data().fecha}</span>
        //   <span class=""> ${doc.data().img}</span>
        //   <span class=""> ${doc.data().nombre}</span>
        //     </div>`;

        // }
        contenidoProtegido.scrollTop = contenidoProtegido.scrollHeight;
      });
    });

  },

  mostrarChatUnico: (email) => {
    const contenidoprotegidoChat = document.querySelector("#contenidoprotegidoChat");
    let gri = firebase.firestore().collection('Chats')
      .where('usuarios', 'array-contains', email)
      .get().then((querySnapshot) => {
        // console.log(querySnapshot.docs);
        // console.log(querySnapshot);
        querySnapshot.forEach((doc) => {
          firebase.firestore().collection(`Chats/${doc.id}/mensajes`)
            .onSnapshot((query) => {
              contenidoprotegidoChat.innerHTML = "";
              query.forEach(doc => {
                // console.log(doc.id);
                if (doc.data().sender === email) {
                  contenidoprotegidoChat.innerHTML +=
                    ` <div class="derecha">
                <span class=""> ${doc.data().mensaje}</span>
                <span class=""> ${doc.data().fecha}</span>
                <span class=""> ${doc.data().sender}</span>
                </div>
                `;

                } else {
                  contenidoprotegidoChat.innerHTML += ` <div class="izquiera">
                <span class=""> ${doc.data().mensaje}</span>
                <span class=""> ${doc.data().fecha}</span>
                <span class=""> ${doc.data().sender}</span>
                  </div>`;

                }

                // console.log(doc.data());
              });
            });
        });
      });


    // .collection('mensajes')
    // .onSnapshot((query) => {
    //   contenidoprotegidoChat.innerHTML = "";
    //   query.forEach(doc => {
    //     console.log(doc.id);
    //     if (doc.data().uid === uid) {
    //       console.log(doc.data().uid);
    //       contenidoprotegidoChat.innerHTML +=
    //         ` <div class="derecha">
    //         <span class=""> ${doc.data().texto}</span>
    //         <span class=""> ${doc.data().fecha}</span>
    //         <span class=""> ${doc.data().uid}</span>
    //         </div>
    //         `;

    //     } else {
    //       contenidoprotegidoChat.innerHTML += ` <div class="izquiera">
    //         <span class=""> ${doc.data().texto}</span>
    //         <span class=""> ${doc.data().fecha}</span>
    //         <span class=""> ${doc.data().uid}</span>
    //           </div>`;

    //     }


    // contenidoprotegidoChat.scrollTop = contenidoprotegidoChat.scrollHeight;
    //   });

    // });

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
  

  // guardarColeccionChart: (sender, email) => {
  //   firebase.firestore().collection('Chats').onSnapshot((query) => {
  //   //  console.log(query);
  //     query.forEach((doc) => {
  //       if (doc.data().usuarios.includes(email) && doc.data().usuarios.includes(sender)) {
  //         console.log('if')
          
  //     } else {
  //        firebase.firestore().collection('Chats').add({
  //           canalChats: "",
  //           usuarios: [
  //             sender,
  //             email,
  //           ],
  //         }).then((res) => {
  //           console.log('mensaje guardado, guardarColeccionChart');
  //         }).catch((e) => {
  //           console.log(e)
  //        });
  //      }
  //     })
      
       
  //   });
  //   },


  // guardarColeccionChart: (sender, email) => {
  //   firebase.firestore().collection('Chats').onSnapshot((query) => {
  //     console.log(query);
  //     query.forEach((doc) => {
  //        if(doc.exists === false) {
  //         console.log(doc)
  //         firebase.firestore().collection('Chats').add({
  //           canalChats: "",
  //           usuarios: [
  //             sender,
  //             email,
  //           ],
  //         }).then((res) => {
  //           console.log('mensaje guardado, guardarColeccionChart');
  //         }).catch((e) => {
  //           console.log(e)
  //         })
             
  //       }      
  //         else if (doc.data().usuarios.includes(email) && doc.data().usuarios.includes(sender)) {
  //             console.log('if')
  //         } 
          
  //       })
      
       
  //   });
  

  // },

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
  guardarGrupoChat: (name, estado, fecha) => {
    console.log(name.value, estado, fecha);

    firebase.firestore().collection("chat").add({
      img: "",
      estado: estado,
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


};
export default chat;