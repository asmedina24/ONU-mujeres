import { addCollectionProfile } from '../functions/profile.js'

// <----------Contenido del Editar Perfil--------->
export const editProfile = () => {
  console.log("Entro2");
  const currentUserData = firebase.auth().currentUser; // Datos del Usuario que accedió
  console.log("EDIT", currentUserData);
  const emailData = currentUserData.email; // Email del usuario que accedio

  const divEditProfile = document.createElement('div');
  const viewProfile = /*html*/ `  
    <div class="edit-profile">
      <img src="Imagenes/flecha-atras.svg" class="back"/>
      <p>Crear perfil</p>
      <form id="profileForm" method="profile">
        <div id="uploadedImage">
        </div>
        <input type="file" id="myfile" name="myfile" accept="image/png, .jpeg, .jpg, image/gif" />
        <div class="label-profile-name">
          <label for="nameProfile" class="label-name">Nombre</label> 
          <input type="text" class="profile" id="nameProfile" required/>
        </div>
        <input type="text" placeholder="Apellido" class="profile" id="fullNameProfile">
        <input type="text" placeholder="Ciudad" class="profile" id="cityProfile"/>
        <input type="text" placeholder="Instagram" class="profile" id="instagramProfile"/>
        <input type="text" placeholder="Facebook" class="profile" id="facebookProfile"/>
        <input type="text" placeholder="Sobre mi" class="profile" id="aboutMeProfile"/>
        <button type="submit" id="btnProfile">Siguiente</button>
      </form>
    </div>
        `;
  divEditProfile.innerHTML = viewProfile;

  const buttonEditProfile = divEditProfile.querySelector('#profileForm'); // Llamando al boton siguiente
  const uploadedImage = divEditProfile.querySelector('#uploadedImage');
  const image = divEditProfile.querySelector('input[type=file]');
  let imgb64;

  image.onchange = () => {
    const file = image.files[0];
    const reader = new FileReader();
    uploadedImage.innerHTML = '';
    // Recibira el valor Base64 cada vez que un usuario seleccione un archivo de su dispositivo
    reader.onloadend = () => { // El evento loadend es emitido cuando la carga se ha detenido
      imgb64 = reader.result;
      uploadedImage.innerHTML += `
      <img src="${imgb64}" class="file-post">
      `;
    };
    reader.readAsDataURL(file);
  };

  buttonEditProfile.addEventListener('submit', (e) => {
    e.preventDefault(); // cancela el evento, significa que la acción predeterminada no ocurrirá.
    const nameProfile = divEditProfile.querySelector('#nameProfile').value; // Contenido del textarea
    const fullNameProfile = divEditProfile.querySelector('#fullNameProfile').value;
    const cityProfile = divEditProfile.querySelector('#cityProfile').value;
    const instagramProfile = divEditProfile.querySelector('#instagramProfile').value;
    const facebookProfile = divEditProfile.querySelector('#facebookProfile').value;
    const aboutMeProfile = divEditProfile.querySelector('#aboutMeProfile').value;
    console.log(1,aboutMeProfile)
    console.log(444, imgb64);

    addCollectionProfile(emailData, nameProfile, imgb64, fullNameProfile, cityProfile, instagramProfile, facebookProfile, aboutMeProfile); //  Agrega el perfil a firebase
    window.history.back(); // se va una pagina atras (muro)
  });
  return divEditProfile;
};
