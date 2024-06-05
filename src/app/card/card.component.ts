import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent implements OnInit {
  public data: any;
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
