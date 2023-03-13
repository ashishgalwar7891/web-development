import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../services/logger.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  
  name: string = "";
  email: string = "";
  contactNo: string = "";

  status: boolean = true;

  constructor(private _logger: LoggerService) { }

  ngOnInit(): void {
  }

  register() {
    this._logger.logMessage('Registering User....');

    this._logger.logDebug(`Name Input: ${this.name}`);
    this._logger.logDebug(`Email Input: ${this.email}`);
    this._logger.logDebug(`Contact No Input: ${this.contactNo}`);
    
    if(this.name === '' || this.email === '' || this.contactNo === '') {
      this._logger.logError('User Registration Failed')
    }
    else
      this._logger.logInfo(`User ${this.name} Registered`);
  }


}
