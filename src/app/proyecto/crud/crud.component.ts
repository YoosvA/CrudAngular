import { Component, ɵɵqueryRefresh } from '@angular/core';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent {
  public inventario : any = [
    {id:1, nombre:"pantalon", precio:250},
    {id:2, nombre:"chamarra", precio:500}
  ];

  public formulario : any = {
    id:null,
    nombre:null,
    precio:null
  }
  public seleccionaBoton: boolean = false;

  public seleccionar(articulos:any) : void{
    this.formulario.id = articulos.id;
    this.formulario.nombre = articulos.nombre;
    this.formulario.precio = articulos.precio;
    this.seleccionaBoton = true;

  }


  public eliminar(id:number) : void{
    for (let index = 0; index < this.inventario.length; index++) {
      if (this.inventario[index].id == id) {
        this.inventario.splice(index, 1);
        alert("eliminado con exito!!");
        break;
      }
      
    }
  }

  public agregar() : void{

    //campos vacios
    if (!this.formulario.id || !this.formulario.nombre || !this.formulario.precio) {
      alert("llena los registros plis");
      return; 
    }

    //id's existentes
    for (let index = 0; index < this.inventario.length; index++) {
      if (this.inventario[index].id == this.formulario.id) {
        alert("Error id existente!!");
        return;
      }
    }
    
    let datoNuevo = {
      id: this.formulario.id,
      nombre: this.formulario.nombre,
      precio: this.formulario.precio
    };
    this.inventario.push(datoNuevo);
    alert("Agregado con exito!!");

    // limpiar
    this.formulario.id = null;
    this.formulario.nombre = '';
    this.formulario.precio = null;
  }

  public editar(id:any) : void{

    if (!this.seleccionaBoton) {
      //solo sirve una vez :(
      alert("Seleccione el boton seleccionar para editar");
      return;
    }

    if (!this.formulario.id || !this.formulario.nombre || !this.formulario.precio) {
      alert("llena los registros plis");
      return; 
    }

  
    for (let index = 0; index < this.inventario.length; index++) {
      if (this.inventario[index].id == id) {
        this.inventario[index].id = this.formulario.id;
        this.inventario[index].nombre = this.formulario.nombre;
        this.inventario[index].precio = this.formulario.precio;
        alert("se modifico con exito!!");

        //limpiar
        this.formulario.id = null;
        this.formulario.nombre = '';
        this.formulario.precio = null;
        break;
      }
    }
  }


}
