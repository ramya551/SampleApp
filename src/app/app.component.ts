import { Component } from '@angular/core';
import { appService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [appService],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  value: string = "";
  title = 'productandInventoryApp';
  constructor(private _appService: appService) { }
   ngOnInit(): void {
      this.value = this._appService.getApp();
   }
}
