import { Injectable } from '@angular/core';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor() { }

  private productos : Producto[] = [
    new Producto(1, 'Laptop', 1200, 'assets/lap.jpg'),
    new Producto(2, 'Tablet', 900, 'assets/tablet.jpg'),
    new Producto(3, 'Celular', 700, 'assets/cel.jpg')];

  obtenerProductos(): Producto[]{
    return this.productos;
  }
}
