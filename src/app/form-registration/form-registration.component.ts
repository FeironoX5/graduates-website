import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs";
import {parseJson} from "@angular/cli/utilities/json-file";

export class student {
  constructor(
    public name: string, // Имя (просто текст)
    public surname: string, // фамилия (просто текст)
    public email: string, // почта (можно какую то проверку сделать)
    public phone: string, // телефон (можно какую то проверку сделать)
    public typeContact: number, // выпадающий список Telegram/whatsapp
    public tgLogin: string, // если telegram, то логин в тг (просто текст)
    public age: number, // возраст (циферка)
    public school: string, // школа (просто текст)
    public studyDirection: string, // Направление обучения (просто текст)
    public subject: string, // Предмет из выпадающего списка
    public goal: string, // Цель (просто текст)
  ) {
  }
}

export interface subjectsRequest {
  subjects: Array<string>
}
export interface studentRequest {
  status: number,
  error: string
}

@Component({
  selector: 'app-form-registration',
  templateUrl: './form-registration.component.html',
  styleUrls: ['./form-registration.component.css']
})
export class FormRegistrationComponent {
  subjects: Array<string> = [];
  model = new student('', '', '', '', 0, '', 0, '', '', '', '');
  submitted = false;

  onSubmit() {
    console.log(this.model);
    this.http.post<studentRequest>('https://httpbin.org/status/200', this.model)
      .subscribe(response => {
        if (response.status == 200) {
          this.submitted = true;
        } else {
          console.log(response.error);
        }
      });
  }

  constructor(private http: HttpClient) {
    this.http.get<subjectsRequest>('http://ptsv2.com/t/rlaet-1665474434/post').subscribe(response => {
      console.log(response);
      this.subjects = response.subjects;
    });
  }

  closeReg() {
    document.getElementById('form-registration')!.style.display = 'none';
  }
}
