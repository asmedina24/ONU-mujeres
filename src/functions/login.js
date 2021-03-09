const login = {
  loginMail: (email, pass) =>{
    firebase.auth().signInWithEmailAndPassword(email, pass)
  .then((user) => {
    // Signed in
    // const mensaje = document.querySelector('#menssageError');
    // mensaje.innerHTML = `
    // <div class="mensaje-error">
      
    // </div>`;
    // ...
    firebase.firestore().collection('perfil').where('email', '==', email).get().then((user) => {
    if(!user.empty){
      window.location = ('#/wall');
    } else {
       window.location = ('#/editProfile');
    }
    }) 
  })
  .catch((error) => {
    console.log(error);
    const formLogin = document.getElementById('formLogin');
    formLogin.reset();
    const mensaje = document.querySelector('#menssageError');
    mensaje.innerHTML = `
    <div class="mensaje-error">
      <p>email o contraseña invalida</p>
    </div>`;

  });
  },  
  ocultarPassword: () =>{
    let a=document.querySelector("#pwd");
    let b=document.querySelector("#eye");
    if (a.type=="password")  {
    a.type="text";
    b.src="https://raw.githubusercontent.com/asmedina24/ONU-mujeres/main/src/Imagenes/eye-open.png";
    }
    else {
    a.type="password";
    b.src="https://raw.githubusercontent.com/asmedina24/ONU-mujeres/main/src/Imagenes/eye-close.png";
    } 
  },
  cerrarSesion: () => {
    firebase.auth().signOut().then(() => {
        // Sign-out successful.
        window.location = ('#/logIn');

        console.log("cerro sesion bien");
      }).catch((error) => {
        // An error happened.
      });
  },
};
export default login;