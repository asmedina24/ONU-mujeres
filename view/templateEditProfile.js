// <----------Contenido del Editar Perfil--------->
export const editProfile = () => {
    const divProfile = document.createElement('div');
    const viewProfile = /*html*/ `  
      <div class="edit-profile">
        <p>Crear perfil</p>
        <form id="profileForm" method="profile">
          <input type="file" id="myfile" name="myfile" accept="image/png, .jpeg, .jpg, image/gif" />
          <input type="text" placeholder="Nombre y Apellido" class="profile" id="nameProfile" />
          <input type="number" placeholder="Edad" class="profile" id="ageProfile">
          <input type="text" placeholder="Ciudad" class="profile" id="cityProfile"/>
          <input type="text" placeholder="Instagram" class="profile" id="instagramProfile"/>
          <input type="text" placeholder="Facebook" class="profile" id="facebookProfile"/>
          <input type="text" placeholder="Sobre mi" class="profile" id="aboutMeProfile"/>
          <button type="submit" id="btnProfile">Siguiente</button>
        </form>
      </div>
          `;
    divProfile.innerHTML = viewProfile;

    return divProfile;
  };
  