import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {Apollo, gql} from 'apollo-angular';
import { Employee } from '../model/employee';
import { environment } from '../../environments/environment';
@Component({
  selector: 'app-test-employees',
  templateUrl: './test-employees.component.html',
  styleUrls: ['./test-employees.component.css']
})
export class TestEmployeesComponent implements OnInit {

  loading = true;
  error: any;
  employees: Employee[] = [];
  selectedEmployee!: Employee;
  dataSource:any;
  displayedColumns:string[] = [];
  columnNames = [{
    id: 'fname',
    value: 'Prénom',

  }, {
    id: 'lname',
    value: 'Nom',
  }]


/*  empDetailsQuery : any = gql` 
    query EmplDetails($id: String!){
      employeeById(id: $id) {
        lname
        fname
        id
      }
    }`;
*/
  empDetailsQuery : any = gql` 
    query EmplDetails($id: String!){
      employeeTest(path: $id) {
        completeName  
        fName
        thumbnail
      }
    }`;

    empMutationQuery : any = gql` mutation EmpMutation($id: String!, $field: String!, $value: String!){
      jcr(workspace: LIVE) {
        mutateNode(pathOrId: $id) {
          mutateProperty(name: $field) {
            setValue(type: STRING, value: $value)
          }
        }
      }
    }`;

  constructor(private apollo: Apollo) { }

  ngOnInit(): void {
    this.displayedColumns = this.columnNames.map(x => x.id);
    this.apollo
    .watchQuery({
      query: gql`
      {
        allEmployees {
          fname
          lname
          path
          id
        }
      }
      `,
    })
    .valueChanges.subscribe((result: any) => {
      this.employees = result.data.allEmployees;
      this.loading = result.loading;
      this.error = result.error;
      console.log( result.data.allEmployees )
      this.dataSource = new MatTableDataSource(result.data.allEmployees);
    });
  }

  public showDetails(empId: String){
    this.employeeDetails(empId)
  }

  private employeeDetails( empId: String){
    let queryObj: any = {
      query: this.empDetailsQuery,
      variables: {id: empId}
    }
    this.apollo.watchQuery(queryObj).valueChanges.subscribe((result: any) => {
      
      console.log(result);
      this.selectedEmployee = result.data.employeeTest;
      
      //this.selectedEmployee = result.data.employeeById;
      //console.log( this.selectedEmployee )
    });
  }

  public saveThis(field:string, value:string){
    this.mutateEmployee(field, value);
  }

  private mutateEmployee(field: string, value: string) {
    let queryObj: any = {
      mutation: this.empMutationQuery,
      variables: {id: this.selectedEmployee.id, field, value}
    }
    this.apollo.mutate(queryObj).subscribe((result: any) => {
      console.log( result )
    }); }

    public urlFromPath(path: String): string{
      return environment.jahia_domain + environment.jahia_files + path + environment.jahia_thumbnail;
    }
}
