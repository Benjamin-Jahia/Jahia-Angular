import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Company } from '../../model/company';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  private company!: Company;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.company = history.state.data;
    console.log(this.company);
  }
}
