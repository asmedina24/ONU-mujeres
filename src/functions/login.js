const login = {
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
  facebook: () =>{
   let provider = new firebase.auth.FacebookAuthProvider(); 
       provider.addScope('public_profile' ); 
       firebase.auth().signInWithPopup(provider)
            .then((result) => {
               /** @type {firebase.auth.OAuthCredential} */
               var credential = result.credential;

               // The signed-in user info.
               var user = result.user;

               // This gives you a Facebook Access Token. You can use it to access the Facebook API.
               var accessToken = credential.accessToken;

               // ...
           })
           .catch((error) => {
               // Handle Errors here.
               var errorCode = error.code;
               var errorMessage = error.message;
               // The email of the user's account used.
               var email = error.email;
               // The firebase.auth.AuthCredential type that was used.
               var credential = error.credential;

               // ...
           });
  },   
};
export default login;