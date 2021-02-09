const comunidad = {
  mostrarComunidades: () => {
    const bodyComunidades = document.querySelector("#bodyComunidades");
    firebase.firestore()
      .collection("comunidades")
      .orderBy("fecha", "desc")
      .onSnapshot((query) => {
        bodyComunidades.innerHTML = "";
        query.forEach((doc) => {
          console.log(doc.id);
          bodyComunidades.innerHTML += /*html*/`         
            <a href="#/Canal?${doc.id}" class="list-group-item list-group-item-action ">
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1 ">${doc.data().nombreComunidad}</h5>
              <small>${moment(
                doc.data().fecha,
                "DD/MM/YYYY h:mm:ss"
              ).fromNow(true)}</small>
              
            </div>
            <p class="mb-1">${doc.data().descripcion}</p>
            </a>`;
            
          bodyComunidades.scrollTop = bodyComunidades.scrollHeight;
        });
      });
  },
  buscarComunidades: () => {
    const bodyComunidades = document.querySelector("#bodyComunidades");
    firebase
      .firestore()
      .collection("comunidades")
      .onSnapshot((query) => {
        bodyComunidades.innerHTML = "";
        query.forEach((doc) => {
          console.log(doc.id);
          bodyComunidades.innerHTML += /*html*/`     
            <a href="#/Canal?${doc.id}" class="list-group-item list-group-item-action ">
              <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1 ">${doc.data().nombreComunidad}</h5>
                <small>${doc.data().fecha}</small>
              </div>
              <p class="mb-1">${doc.data().descripcion}</p>
            </a>`;
          bodyComunidades.scrollTop = bodyComunidades.scrollHeight;
        });
      });
  },

  // mostrarCanal: (uidComunidad) => {
  //   //console.log(uidComunidad);
  //   const nombreCanal = document.querySelector("#nombreCanal");
  //   const bodyCanal = document.querySelector("#bodyCanal");

  //   firebase
  //     .firestore()
  //     .collection(`comunidades`)
  //     .doc(uidComunidad)
  //     .get() //para obtener el dato
  //     .then((querySnapshot) => {
  //       nombreCanal.innerHTML = querySnapshot.data().nombreComunidad;
  //     });

  //   firebase
  //     .firestore()
  //     .collection(`comunidades/${uidComunidad}/mensaje`)
  //     .onSnapshot((query) => {
  //       bodyCanal.innerHTML = "";
  //       query.forEach((doc) => {
  //         bodyCanal.innerHTML += /*html*/`
  //           <div class="list-group-item  ">
  //             <div class="d-flex w-100 justify-content-between">
  //               <h5 class="mb-1 ">${doc.data().usuario}</h5>
  //               <small>${doc.data().fecha}</small>
  //             </div>
  //             <p class="mb-1">${doc.data().mensaje}</p>
  //             <div class="d-flex justify-content-around">
  //             <button class="btn"><i class="fas fa-thumbs-up "></i> Me gusta</button>
  //             <button class="btn" ><i class="fas fa-comment-alt"></i> Responder</div></button>
  //           </div>   
       
  //       `;
  //       });
  //     });
  // },
  //guardamos la comunidad
  guardarComunidad: (name, description, estado, fecha) => {
    console.log(name.value, description.value, estado, fecha);

    firebase
      .firestore()
      .collection("comunidades")
      .add({
        descripcion: description.value,
        estado: estado,
        nombreComunidad: name.value,
        fecha: fecha,
      })
      .then((res) => {
        console.log("mensaje guardaxdfgshrdyrhdo");
      })
      .catch((e) => {
        console.log(e);
      });
  },

  // //guardamos el mensaje
  // saveMessage: (usuario, mensaje, fecha, uidComunidad) => {
  //   firebase
  //     .firestore()
  //     .collection("comunidades")
  //     .doc(uidComunidad)
  //     .collection("mensaje")
  //     .add({
  //       usuario: usuario,
  //       mensaje: mensaje.value,
  //       fecha: fecha,
  //     })
  //     .then((res) => {
  //       mensaje.value = "";
  //       console.log("mensaje guarda canal");
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //     });
  // },
};
export default comunidad;
