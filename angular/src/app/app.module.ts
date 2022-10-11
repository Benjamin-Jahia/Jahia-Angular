import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { ExchangeRatesComponent } from './exchange-rates/exchange-rates.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { TestEmployeesComponent } from './test-employees/test-employees.component';
import { MatTableModule } from '@angular/material/table' 
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { CompanyComponent } from './pages/company/company.component'
const routes: Routes = [
  { path: 'graphql', component: MyComponentComponent },
  { path: 'exchange', component: ExchangeRatesComponent },
  { path: 'employees', component: TestEmployeesComponent },
  { path: 'company', component: CompanyComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    ExchangeRatesComponent,
    TestEmployeesComponent,
    CompanyComponent
  ],
  imports: [
    BrowserModule,
    [RouterModule.forRoot(routes)],
    GraphQLModule,
    HttpClientModule,
    MatTableModule,
    MatCardModule,
    MatIconModule,
    MatGridListModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
