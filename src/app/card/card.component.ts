import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DemoService } from '../Service/demo.service';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [HttpClientModule, FormsModule, CommonModule],
  templateUrl: './card.component.html',
  providers: [DemoService],
  styleUrl: './card.component.css',
})
export class CardComponent implements OnInit {
  public data: any;
  text = '';
  constructor(private service: DemoService) {}

  public fetchData() {
    this.service.getall().subscribe((resp: any) => {
      this.data = resp;
    });
  }

  ngOnInit(): void {
    this.fetchData();
  }
}
