import { addCollectionProfile, editProfileFirebase } from '../functions/profile.js'

// <----------Contenido del Editar Perfil--------->
export const editProfile = () => {
  const currentUserData = firebase.auth().currentUser; // Datos del Usuario que accedió
  const emailData = currentUserData.email; // Email del usuario que accedio
  const idData = currentUserData.uid;  // ID del usuario que accedio

  const divEditProfile = document.createElement('div');
  const viewProfile = /*html*/ `  
    <div class="edit-profile">
      <img src="Imagenes/flecha-atras.svg" class="back"/>
      <p class="profile-title">Crear perfil</p>
      <div class="edit-profile-form">
      </div>
    </div>  
    `
  divEditProfile.innerHTML = viewProfile;

  firebase.firestore().collection('perfil').where('email', '==', emailData).get()
  .then((querySnapshot) => {
    let nameHtml = '';
    let fullnameHtml = '';
    let cityHTML = '';
    let occupation = '';
    let instagram = '';
    let facebook = '';
    let aboutMe = '';
    let photo = `<img src="Imagenes/profile-image.svg" class="img-post" id="filePost"></img>`
    let id;
  
    querySnapshot.forEach((doc) => {
      nameHtml = `${doc.data().name}`;
      fullnameHtml = `${doc.data().fullName}`;
      cityHTML = `${doc.data().city}`;
      occupation = `${doc.data().occupation}`;
      instagram = `${doc.data().instagram}`;
      facebook = `${doc.data().facebook}`;
      aboutMe = `${doc.data().aboutMe}`;
      if(doc.data().photo) {
        photo = `<img src="${doc.data().photo}" class="img-post" id="imgPost">`; 
      }
      id = `${doc.id}`;
    })

   
    const editProfileForm = divEditProfile.querySelector('.edit-profile-form')
    editProfileForm.innerHTML = /*html*/ `  
        <form id="profileForm" method="profile">
          <div id="uploadedImage">
            ${photo}
          </div>
          <div class="image-upload">
            <label for="myfile">
              <img src="Imagenes/add-photo.svg"/>
            </label>
            <input type="file" id="myfile" name="myfile" accept="image/png, .jpeg, .jpg, image/gif" />
          </div>
          <div class="label-profile">
            <label for="nameProfile" class="label-name">Nombre</label> 
            <input type="text" class="profile" id="nameProfile" value="${nameHtml}" required/>
          </div>
          <div class="label-profile">
            <label for="fullNameProfile" class="label-full-name">Apellido</label> 
            <input type="text" class="profile" id="fullNameProfile" value="${fullnameHtml}" required/>
          </div>
          <div class="label-profile">
            <label for="cityProfile" class="label-city">Ciudad</label> 
            <input type="text" class="profile" id="cityProfile" value="${cityHTML}" required />
          </div>
          <div class="label-profile">
            <label for="mailLogin" class="label-occupation">Ocupación</label> 
            <input type="text" class="profile" id="occupationProfile" value="${occupation}" />
          </div>
          <div class="label-profile">
            <label for="instagramProfile" class="label-instagram">Instagram</label> 
            <input type="text" class="profile" id="instagramProfile" value="${instagram}" />
            <p class="inf-input-instagram">Escribe tu usuario de Instagram</p>
          </div>
          <div class="label-profile">
            <label for="facebookProfile" class="label-facebook">Facebook</label> 
            <input type="text" class="profile" id="facebookProfile" value="${facebook}" />
            <p class="inf-input-facebook">Escribe tu usuario de Facebook</p>
          </div>
          <div class="label-profile">
            <label for="aboutMeProfile" class="label-aboutMe">Sobre mi</label> 
            <input type="text" class="profile" id="aboutMeProfile"value="${aboutMe}" />
            <p class="inf-input-me">Cuentanos algo sobre ti</p>
          </div>
            <button type="submit" class="btn-profile" id="btnProfile">Siguiente</button>
        </form>
          `;

  const buttonEditProfile = divEditProfile.querySelector('#profileForm'); // Llamando al boton siguiente
  const uploadedImage = divEditProfile.querySelector('.img-post');
  const backArrow = divEditProfile.querySelector('.back');
  const image = divEditProfile.querySelector('input[type=file]');
  let imgb64 = "";

  image.onchange = () => {
    const file = image.files[0];
    const reader = new FileReader();
    // uploadedImage.src= '';
    // Recibira el valor Base64 cada vez que un usuario seleccione un archivo de su dispositivo
    reader.onloadend = () => { // El evento loadend es emitido cuando la carga se ha detenido
      imgb64 = reader.result;
      uploadedImage.src= imgb64;
    };
    reader.readAsDataURL(file);
  };

  backArrow.addEventListener('click',() => {
    window.history.back();
  });


  buttonEditProfile.addEventListener('submit', (e) => {
    e.preventDefault(); // cancela el evento, significa que la acción predeterminada no ocurrirá.
    const nameProfile = divEditProfile.querySelector('#nameProfile').value;
    const fullNameProfile = divEditProfile.querySelector('#fullNameProfile').value;
    const cityProfile = divEditProfile.querySelector('#cityProfile').value;
    const instagramProfile = divEditProfile.querySelector('#instagramProfile').value;
    const facebookProfile = divEditProfile.querySelector('#facebookProfile').value;
    const aboutMeProfile = divEditProfile.querySelector('#aboutMeProfile').value;
    const occupationProfile = divEditProfile.querySelector('#occupationProfile').value;

    if(!querySnapshot.empty){
      editProfileFirebase(id, emailData, nameProfile, imgb64, fullNameProfile, cityProfile, instagramProfile, facebookProfile, aboutMeProfile, occupationProfile); //Edita el perfil en firebase
    } else {
       addCollectionProfile(idData, emailData, nameProfile, imgb64, fullNameProfile, cityProfile, instagramProfile, facebookProfile, aboutMeProfile, occupationProfile); //  Agrega el perfil a firebase
    }

    window.location = ('#/profile');

  });

  });
  return divEditProfile;
};

