import { Component, OnInit } from '@angular/core';
import {Apollo, gql} from 'apollo-angular';
import { environment } from '../../environments/environment';
import { Company } from '../model/company';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {
  loading = true;
  error: any;
  companies: Company[] = [];
  constructor(private apollo: Apollo) { }

  ngOnInit(): void {
    this.apollo
    .watchQuery({
      query: gql`
      {
        jcr(workspace: LIVE) {
          nodesByQuery(
            query: "SELECT * FROM [jdnt:company] as results WHERE ISDESCENDANTNODE(results, '/sites/digitall/')"
          ) {
            nodes {
              uuid
              title: displayName(language: "en")
              description: property(name: "overview", language: "en") {
                value
              }
              headline: property(name: "headline", language: "en") {
                value
              }
              thumbnail: property(name: "thumbnail", language: "en") {
                url: refNode {
                  path
                }
              }
              logo: property(name: "logo", language: "en") {
                url: refNode {
                  path
                }
              }
              phone: property(name: "phone", language: "en") {
                value
              }
              email: property(name: "email", language: "en") {
                value
              }
              website: property(name: "website", language: "en") {
                value
              }
              industry: property(name: "industryCat", language: "en") {
                name: refNode {
                  name: displayName(language: "en")
                }
              }
            }
          }
        }
      }
      `,
    })
    .valueChanges.subscribe((result: any) => {
      console.log(result);
      this.companies = result?.data?.jcr?.nodesByQuery?.nodes;
      this.loading = result.loading;
      this.error = result.error;
      console.log( this.companies)
    });
  }

  public generateURL (path:String)  {
      return environment.jahia_domain + environment.jahia_files + path + environment.jahia_thumbnail;
  }
}
