// <----------Contenido del Editar Perfil--------->
export const profile = () => {
  const currentUserData = firebase.auth().currentUser; // Datos del Usuario que accedió
  const emailData = currentUserData.email; // Email del usuario que accedio
  
  const divProfile = document.createElement('div');
  const viewProfile = /*html*/ ` 
    <div class="profile-div"> 
      <img src="Imagenes/flecha-atras.svg" class="back"/>   
      <p class="createProfile">Mi perfil</p>
      <div id="profileData"> 
      </div>
        <a href="#/editProfile"><button class="button-edit-profile">Editar perfil</button></a>
    </div> 
    `;
  divProfile.innerHTML = viewProfile;

  const profileData = divProfile.querySelector('#profileData'); // Llamando al div donde se imprimirán los post
  firebase.firestore().collection('perfil').where('email', '==', emailData).get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      const profilePhoto = `<img src="${doc.data().photo}" class="img-post"></img>`;
      profileData.innerHTML += ` 
        <div class="profile-data-user"> 
        <div class="profile-photo">
        ${doc.data().photo === undefined ? '' : profilePhoto}
        </div>
          <p class="name-profile">${doc.data().name} ${doc.data().fullName}</p>
          <p class="information-profile">${doc.data().city}</p>
          <p class="information-profile">${doc.data().instagram}</p>
          <p class="information-profile">${doc.data().facebook}</p>
          <p class="information-profile">${doc.data().aboutMe}</p>
        </div> 
    `;
    });
  });

  return divProfile;
};
