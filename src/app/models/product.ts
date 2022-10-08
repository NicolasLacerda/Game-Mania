export class Product {
  id: number;
  name: string;
  cutprice: string;
  price: string;
  installmentMultiplier: string;
  installmentValue: string;
  discount: string;
  imageUrl: string;
  imageSize: string;
  qtn: string;

  constructor(
    id = 1,
    name = '',
    cutprice = '',
    price = '',
    installmentMultiplier = '',
    installmentValue = '',
    discount = '',
    imageUrl = '',
    imageSize = '',
    qtn = ''
  ) {
    this.id = id;
    this.name = name;
    this.cutprice = cutprice;
    this.price = price;
    this.installmentMultiplier = installmentMultiplier;
    this.installmentValue = installmentValue;
    this.discount = discount;
    this.imageUrl = imageUrl;
    this.imageSize = imageSize;
    this.qtn = qtn;
  }
}
