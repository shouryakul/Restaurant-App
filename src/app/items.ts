export class Items {
    id;
    Name;
    description;
    price;
    qnt;

    constructor(id:number,name:string,desc :string,price : number,qnt:number){
        this.id = id;
        this.Name = name;
        this.description = desc;
        this.price = price;
        this.qnt = qnt;
    }
}

