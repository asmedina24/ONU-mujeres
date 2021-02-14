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


// Funcion obtener la foto y el nombre de la persona que posteo 
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
const numberLikeUpdate = (id, newValue, oldValue) => {
  const likeIcon = document.getElementById(`iconLike-${id}`)
  const likeButton = document.getElementById(`buttonLike-${id}`)
  console.log('likeIcon', likeIcon)
  likeButton.innerHTML = `<i class="fas fa-thumbs-up "></i>  Me gusta ${newValue}`;
  const getHeart = document.getElementById(`heartColor-${id}`);
  if (newValue > oldValue) {
    likeButton.style.color = '#009DDC';
  } else {
    likeButton.style.color = '#212529';
  }
};

// Agregar el like
export const likeFb = (id, email, uidComunidad) => {
  firebase.firestore()
    .collection("comunidades")
    .doc(uidComunidad)
    .collection("mensaje")
    .doc(id)
    .get()
    .then((query) => {
      const message = query.data();
      const oldValue = message.meGusta.length;
      if (message.meGusta.includes(email)) {
        for (let i = 0; i < message.meGusta.length; i += 1) { // recorre el array del like
          if (message.meGusta[i] === email) { // verifica si ya el usuario está en el array
            message.meGusta.splice(i, 1); // sentencia para eliminar un elemento de un array
            firebase.firestore()
            .collection("comunidades")
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
      numberLikeUpdate(id, message.meGusta.length, oldValue);
    })
    .catch(() => {
    });
};
