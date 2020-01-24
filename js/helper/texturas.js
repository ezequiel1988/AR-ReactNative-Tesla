import { decorate, observable } from "mobx";
import { observer } from "mobx-react";

class MisTexturas {
  @observable container;
  constructor() {
    this.container = {};
  }

  armarObjetoTexturas(cuponesObject, results) {
    console.log(cuponesObject, results, "desde mis texturas")

    cuponesObject.map(e => console.log(e))

    // for (let i = 0; i < cuponesObject.length; i++) {
      
    //   const cupones = cuponesObject[i];
    //   console.log(cupones)
    //   results.filter(element => {
    //     if (cupones.name === element.name) {
    //       this.container[`${element.name}`] = {
    //         diffuseTexture: {
    //           uri: `file:///data${RNFS.DocumentDirectoryPath}/${element.name}/go/src/texture_3d.png`
    //         }
    //       };
    //     }
    //     console.log(this.container, "container1")
    //   });      
    // }
  }
}

const MiTexturas = new MisTexturas();
export default MiTexturas;
