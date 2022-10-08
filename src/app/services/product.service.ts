import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  // id
  // name
  // cutprice
  // price
  // installment
  // discount
  // imageUrl

  products: Product[] = [
    new Product(
      1,
      'Razer BlackWidow V3 A Bathing Ape - Switch Verde',
      '1018,44',
      '918,44',
      '3',
      '306',
      '10',
      'https://assets3.razerzone.com/Ieg_GHSv5HjDVCD2s-b6sNJAccE=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh6b%2Fh53%2F9420855967774%2Fbape-blackwidow-v3-500x500.png'
    ),
    new Product(
      2,
      'Headset Gamer Fallen Morcego, Surround Virtual 7.1, Cancelamento de Ruído, Drivers 53mm',
      '1018,44',
      '918,44',
      '10',
      '47,05',
      '15',
      'https://i.im.ge/2022/10/07/1vH8gq.fone.png'
    ),
    new Product(
      3,
      'Mouse Gamer Redragon Cobra, Chroma RGB, 12400DPI, 7 Botões, Preto',
      '176,35',
      '109,89',
      '5',
      '25,85',
      '15',
      'https://i.im.ge/2022/10/07/1vHHVW.Mouse.png'
    ),
    new Product(
      4,
      'Controle Sem Fio Xbox Pulse Red',
      '684,11',
      '449,90',
      '10',
      '47,35',
      '5',
      'https://i.im.ge/2022/10/07/1vHg0C.Controle.png'
    ),
    new Product(
      5,
      'Processador Intel Core i5-10400, Cache 12MB, 2.9GHz (4.3GHz Max Turbo), LGA 1200',
      '1.529,40',
      '999,00',
      '10',
      '117,64',
      '15',
      'https://i.im.ge/2022/10/07/1vHJ5T.Processador.png'
    ),
  ];

  constructor() {}

  getProducts(): Product[] {
    return this.products;
  }
}
