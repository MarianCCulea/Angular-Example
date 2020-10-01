import{Item} from "../model/Item";
export class Order {
    order_id:number;
    adress:string;
    invoiceadress:string;
    totalprice:number;
    totalitems:number;
    phone:number;
    delivered:boolean;
    items:Array<Item>;

    public constructor(init?: Partial<Order>) {
        Object.assign(this, init);
    }

  }