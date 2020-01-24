import { observable, decorate } from "mobx";
import FetchUser from "../restProviders/peticiones";


export default class LoginUsuarioStore {
   email;
   password;
   userToken;
   errorMessage;
   modalVisible;
   showPass;
  rest = new FetchUser();

  constructor() {
    this.email = "";
    this.password = "";
    this.errorMessage = "";
    this.userToken="";
    this.modalVisible = false;
    this.showPass = true
  }

  async loginUser() {
    try {
      const res = await this.rest.postLogin(this.email, this.password);
      console.log(res.data)
      if(!res.data.Error) {
      this.userToken = res.data.Content.userToken;
      } else {
        this.errorMessage = res.data.Error.message;
        this.modalVisible= !this.modalVisible;
        setTimeout(() => {
          this.modalVisible =!this.modalVisible 
        }, 2000)
    }
  } catch(e) {
    console.log(e);
    this.errorMessage = "Hubo un error al iniciar sesión"
  }
}
}

decorate(LoginUsuarioStore, {
   email:observable,
   password:observable,
   userToken:observable,
   errorMessage:observable,
   modalVisible:observable,
   showPass:observable,
   rest:observable
})