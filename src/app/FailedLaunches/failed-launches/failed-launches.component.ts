import {Component, OnInit} from '@angular/core';
import {Apollo, gql} from 'apollo-angular';

@Component({
  selector: 'app-failed-launches',
  templateUrl: './failed-launches.component.html',
  styleUrls: ['./failed-launches.component.scss']
})
export class FailedLaunchesComponent implements OnInit{

  launchpadData:any;

  failedLaunchsData:any;

  getFailedLaunches(launchPadId:string){
    console.log('launchPadId--',launchPadId);

    this.apollo
      .watchQuery({
        query: gql`
          {
            launchPadFailures(id:"${launchPadId}"){
              launchpad,
              all_failures{
                name,
                failures
              }
            }
          }
        `,
      })
      .valueChanges.subscribe((result: any) => {
        this.failedLaunchsData = result;
      });
  }

  constructor(private apollo: Apollo) { }

  ngOnInit(): void {

    this.apollo
      .watchQuery({
        query: gql`
          {
            allLaunchPads{
              launchpad,
              id
            }
          }
        `,
      })
      .valueChanges.subscribe((result: any) => {
        this.launchpadData = result;
      });

  }

}
