import { Component, HostListener } from '@angular/core';
import { InfoPaginaService } from './services/info-pagina.service';
import { ProductosService } from './services/productos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public _infoPagina: InfoPaginaService,
              public productosService: ProductosService){
  }
  public getScreenWidth: any;
  public getScreenHeight: any;

  ngOnInit(){
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;
  }
  @HostListener('window:resize',['$event'])
  onWindowResize(){
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;
  }
}
