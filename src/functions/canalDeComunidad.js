export const displayChannel = (uidComunidad) => {
    const nombreCanal = document.querySelector("#nombreCanal");
    const bodyCanal = document.querySelector("#bodyCanal");
    firebase.firestore()
      .collection(`comunidades`)
      .doc(uidComunidad)
      .get() //para obtener el dato
      .then((querySnapshot) => {
        nombreCanal.innerHTML = querySnapshot.data().nombreComunidad;
      });

    // firebase.firestore()
    //   .collection(`comunidades/${uidComunidad}/mensaje`)
    //   .onSnapshot((query) => {
    //     bodyCanal.innerHTML = "";
    //     query.forEach((doc) => {
    //       idUserMessage = `${doc.data().idUsuario}`;
    //       bodyCanal.innerHTML += /*html*/`
    //         <div class="list-group-item  ">
    //           <div class="d-flex w-100 justify-content-between">
    //             <h5 class="mb-1 " id="nameProfileChannel">${doc.data().idUsuario}</h5>
    //             <small>${doc.data().fecha}</small>
    //           </div>
    //           <p class="mb-1">${doc.data().mensaje}</p>
    //           <div class="d-flex justify-content-around">
    //           <button class="btn"><i class="fas fa-thumbs-up "></i> Me gusta</button>
    //           <button class="btn" ><i class="fas fa-comment-alt"></i> Responder</div></button>
    //         </div>   
       
    //     `;
    //   });
    //   getProfile(idUserMessage);
    // });
      
}; 
  
  
//guardamos el mensaje
export const saveMessage = (message, date, uidComunidad, correoUser, idUser) => {
    firebase.firestore()
    .collection("comunidades")
    .doc(uidComunidad)
    .collection("mensaje")
    .add({
        correo: correoUser,
        mensaje: message.value,
        fecha: date,
        idUsuario: idUser,
        meGusta: [],
      }).then((res) => {
        message.value = "";
        console.log("mensaje guarda canal");
      }).catch((error) => {
        console.log(error);
      });
};


export const getProfile = (idUserMessage, idDocument, photoDocument) => {
  firebase.firestore()
  .collection('perfil')
  .where('uid', '==', idUserMessage)
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((user) => {
      document.getElementById(photoDocument).src = `${user.data().photo}`;
      document.getElementById(idDocument).innerHTML = `${user.data().name}`;
    })
  })
}


// Funcion para cambiar el numero y el color del Like
const numberLikeUpdate = (idPost, newValue, oldValue) => {
  const numberLike = document.getElementById(`numberLike-${idPost}`);
  numberLike.innerHTML = String(newValue);
  const getHeart = document.getElementById(`heartColor-${idPost}`);
  if (newValue > oldValue) {
    getHeart.innerHTML = heartGreen;
  } else {
    getHeart.innerHTML = heartWhite;
  }
};

// Agregar el like
export const likeFb = (id, email, uidComunidad) => {
  firebase.firestore()
    .collection("comunidades")
    .doc(uidComunidad)
    .collection("mensaje")
    .doc(id)
    .get() //para obtener el dato
    .then((query) => {
      const message = query.data();
      // const oldValue = post.like.length;
      if (message.meGusta.includes(email)) {
        for (let i = 0; i < message.meGusta.length; i += 1) { // recorre el array del like
          if (message.meGusta[i] === email) { // verifica si ya el usuario está en el array
            message.meGusta.splice(i, 1); // sentencia para eliminar un elemento de un array
            firebase.firestore().collection("comunidades")
            .doc(uidComunidad)
            .collection("mensaje")
            .doc(id)
            .update({ // para actualizar el array
              meGusta: message.meGusta,
            });
          }
        }
      } else {
        message.meGusta.push(email); // incluyeme este usuario en este array
        firebase.firestore().collection("comunidades")
          .doc(uidComunidad)
          .collection("mensaje")
          .doc(id)
          .update({ // para actualizar el array
            meGusta: message.meGusta,
        });
      }
      // numberLikeUpdate(id, message.meGusta.length, oldValue);
    })
    .catch(() => {
    });
};
