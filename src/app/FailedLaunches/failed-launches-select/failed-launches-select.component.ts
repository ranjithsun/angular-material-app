import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

interface LaunchPads {
  launchpad: string,
  id: string
}

@Component({
  selector: 'app-failed-launches-select',
  templateUrl: './failed-launches-select.component.html',
  styleUrls: ['./failed-launches-select.component.scss']
})
export class FailedLaunchesSelectComponent implements OnInit {

  @Input() launchpadData: any;

  launchpads:LaunchPads[] = [];

  @Output() selectedLaunchPad = new EventEmitter<string>();

  onSelectLaunchPad(value: string) {
    this.selectedLaunchPad.emit(value);
  }

  constructor() { }

  ngOnInit(): void {
    this.launchpads = this.launchpadData?.data?.allLaunchPads;
  }

}
