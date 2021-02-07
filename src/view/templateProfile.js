// <----------Datos del Perfil--------->
export const profile = () => {
  const currentUserData = firebase.auth().currentUser; // Datos del Usuario que accedió
  const emailData = currentUserData.email; // Email del usuario que accedio

  const divProfile = document.createElement('div');
  const viewProfile = /*html*/ ` 
    <div class="profile-div"> 
      <img src="Imagenes/flecha-atras.svg" class="back"/>   
      <p class="createProfile">Mi perfil</p>
      <div id="profileData"> 
        <div id="loader"></div>
      </div>
    </div> 
    `;
  divProfile.innerHTML = viewProfile;
  
  const loarde = divProfile.querySelector('#loader');
  const profileData = divProfile.querySelector('#profileData'); // Llamando al div donde se imprimirán los post
  firebase.firestore().collection('perfil').where('email', '==', emailData).get().then((querySnapshot) => {
    // console.log(2222, querySnapshot)
    querySnapshot.forEach((doc) => {
      loarde.remove(); 
      const profilePhotoIcon = `<img src="Imagenes/icono-avatar-photo.png" id="filePost"></img>`
      const profilePhoto = `<img src="${doc.data().photo}" class="img-post"></img>`;
      const instagramUser = `<p>Instagram</p>
      <p class="information-profile-instagram">${doc.data().instagram}</p>`;
      const facebookUser = `<p>Facebook</p>
      <p class="information-profile-facebook">${doc.data().facebook}</p>`;

      profileData.innerHTML += ` 
      <div class="profile-data-user"> 
        <div class="profile-photo">
          ${doc.data().photo === '' ? profilePhotoIcon : profilePhoto}
        </div>
        <p class="name-profile">${doc.data().name} ${doc.data().fullName}</p>
        <p class="information-profile">${doc.data().occupacition}</p>
        <p class="information-profile">${doc.data().city}</p>
        <div class="instagram-user">
        ${doc.data().instagram == "" ? "" : instagramUser}
        </div>
        <div class="facebook-user">
          ${doc.data().facebook == "" ? "" : facebookUser}
        </div>
        <p class="information-profile">${doc.data().aboutMe}</p>
      </div> 
      <div class="form-button">
        <a href="#/editProfile"> 
          <button class="btn-profile-edit">Editar</button>
        </a> 
        <a href="#/wall">
         <button class="btn-profile-save">Guardar</button>
        </a>
      </div>
    `;
    });
     
    const backArrow = divProfile.querySelector('.back');
    backArrow.addEventListener('click',() => {
      window.history.back();
    });

  });

  return divProfile;
};
