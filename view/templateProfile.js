
// <----------Contenido del Editar Perfil--------->
export const profile = () => {
  const divProfile = document.createElement('div');
  const viewProfile = /*html*/ ` 
  <div class="profile-div"> 
    <p>Crear perfil</p>
    <p>Luzciel Montesinos</p>
    <p>Edad 26</p>
    <p>Santiago</p>
    <p>Instagram</p>
    <p>Facebook</p>
    <p>Sobre mi</p>
    <a href="#/editProfile"><button>Editar perfil</button></a>
  </div> 
    `;
  divProfile.innerHTML = viewProfile;

  console.log(2, "entro al perfil");
  return divProfile;
};
