// Funcion que guarda el perfil del usuario en firebase
export const addCollectionProfile = (emailData, nameUser, photoUser, fullNameUser, cityUser, instagramUser, facebookUser, aboutMeUser, occupationUser) => {
    firebase.firestore().collection('perfil').add({
      email: emailData,
      name: nameUser,
      photo: photoUser  || '' ,
      fullName: fullNameUser,
      city: cityUser,
      occupacition: occupationUser,
      instagram: instagramUser,
      facebook: facebookUser,
      aboutMe: aboutMeUser,
    }).then(() => {
      alert('perfil listo');
    }).catch(() => {
    });
  };
  


// Editar el post en firebase
export const editProfileFirebase = (id, emailData, nameUser, photoUser, fullNameUser, cityUser, instagramUser, facebookUser, aboutMeUser, occupationUser) => {
  const PostRef = firebase.firestore().collection('perfil').doc(id);
  return PostRef.update({
    email: emailData,
    name: nameUser,
    photo: photoUser  || '' ,
    fullName: fullNameUser,
    city: cityUser,
    instagram: instagramUser,
    facebook: facebookUser,
    aboutMe: aboutMeUser,
    occupation: occupationUser,
  })
    .then(() => {
      console.log("perfil editado");
    })
    .catch(() => {
    });
};