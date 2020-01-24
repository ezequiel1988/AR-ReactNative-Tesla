import axios from 'axios'
import { observable } from 'mobx';

export default class FetchUser  {

@observable headers;
  constructor() {
    
     this.headers = {"Content-Type": "aplication/json, charset=utf-8", 
    "Authentication_app":"eBOuf7s3WSYa67qJj6tbT6d5n"};
 
     this.positions = {
       latitude: -30.90221835,
       longitude: -64.60590831
     }
 
    }

  
  PostUser( birthdate,
        email,
        gender,
        language,
        name,
        neighborhood,
        password,
        phone,
        surname,
        username) {
    return axios.post("https://api.kchapp.com:10443/v1/users/register",
    { birthdate,
        email,
        gender,
        language,
        name,
        neighborhood,
        password,
        phone,
        surname,
        username}, 
    {"headers": this.headers})

}

postLogin (email, password) {
  return axios.post("https://api.kchapp.com:10443/v1/users/login",{email, password}, {"headers": this.headers})
}

getAssets(token) {
  return axios.get("https://api.kchapp.com:10443/v1/coupons/assets/preload", {params:{ latitude: -30.90221835,
  longitude: -64.60590831}, "headers": {"Content-Type": "aplication/json, charset=utf-8", 
  "Authentication": token,
  "Authentication_app":"eBOuf7s3WSYa67qJj6tbT6d5n"}})
 
 }
 getCupons(token) {
  return axios.get("https://api.kchapp.com:10443/v1/coupons", {params:{ latitude: -30.90221835,
  longitude: -64.60590831}, "headers": {"Content-Type": "aplication/json, charset=utf-8", 
  "Authentication": token,
  "Authentication_app":"eBOuf7s3WSYa67qJj6tbT6d5n"}})
 
 }


  /*
 getAssets(token, lat, long) {
  return axios.get("https://api.kchapp.com:10443/v1/coupons/assets/preload", {params:{ latitude: lat,
  longitude: long}, "headers": {"Content-Type": "aplication/json, charset=utf-8", 
  "Authentication": token,
  "Authentication_app":"eBOuf7s3WSYa67qJj6tbT6d5n"}})
 
 }
 getCupons(token, lat, long) {
  return axios.get("https://api.kchapp.com:10443/v1/coupons", {params:{ latitude: lat,
  longitude: long}, "headers": {"Content-Type": "aplication/json, charset=utf-8", 
  "Authentication": token,
  "Authentication_app":"eBOuf7s3WSYa67qJj6tbT6d5n"}})
 
 }
 */

 atraparObjeto(instanceId, token) {
  return axios.post(`https://api.kchapp.com:10443/v1/coupons/${instanceId}/catch`,{instanceId}, {"headers": {"Content-Type": "aplication/json, charset=utf-8", 
  "Authentication": token, "Authentication_app":"eBOuf7s3WSYa67qJj6tbT6d5n"}})
 }

 atraparObjeto1(instanceId, token) {
   console.log("log de peticiones.js", instanceId, token)
  return axios.post(`http://e228572f.ngrok.io/v1/coupons/${instanceId}/catch`,{instanceId}, {"headers": {"Content-Type": "aplication/json, charset=utf-8", 
  "Authentication": token, "Authentication_app":"eBOuf7s3WSYa67qJj6tbT6d5n"}})
 } 

 obtenerMochila(token) {
  return axios.get("https://api.kchapp.com:10443/v1/coupons/assets/preload", {"headers": {"Content-Type": "aplication/json, charset=utf-8", 
  "Authentication": token, "Authentication_app":"eBOuf7s3WSYa67qJj6tbT6d5n"}})
 }

 obtenerInfoDelModelo(instanceId, token) {
  return axios.get(`https://api.kchapp.com:10443/v1/users/backpacks/vouchers/${instanceId}`, {"headers": {"Content-Type": "aplication/json, charset=utf-8", 
  "Authentication": token, "Authentication_app":"eBOuf7s3WSYa67qJj6tbT6d5n"}})
 }

 CodigoQR(instanceId, code, token) {
  return axios.get(`https://api.kchapp.com:10443/v1/coupons/instances/${instanceId}/codes/${code}`, {"headers": {"Content-Type": "aplication/json, charset=utf-8", 
  "Authentication": token, "Authentication_app":"eBOuf7s3WSYa67qJj6tbT6d5n"}})
 }

 deleteObjeto (instanceId, token) {
  return axios.delete(`https://api.kchapp.com:10443/v1/users/backpacks/vouchers/${instanceId}`, {"headers": {"Content-Type": "aplication/json, charset=utf-8", 
  "Authentication": token, "Authentication_app":"eBOuf7s3WSYa67qJj6tbT6d5n"}})
 }

 getInfoMochila(token) {
  return axios.get("https://api.kchapp.com:10443/v1/users/backpacks/vouchers", {"headers": {"Content-Type": "aplication/json, charset=utf-8", 
  "Authentication": token, "Authentication_app":"eBOuf7s3WSYa67qJj6tbT6d5n"}})
 }

}
