
import { productResponseRequest } from "./listprods.component";
import { userlistrequest } from "./userdetails.component";

export interface UserOrderresponse{
    oid:number,

    uid:number, 

    prod:productResponseRequest,

    users:userlistrequest

    deliv_date:Date,

    quantity:number,  

    total_amount:number   
}