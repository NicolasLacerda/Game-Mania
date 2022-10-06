export class Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;

  constructor(
    id = 1,
    name = 'test',
    description = '',
    price = 0,
    imageUrl = 'https://assets3.razerzone.com/Ieg_GHSv5HjDVCD2s-b6sNJAccE=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh6b%2Fh53%2F9420855967774%2Fbape-blackwidow-v3-500x500.png'
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.imageUrl = imageUrl;
  }
}
