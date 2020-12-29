import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-failed-launches-list',
  templateUrl: './failed-launches-list.component.html',
  styleUrls: ['./failed-launches-list.component.scss']
})
export class FailedLaunchesListComponent implements OnInit {

  @Input() failedLaunchsData:any;

  failedLaunchs:any;
  displayedColumns: string[] = ['sno', 'name', 'failures'];

  constructor() { }

  ngOnInit(): void {
    
  }
  ngOnChanges():void{
    console.log('failedLaunchsData',this.failedLaunchsData)
    this.failedLaunchs = this.failedLaunchsData?.data?.launchPadFailures;
    
    console.log(this.failedLaunchs);
  }

}
