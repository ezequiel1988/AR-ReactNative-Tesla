import { unzip, unzipAssets } from 'react-native-zip-archive';
import RNFetchBlob from 'rn-fetch-blob'

export default class ZipFunctions {

  llamarGetCupons;

  constructor() {

    this.llamarGetCupons = false;
  }

   async getContents(name, index, length) {
    let indice = index+= 1;
    console.log(length, indice)
        //Esta función descomprime el archivo en la ruta del targetPath
        let sourcePath = `/data/data/com.viro/files/${name}.zip`
        let targetPath = `/data/data/com.viro/files/${name}`

        try {
          /*
          si el indice es igual a 7 y a length, entonces quiere decir que pudo
          recibir y descomprimir todos los zip enviados
          */
          const res = await unzip(sourcePath, targetPath)
          return res
          // console.log(`Archivo descomprimido en el path: ${res}`)
          //  if(indice == 7 && length == indice) {
          //   this.llamarGetCupons = true;
          //   console.log(this.llamarGetCupons)
          //  }
        } catch (err) {
          console.log(err)
        }
      }
    
      DownloadFile(url, name, index, length) {
       
        //Esta función descarga el archivo zip en el path que se indique
        let dirs = RNFetchBlob.fs.dirs
        RNFetchBlob.config({
          // el path donde lo descarga es /data/data/com.viro/files/file${name}.zip
          path : dirs.DocumentDir + `/${name}.zip`
        })
        .fetch('GET', url)
        .progress((received, total) => {
          console.log('progress ' + Math.floor(received/total*100) + '%');
        })
        .then(() => {
         return this.getContents(name, index, length)
        })
        .catch(e => console.log(e))
        
      }

}