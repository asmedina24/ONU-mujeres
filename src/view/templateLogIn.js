import login from "../functions/login.js";

export const logIn = () => {
    const divHome = document.createElement('div');
    const viewHome = ` 
    <div class="header-login"> 
    <p> Iniciar Sesión </p> 
    <img src="../Imagenes/spain.png" id="bandera" alt="eye">
    </div>
    <div class = "body-login">
      <img src="../Imagenes/Tu-oportunidad-logo.png" id="logoLogin" alt="Logo"> 
      <div id="menssage_error">
      </div>
      <form action="" id= "formLogin">
          <label class="label-form">Email</label>
            <input type="mail" class="inputLogin" id="mailLogin" alt="" value="" required>
            <div class="input-Pwd">
              <input type="password" placeholder="Password" id="pwd" class="masked" name="password">
              <button type="button" id="btnEye">
                  <img src="../Imagenes/eye-close.png" id="eye" alt="eye">
              </button>
            </div>
      </form>
    </div>
    <div class="footer-login">
        <button type="button" id="btnLogin">
            <img src="../Imagenes/btnLogin.png" id="imgLogin" alt="eye">
        </button>
    </div>
      `;
    divHome.innerHTML = viewHome;
    let btnEye = divHome.querySelector("#btnEye");
    btnEye.addEventListener("click", ()=>{
       login.ocultarPassword();
    });
    
   
    return divHome;
};
  