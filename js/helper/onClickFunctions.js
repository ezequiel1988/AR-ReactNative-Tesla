import FetchUser from "../restProviders/peticiones";
import { observable } from "mobx";

class OnclickFunctions {

    @observable rest = new FetchUser();
    @observable functions;
    @observable zips;

    constructor() {
        this.functions = [];
        this.zips = null;
        this.functionsOnclick();

    }

   async functionsOnclick () {
        
    try {

        this.zips = await this.rest.getAssets();

        this.zips.data.Content.map(el => {
            this.functions.push({
                "OnclickState": 
                 (state, navigator) =>  {

                    let obj = {
                        number: 0,
                        timer: null
                    }

                  function addOne() {
                       
                      obj.number+=1;
                      obj.timer = setTimeout(addOne(),200)
                    }

                    if(state == 1) {
                      console.log("click down")
                      addOne();
                      console.log(obj.number, obj.timer)

                    } else if(state == 2) {
                        console.log("click up")
                        clearTimeout(obj.timer);
                    }
                    if (obj.number >= 100) {
                      navigator
                    }
                } 
            })
        })

        
    } catch (e) {
        console.log(e)
    }
    }

}

const Functions = new OnclickFunctions();
export default Functions;