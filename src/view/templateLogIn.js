import login from "../functions/login.js";

export const logIn = () => {
    const divHome = document.createElement('div');
    const viewHome = ` 
     <div id="pagLogin" class="div-login">
        <div class="header-login"> 
            <button id="flechaVolver">
              <img src="../Imagenes/flecha.png" id="imgFlecha" alt="Logo">
            </button>
            <p class="header-login-p"> Iniciar Sesión </p> 
        </div>
        <div class = "body-login">
          <img src="../Imagenes/Tu-oportunidad-logo.png" id="logoLogin" alt="Logo"> 
          <form action="" id= "formLogin">
                <div class="label-login">
                  <label for="mailLogin" class="label-form">Email</label> 
                  <input type="mail" class="masked" id="mailLogin" alt="" value="" required>
                </div>
                <div class="input-Pwd">
                  <label for="pwd" class="label-form2">Contraseña</label>
                  <input type="password" id="pwd" class="masked2" name="password">
                  <button type="button" id="btnEye">
                      <img src="../Imagenes/eye-close.png" id="eye" alt="eye">
                  </button>
                </div>
          </form>
          <div id="menssageError">
          </div>
        </div>
        <div class="footer-login">
            <button type="button" id="btnLogin">
                <img src="../Imagenes/btnLogin.png" id="imgLogin" alt="eye">
            </button>
            <p class="footer-login-p">Al continuar acepta términos y condiciones </p>
        </div>
     </div>
      `;
    divHome.innerHTML = viewHome;
        let btnEye = divHome.querySelector("#btnEye");https://medium.com/@martin.sikora/node-js-websocket-simple-chat-tutorial-2def3a841b61


            btnEye.addEventListener("click", ()=>{
              login.ocultarPassword();
            });
        let btnLoginMail = divHome.querySelector("#btnLogin");
            btnLoginMail.addEventListener("click", ()=>{
                let email = document.getElementById('mailLogin').value;
                let pass = document.getElementById('pwd').value;
                    login.loginMail(email, pass);
            });
        let btnVolver = divHome.querySelector('#flechaVolver');
            btnVolver.addEventListener("click", () => {
                window.location = ('#/home'); 
            });    
      
    return divHome;
};
  