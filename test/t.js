export class cart {
    constructor(
        public ProductId: number,//商品编号
        public ProductName: string,//商品名称
        public Number: number,//商品数量
        public Pirice:number,//商品价格
        public CustomerId: string//客户编个号
    ){}
}