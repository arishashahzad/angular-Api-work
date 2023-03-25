import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interface/user';
import { WebApiService } from 'src/app/service/web-api.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
body:User[]=[]
constructor(private userApiService:WebApiService){}
ngOnInit(): void {
  this.userApiService.getAll().subscribe((data:User[])=>{
    this.body=data
    console.log(this.body)
  })
}
}
