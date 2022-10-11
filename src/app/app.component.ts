import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  openReg() {
    document.getElementById('form-registration')!.style.display = 'block';
  }
}
