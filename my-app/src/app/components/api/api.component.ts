import { Component, OnInit } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/Rx';

@Component({
  selector: 'api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})

export class ApiComponent implements OnInit {
  private elasticApi = 'http://quotes.rest/qod.json'
  status : Status;

  constructor(private http: Http) {

  }

  ngOnInit(){
    this.http.get(this.elasticApi)
      .map((res: Response) => res.json())
      .subscribe(data => {        
        this.status = data.contents.quotes[0].quote;
        
        console.log(this.status)
      }) 
  }
}

interface Status{
  quoteStatus : string
}


/*

getProject(id: number) {
  console.log(id);
  return this.getProjects()
        .then(projects => projects.filter(project => project.id == id)[0])
        .catch(this.handleError);
}

ngOnInit() {
  this.sub = this.route.params.subscribe(params => {
    if (params['id'] !== undefined) {
      let id = +params['id'];
      this.projectsvc.getProject(id)
        .then(proj => this.currproject = proj);
    }

  });
}

*/