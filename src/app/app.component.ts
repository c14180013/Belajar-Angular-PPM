import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'My Name';

  itembuah = [{
    nama : 'Kelengkeng',
    harga : 10000
  }, {
    nama : 'Jeruk',
    harga : 5000
  }];
  
  itemArr = ['aa', 'bb'];

  show: boolean = true;

  user = ""

  pesan = ''

  klikButton() {
    this.pesan = "Tombol ditekan"
  }
}
