import { Component,OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { NgForm, Validators, FormControl } from '@angular/forms';
// Import rxjs map operator
import 'rxjs/add/operator/map';
import { IDbConnection, IDatabase } from '../interfaces/IDbConnection';
import { IFileStatus, Status } from '../interfaces/IFileStatus';
import { IConnectionProfile } from '../interfaces/IConnectionProfile';
import { IConnectionProfileDetail } from '../interfaces/IConnectionProfileDetail';
import { MigrationService } from '../services/migration.Service';
import { IAlert } from '../interfaces/IAlert';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  filesToUpload: File[];
  //This is the files recorded in the manifest
  filesToShow: IFileStatus[];
  dbConnection: IDbConnection;

  isShowRunButton = false;
  isShowRunFromSelectedButton = false;
  isConnecting = false;

  selectedFile: IFileStatus;
  selectedDatabase: string;

  alert: IAlert;
  f:NgForm;
  profileName: string;
  isShowConnectionName: boolean;
  isKeepAllLogs: boolean;
  conectionInfoList: IConnectionProfile[] = [];
  selectedConnInfo: IConnectionProfile = { profileName: "", _id: 0 };
  selectedConnInfoView: String;

  // Link to our api, pointing to localhost
  API = 'http://localhost:3000';

  active: boolean;

  // Declare empty list of people
  people: any[] = [];

  constructor(private http: Http) {
    this.selectedConnInfoView = "hello";
    this.dbConnection = { server: "", userName: "", password: "", databases: [] };
    this.filesToShow = [];
    this.isKeepAllLogs = true;
    this.active = true;
  }

  // Angular 2 Life Cycle event when component has been initialized
  ngOnInit(): void {
    //this.getAllPeople();
    //this.buildForm();
    this.conectionInfoList = [{ profileName: "SriniSriniSrini", _id: 0 }, { profileName: "Bohao Cao", _id: 1 }];
  }

  // ngOnChanges(){
  //   this.connectionInfoFormGroup.setValue({
  //     databaseName: this.dbConnection.server,
  //     userName: this.dbConnection.userName
  //   })
  
  // }

  // buildForm(): void {
  //   this.connectionInfoFormGroup = this.fb.group({
  //     'databaseName': [this.dbConnection.server, [/**Validators.required,**/]],
  //     'userName': [this.dbConnection.userName, [/**Validators.required,**/]]
  //   });
  //   this.connectionInfoFormGroup.valueChanges.subscribe(data => this.onFormValueChanged(data));

  // }

  // onFormValueChanged(data?: any): void {
  //   if (!this.connectionInfoFormGroup) { return; }

  //   const form = this.connectionInfoFormGroup;

  //  form.patchValue({
  //    databaseName: this.dbConnection.server
  //   });

  //   for (const field in this.formErrors) {
  //     // clear previous error message (if any)
  //     this.formErrors[field] = '';
  //     const control = form.get(field);

  //     if (control && control.dirty && !control.valid) {
  //       const messages = this.validationMessages[field];
  //       for (const key in control.errors) {
  //         this.formErrors[field] += messages[key] + ' ';
  //       }
  //     }
  //   }
  // }

  //view event handler
  useDefaultServer() {
    this.dbConnection.server = 'localhost\\sql12';
    //this.ngOnChanges();
    //
    //this.buildForm();
    // this.clientAlert.addAlert({
    // 	message: 'Default user name' + this.dbConnection.server + 'is used.',
    // 	type: 'info'
    // });
  }

  useDefaultUserName() {
    this.dbConnection.userName = 'sa';
    //this.buildForm();
    // this.clientAlert.addAlert({
    // 	message: 'Default user name' + this.dbConnection.server + 'is used.',
    // 	type: 'info'
    // });
  }

  // Add one person to the API
  addPerson(name, age) {
    this.http.post(`${this.API}/users`, { name, age })
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


  onSelectedChanged(event) {
  }

  connectWithSelected() {
  }

  deleteSelected() {

  }

  formErrors = {
    'database': ''
  }

  validationMessages = {
    'database': {
      'required': "Database name is required",
      'minLength': "Name must be at least 4 characters long"
    }
  }
}
