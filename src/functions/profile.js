// Funcion que guarda el perfil del usuario en firebase
export const addCollectionProfile = (emailData, nameUser, photoUser, fullNameUser, cityUser, instagramUser, facebookUser, aboutMeUser) => {
    firebase.firestore().collection('perfil').add({
      email: emailData,
      name: nameUser,
      photo: photoUser  || '' ,
      fullName: fullNameUser,
      city: cityUser,
      instagram: instagramUser,
      facebook: facebookUser,
      aboutMe: aboutMeUser,
    }).then(() => {
      alert('perfil listo');
    }).catch(() => {
    });
  };
  