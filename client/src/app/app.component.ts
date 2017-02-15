import { Component } from '@angular/core';
import { Http } from '@angular/http';
// Import rxjs map operator
import 'rxjs/add/operator/map';
import {IDbConnection, IDatabase} from '../interfaces/IDbConnection';
import {IFileStatus, Status} from '../interfaces/IFileStatus';
import {IConnectionProfile} from '../interfaces/IConnectionProfile';
import {IConnectionProfileDetail} from '../interfaces/IConnectionProfileDetail';
import {MigrationService} from '../services/migration.Service';
import {IAlert} from '../interfaces/IAlert';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  filesToUpload: File[];
	//This is the files recorded in the manifest
	filesToShow: IFileStatus[];
	dbConnection: IDbConnection;

	isShowRunButton = false;
	isShowRunFromSelectedButton = false;
	isConnecting = false;

	selectedFile : IFileStatus;
	selectedDatabase: string;

	alert: IAlert;

	profileName: string;
	isShowConnectionName: boolean;
	isKeepAllLogs: boolean;
  conectionInfoList: IConnectionProfile[] = [];
  selectedConnInfo: IConnectionProfile = {profileName:"", _id:0};
	selectedConnInfoView: String;

   // Link to our api, pointing to localhost
  API = 'http://localhost:3000';

  

  // Declare empty list of people
  people: any[] = [];

  constructor(private http: Http) {

    
    this.selectedConnInfoView = "hello";
    this.dbConnection = { server: "", userName: "", password: "", databases: [] };
    this.filesToShow = [];
		this.isKeepAllLogs = true;
  }

  // Angular 2 Life Cycle event when component has been initialized
  ngOnInit() {
    this.getAllPeople();
    this.conectionInfoList = [{profileName:"SriniSriniSrini", _id:0},{profileName:"Bohao Cao",_id:1}];
  }

  // Add one person to the API
  addPerson(name, age) {
    this.http.post(`${this.API}/users`, {name, age})
      .map(
        res => {
          return res.json()
        })
      .subscribe(() => {
        this.getAllPeople();
      })
  }

  // Get all users from the API
  getAllPeople() {
    this.http.get(`${this.API}/users`)
      .map(res => res.json())
      .subscribe(people => {
        console.log(people)
        this.people = people
      })
  }


  onSelectedChanged(event){
  }

  connectWithSelected(){ 
  }

  deleteSelected(){

  }
}
