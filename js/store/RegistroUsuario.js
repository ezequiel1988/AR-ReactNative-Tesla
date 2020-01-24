import { observable, decorate } from "mobx";
import FetchUser from "../restProviders/peticiones";

export default class RegistroUsuario {
 birthdate;
 city;
 country;
 email;
 gender;
 language;
 name;
 neighborhood;
 password;
 phone;
 province;
 surname;
 username;
 fechaNac;
 fechaFormateada;
 emailError;
 passError;
 showPass;

  rest = new FetchUser();

  constructor() {
    this.fechaNac = "";
    this.email = "";
    this.password = "";
    this.gender = 1;
    this.name = "";
    this.birthdate = new Date();
    this.city = 0;
    this.country = 0;
    this.language = "";
    this.neighborhood = "";
    this.phone = "";
    this.province = 0;
    this.surname = "";
    this.username = "";
    this.emailError = [];
    this.passError = [];
    this.showPass = true;

  }
  postUser() {
    this.rest
      .PostUser(
        this.birthdate,
        this.email,
        this.gender,
        this.language,
        this.name,
        this.neighborhood,
        this.password,
        this.phone,
        this.surname,
        this.username
      )
      .then(res => res.data)
      .then(data => console.log(data))
      .catch(err => console.error(err));
  }

  validarEmail(text) {
    let resultado = [];
    var re = /(^$|^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(?:[a-zA-Z]{2}|com|org|net|edu|gov|mil|biz|info|mobi|name|aero|asia|jobs|museum)$)/;
    if (!re.test(text)) {
      resultado = ["*Formato de email incorrecto.", true];
    } else {
      resultado = [false];
    }
    this.emailError = resultado;
    if(this.email.length == 0){
      return this.emailError = []
    }
    return this.emailError;
  }

  validarPassword(text) {
    let resultado= []
    if (text.length < 8) {
      resultado = ["*Debe tener al menos 8 carácteres", true];
    } else {
      resultado = [false]
    }
    this.passError = resultado;
    return this.passError;
  }
}

decorate(RegistroUsuario, {
  birthdate: observable,
  city: observable,
  country: observable,
  email: observable,
  gender: observable,
  language: observable,
  name: observable,
  neighborhood: observable,
  password: observable,
  phone: observable,
  province: observable,
  surname: observable,
  username: observable,
  fechaNac: observable,
  fechaFormateada: observable,
  emailError: observable,
  passError: observable,
  showPass: observable
 
})