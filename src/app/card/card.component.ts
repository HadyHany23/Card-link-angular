import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [HttpClientModule,FormsModule,CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent implements OnInit {
  public data: any;
  text='';
  constructor(private http: HttpClient) {}

  public fetchName() {
    this.http
      .get('https://jsonplaceholder.typicode.com/todos/1')
      .subscribe((resp: any) => {
        console.log(resp);
        this.data = resp;
      });
  }

  ngOnInit(): void {
    this.fetchName();
  }
}
