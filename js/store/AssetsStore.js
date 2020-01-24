import { observable, decorate } from "mobx";
import FetchUser from "../restProviders/peticiones";
import RNFS from "react-native-fs";
import AsyncStorage from "@react-native-community/async-storage";
import { unzip } from "react-native-zip-archive";
import RNFetchBlob from "rn-fetch-blob";
import Geolocation from 'react-native-geolocation-service';
import {PermissionsAndroid} from 'react-native';
import { NavigationActions } from 'react-navigation';



class AssetsStore {
 
  rest = new FetchUser();

  constructor() {
    this.number = 0;
    this.timer = this.cuponesCadaMinuto();
    this.files = [];
    this.urlZipyMd5 = [];
    this.zip = null;
    this.cupones = [];
    this.md5Cupons = [];
    this.md5Zips = [];
    this.nameCupones = [];
    this.resName = [];
    this.resultado = [];
    this.currentUser = null;
    this.results = null;
    this.md5AComparar = null;
    this.mtl = "";
    this.png1 = "";
    this.png2 = "";
    this.png3 = "";
    this.isCharged = true;
    this.lat = null;
    this.long = null;
    this.latFinal = null;
    this.longFinal = null;
    this.email = "mama@emqil.com";
    this.password = "0567891234";
    this.errorMessage = "";
    this.userToken= "dhfskjdfk";
    this.modalVisible = false;
    this.showPass = true;
    this.mostrarHomeUsuario = true;
    this._navigator = null;
    this.urisMochila = [];
    this.cupons= null;
    this.infoModelo3d = "";
    this.zipQR = [];
    this.objetoAtrapado = "";
    this.infoMochila = [];
    this.mostrarMochila = 3;
    this.loginGuardado;
    this.mostrarvoucherImg = true;
    this.showQR = false;
    this.mostrarViro = false;
    this.showMeViro = false;
    this.otroCupon = [];
    this.abrirModal= false;
    //this.permisoDeUsoDeLocacion();
    //this.obtenerInfoDeMochila();
    
  }


   loginUser() {
      return this.rest.postLogin(this.email, this.password);      
}

cuponesCadaMinuto() {
  setInterval(()=>{
    this.obtenerCupones();
  },60000)
}

  async getZip() {
    try {
      this.zip = await this.rest.getAssets(this.userToken);

      //filtra las url de los zips
      this.zip.data.Content.filter(el => {
        this.urlZipyMd5.push({
          md5: el.md5,
          url: el.zipFile
        });
        return this.urlZipyMd5;
      });
      this.getFiles();
      this.comenzarDescargaZipyMd5();

      //filtra su md5 para comparar y llama a obtenerCupones
      this.zip.data.Content.filter(zip => {
        this.md5Zips.push(zip.md5);
        return this.md5Zips;
      });
    } catch (err) {
      console.log(err);
    }
  }

  async obtenerCupones() {
    try {
      this.cupons = await this.rest.getCupons(this.userToken);
      var route = `${RNFS.DocumentDirectoryPath}`;
      setTimeout(()=> {
        RNFS.readDir(route).then(result => this.results = result)
      }, 20000)

      //Filtro los nombres de los cupones
      if(this.nameCupones.length == this.cupons.data.Content.length) {
        return null
      } else {
        this.nameCupones = [];
        this.cupons.data.Content.filter(element => this.nameCupones.push(element.name)); 
        this.mostrarHomeUsuario = false;
        setTimeout(() => {
          this.showMeViro = true
        }, 3000);
      }

      //filtro la propiedad Content que contiene el md5
      this.cupons.data.Content.filter(elem => {
        this.cupones.push(elem.object);
        return this.cupones;
      });

     

    } catch (err) {
      console.log(err);
    }
  }

  async atraparObj(instanceId) {
    //solo atrapa el objeto y se descuenta uno en la mochila
    
    try {
     this.objetoAtrapado = await this.rest.atraparObjeto(instanceId, this.userToken);    
     this.obtenerInfoDeMochila();
   
    } catch (e) {
      console.error(e)
    }
  }

  async infoVoucherModelo3d(instanceId) {

    try {

      this.infoModelo3d = await this.rest.obtenerInfoDelModelo(instanceId, this.userToken);
      this.mostrarvoucherImg = false;

      return (this.infoModelo3d)
    } catch (e) {

      console.warn(e)

    }
  }

  async obtenerImagenQR(instanceId, code) {

    try {
      
      let dirs = RNFetchBlob.fs.dirs;
      RNFetchBlob.config({
        path: dirs.DocumentDir + `${instanceId}.png`
      })
        .fetch("GET", `https://api.kchapp.com:10443/v1/coupons/instances/${instanceId}/codes/${code}`, {
          "Authentication": this.userToken,
          "Authentication_app":"eBOuf7s3WSYa67qJj6tbT6d5n"
        })
        .then(() => {
          this.showQR = true;
          
        })
        .catch(e => console.log(e));
      
    } catch (e) {

      console.warn(e)

    }
  }

  async borrarObjDeMochila(instanceId) {
    try {
      const res = await this.rest.deleteObjeto(instanceId, this.userToken)
      this.obtenerInfoDeMochila();    
    } catch (e) {
      console.warn(e)
    }
  }

  async obtenerInfoDeMochila () {

    try {
      
      this.infoMochila = await this.rest.getInfoMochila(this.userToken)
      var route = `${RNFS.DocumentDirectoryPath}`;
      const res = await RNFS.readDir(route);
      console.log("log que obtiene info de la mochila", this.infoMochila.data.Content == undefined ? "no hay nada en la mochila" : this.infoMochila.data.Content)

      if(this.infoMochila.data.Content == undefined) {
        this.mostrarMochila = 3;
      } else {
      
      this.urisMochila = [];
      this.infoMochila.data.Content.forEach(elInfoMochila => {
      res.forEach(elStorage => {
          if(elStorage.name == elInfoMochila.filename) {
           this.infoVoucherModelo3d(elInfoMochila.id)
           .then(respuesta => {
            //  let parts = respuesta.data.Content.catchDate.split('/')
            //  let a = new Date(parts[2], parts[1]-1, parts[0])
            //  console.log(a.getDate() < new Date().getDate() ? "hola mundo" : "hola ñoño", a.getDate(), new Date().getDate())
              this.urisMochila.push({instanceId:elInfoMochila.id , uri:`file:///data/data/com.viro/files/${elInfoMochila.filename}/go/src/mochila_icono.png`, voucherImg:`file:///data/data/com.viro/files/${elInfoMochila.filename}/go/src/voucher_top.png`, name:respuesta.data.Content.name, catchDate:respuesta.data.Content.catchDate})
            })
          }
        })
      })
      this.mostrarMochila = 2;
    }
    
    
    } catch (e) {
      console.log(e)
    }
  }

 async guardarSesionEnStorage() {
  try {
    await AsyncStorage.setItem(
      "@Sesion_user",
      JSON.stringify(this.userToken)
    );

  } catch (e) {
    console.log(e)
  }
 }

 async preguntarSesionEstorage () {
   try {
    this.loginGuardado = await AsyncStorage.getItem("@Sesion_user");
    console.log(JSON.parse(loginGuardado),"sin parsear: ",loginGuardado)
    return JSON.parse(loginGuardado);

   } catch (e) {
     console.log(e)
   }
 }
//====================//Lógica de la geolocalización//==================//

// locacionInicial (){
//   Geolocation.getCurrentPosition(info =>{
//     this.longInicial = info.coords.longitude;
//     this.latInicial = info.coords.latitude;
//     console.log(`latInicial: ${this.latInicial}, longInicial: ${this.longInicial}`)
//     })
// }

observaCambiosDePosicion() {
 Geolocation.watchPosition(
        (position) => {
          console.log("La distancia es mayor a 5 mts")
          this.long = position.coords.longitude;
          this.lat = position.coords.latitude;
          console.log(`lat: ${position.coords.latitude}, long: ${position.coords.longitude}`)

        //   let distanciaObtenida = null;
        //     this.longFinal = position.coords.longitude;
        //     this.latFinal = position.coords.latitude;
        //     console.log(`lat: ${position.coords.latitude}, long: ${position.coords.longitude}`)
        //    distanciaObtenida = this.getMetros(this.latInicial, this.longInicial, this.latFinal, this.longFinal);
        //    if(distanciaObtenida > 5) {
        //     this.obtenerCupones()
        //  }
        },
        (error) => {
            console.log(error.code, error.message);
        },
        { enableHighAccuracy: true, interval: 120000, distanceFilter: 100 }
    )
  }

getMetros(latInicial,lonInicial,latFinal,lonFinal)
 {
 rad = function(x) {return x*Math.PI/180;}
var R = 6378.137; //Radio de la tierra en km
 var dLat = rad( latFinal - latInicial );
 var dLong = rad( lonFinal - lonInicial );
var a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(rad(latInicial)) * Math.cos(rad(latFinal)) * Math.sin(dLong/2) * Math.sin(dLong/2);
 var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
 var d = R * c;
 let mts = d.toFixed(3) * 1000
 console.log(`la diferencia es de ${mts} metros`)   
return mts; //Retorna tres decimales
 }


 async  permisoDeUsoDeLocacion() {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Permiso de uso',
        message:
          'Kchapp necesita acceso a tú posición',
        buttonNeutral: 'Preguntar mas tarde',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      this.observaCambiosDePosicion();
    } else {
      console.log('Permiso denegado');
    }
  } catch (err) {
    console.warn(err);
  }
}

 //=======================================================//
  getFiles() {
    /*
    Función que muestra la cantidad de archivos que hay en el lugar que se le indique mediante el path.
    Pregunta si hay algun archivo descargado, si no lo hay lo descarga, si lo hay
    compara para ver si hay algun md5 distinto
    */
    var route = `${RNFS.DocumentDirectoryPath}`;
    RNFS.readDir(route).then(result => {
      //console.log('GOT RESULT', result);
      this.results = result;
      if (this.results.length === 0) {
        this.zip.data.Content.map((el, index) => {
          this.DownloadFile(
            el.zipFile,
            el.name,
            index,
            this.zip.data.Content.length
          );
        });
      } else {
        this.FiltraYComparaNombre();
      }
    });
  }

  FiltraYComparaNombre() {
    /*
    Filtra el nombre que está alojado en el localstorage que cohinciden con los nombre de los zip de preload.
    Luego a esos nombres (alojados en el localstorage) los compara con el endpoint de preload.
    Si no hay cohincidencia llama a this.DownloadFile() y le pasa los parametros requeridos
    */

    let filtro = [];

    this.results.filter(el => {
      this.zip.data.Content.forEach(elZips => {
        if ((el.name === elZips.name) == true) {
          filtro.push(el.name);
        }
      });
    });

    this.zip.data.Content.forEach((el, index) => {
      if (filtro.indexOf(el.name) == -1) {
        console.log(
          `no hubo cohincidencia en el elemento: ${el.name}, del indice: ${index} del filtro`
        );
        this.DownloadFile(
          el.zipFile,
          el.name,
          index,
          this.zip.data.Content.length
        );
      }
    });
  }

  //======================================================================//

  //Lógica que compara los zips del localstorage con los del enpoints
  comenzarDescargaZipyMd5 = async () => {
    //Guarda los el url y md5 de cada zip descargado
    try {
      /*
      guarda en @MyApp_user el array de url y md5 de this.urlZipyMd5,
      luego parsea para convertirlos en json,
      llama a this.zip donde estaba guardado el json descargado de preload
      busca que no haya cohincidiencia, si la hay llama a this.DownloadFile
      */
      await AsyncStorage.setItem(
        "@MyApp_user",
        JSON.stringify(this.urlZipyMd5)
      );
      this.currentUser = await AsyncStorage.getItem("@MyApp_user");
      JSON.parse(this.currentUser);
      this.zip.data.Content.forEach((el, index) => {
        if (this.currentUser.indexOf(el.md5) === -1) {
          console.log(
            `no hubo cohincidencia en el elemento: ${el.md5}, del indice: ${index} del currentUser`
          );
          this.DownloadFile(
            el.zipFile,
            el.name,
            index,
            this.zip.data.Content.length
          );
        }
      });
    } catch (e) {
      console.log(e);
    }
  };

  //==============================//

  //Lógica para descargar y descormprimir
  async descomprimirZips(name, index, length) {
    let indice = (index += 1);
    //Esta función descomprime el archivo en la ruta del targetPath
    let sourcePath = `/data/data/com.viro/files/${name}.zip`;
    let targetPath = `/data/data/com.viro/files/${name}`;

    try {
      /*
          si el indice es igual a 7 y a length, entonces quiere decir que pudo
          recibir y descomprimir todos los zip enviados
          */
      const res = await unzip(sourcePath, targetPath);
      console.log(`Archivo descomprimido en el path: ${res}`);
      if (length == indice) {
        this.obtenerCupones();
        console.log("obteniendo cupones");
        setTimeout(()=>{this.obtenerInfoDeMochila()},5000)
      }
    } catch (err) {
      console.log(err);
    }
  }

  DownloadFile(url, name, index, length) {
    //Esta función descarga el archivo zip en el path que se indique
    let dirs = RNFetchBlob.fs.dirs;
    RNFetchBlob.config({
      // el path donde lo descarga es /data/data/com.viro/files/file${name}.zip
      path: dirs.DocumentDir + `/${name}.zip`
    })
      .fetch("GET", url)
      .progress((received, total) => {
        console.log("progress " + Math.floor((received / total) * 100) + "%");
      })
      .then(() => {
        this.descomprimirZips(name, index, length);
      })
      .catch(e => console.log(e));
  }

  //==============================//
}

decorate(AssetsStore, {
  urlZipyMd5: observable,
  files: observable,
  cupones: observable,
  md5Cupons: observable,
  md5Zips: observable,
  obj: observable,
  mtl: observable,
  png1: observable,
  png2: observable,
  png3: observable,
  rest: observable,
  number: observable,
  timer: observable,
  nameCupones: observable,
  md5AComparar: observable,
  zip: observable,
  results: observable,
  resName: observable,
  resultado: observable,
  currentUser: observable,
  latInicial: observable,
  longInicial: observable,
  latFinal: observable,
  longFinal: observable,
  email:observable,
  password:observable,
  userToken:observable,
  errorMessage:observable,
  modalVisible:observable,
  showPass:observable,
  mostrarHomeUsuario: observable,
  _navigator: observable,
  urisMochila:observable,
  cupons:observable,
  infoModelo3d:observable,
  zipQR: observable,
  infoMochila: observable,
  mostrarMochila:observable,
  loginGuardado:observable,
  mostrarvoucherImg:observable,
  showQR: observable,
  mostrarViro: observable,
  showMeViro: observable,
  otroCupon: observable,
  abrirModal:observable,
});

const assetsStore = new AssetsStore();
export default assetsStore