import { observable, computed, decorate } from "mobx";


export default class UserModel {
@observable  birthdate;
@observable  city;
@observable  country;
@observable  email;
@observable  gender;
@observable  language;
@observable  name;
@observable  neighborhood;
@observable  password;
@observable  phone;
@observable  province;
@observable  surname;
@observable  username;

constructor(usuario) {

    if (usuario) {
        //Datos Generales
        this.email = usuario.email ? usuario.email : "";
        this.password = usuario.password ? usuario.password : "";
        this.gender = usuario.gender ? usuario.gender : 1;
        this.name = usuario.name ? usuario.name : "";
        this.birthdate = usuario.birthdate ? new Date(usuario.birthdate) : new Date();
        this.city = usuario.city ? usuario.city : "";
        this.country = usuario.country ? usuario.country : "";
        this.language = usuario.language ? usuario.language : "";
        this.neighborhood = usuario.neighborhood ? usuario.neighborhood : "";
        this.phone = usuario.phone ? usuario.phone : "";
        this.province = usuario.province ? usuario.province : "";
        this.surname = usuario.surname ? usuario.surname : "";
        this.username = usuario.username ? usuario.username : "";

    } else {

        this.email ="";
        this.password = "";
        this.gender =  1;
        this.name = "";
        this.birthdate = new Date();
        this.city = 0;
        this.country = 0;
        this.language = "";
        this.neighborhood = "";
        this.phone = "";
        this.province = 0;
        this.surname = "";
        this.username = "Pepe";

    }

}

//función que me permite setear la fecha a formato  dd/mm/aaaa
        // get FechaFormato() {
        //     console.log("log del FechaFormato", this.birthdate);
            
        // return FechasHelper.fechaAsStringSinHora(new Date(this.birthdate))
        // }
}


// decorate(UserModel, {
//     FechaFormato: computed
// })


