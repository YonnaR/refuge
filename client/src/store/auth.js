import * as mobx from "mobx";
import Axios from "axios";

export default class authStore {
    constructor(){
        mobx.extendObservable(this , {
            isAuth: false,
            token:"",
        })
        console.log(this.isAuth)
    }

}
