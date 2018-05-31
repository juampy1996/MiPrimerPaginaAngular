import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import { promise } from 'protractor';
@Injectable()
export class ProductosService {

  productos:any[] = [];
  cargando:boolean = true;
  productos_filtrado:any[] = [];


  constructor( private http:Http) { 
    this.cargar_productos();
  }
  public cargar_productos(){
    this.cargando =true;
    let promesa = new Promise ( (resolve, reject )=>{
     
      this.http.get(' https://paginweb-fff11.firebaseio.com/producto_idx.json')
      .subscribe( res=> {
        // console.log(res.json());
         this.cargando = false;
        this.productos = res.json(); 
        resolve();
    });
      
    });
    return promesa;
     
  }
  public cargar_producto(cod:string){
   return this.http.get(`https://paginweb-fff11.firebaseio.com/productos/${cod}.json`);
  }

  public buscar_producto( termino:string ){
    // console.log("buscando producto");
    // console.log(this.productos.length)
    if(this.productos.length === 0){
      this.cargar_productos().then( ()=>{
        //termino de cargar
        this.filtrar_productos(termino);
        
      })
    }
    else{
        this.filtrar_productos(termino);
    }
  

  }
  private filtrar_productos(termino:string){
    this.productos_filtrado = [];
    termino = termino.toLowerCase();
    this.productos.forEach ( prod=>{
      if(prod.categoria.indexOf(termino) >= 0 || prod.titulo.toLowerCase().indexOf(termino) >=0){
        this.productos_filtrado.push(prod);
        
      }
      // console.log(prod);
    })
  }
}
