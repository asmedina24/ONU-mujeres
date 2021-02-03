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
    window.location = ('#/wall');
  })
  .catch((error) => {
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
    b.src="../Imagenes/eye-open.png";
    }
    else {
    a.type="password";
    b.src="../Imagenes/eye-close.png";
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