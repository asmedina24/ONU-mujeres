import { db } from '../../../firebaseConfig.js';


export const addCollectionProfileX = (name, photoUser, ageUser, cityUser, instagramUser, facebookUser, aboutMeUser) => {
    db.collection('perfil').add({
      // email: emailData,
      fullName: name,
      photo: photoUser,
      age: ageUser,
      city: cityUser,
      instagram: instagramUser,
      facebook: facebookUser,
      aboutMe: aboutMeUser,
    }).then(() => {
      alert('perfil listo');
    }).catch(() => {
    });
  };
  