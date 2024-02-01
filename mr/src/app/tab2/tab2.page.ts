import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  ticketData: any[] = [
    {
      No:1, Amount:500, StartDate:'2024-01-01', EndDate:'2024-01-31', Status:'wins'
    },
    {
      No:2, Amount:400, StartDate:'2024-02-02', EndDate:'2024-02-23', Status:'fails'
    },
    {
      No:3, Amount:500, StartDate:'2024-03-01', EndDate:'2024-03-13', Status:'loads'
    },
  ]

  constructor() {}

}
