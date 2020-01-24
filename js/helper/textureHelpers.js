import FetchUser from "../restProviders/peticiones";
import { decorate, observable } from "mobx";
import { observer } from "mobx-react";

class CuponesViro {

   @observable cupones;
    rest = new FetchUser();

    constructor() {
      this.filtraObjectEnCupones()
      this.cupones = [];
    }

    async filtraObjectEnCupones (){
      
       const res = await this.rest.getCupons()
       res.data.Content.filter(el => {
        return this.cupones.push(el.object)
       })
      
      }
  }


const Cupones =  new CuponesViro();

export default Cupones