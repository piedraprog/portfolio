import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  pageName = "about me"

  tableColums: any[] = [
    {
      name: "Job Description",
      cell: "job"
    },
    {
      name: "Company Name",
      cell: "company"
    },
    {
      name: "Time",
      cell: "time"
    }
  ]
  tableInfo: any[] = [
    {
      job: "Lorem Ipsum",
      company: "Drapie Inc.",
      time: "3yrs"
    },
    {
      job: "Lorem Ipsum",
      company: "Drapie Inc.",
      time: "3yrs"
    },
    {
      job: "Lorem Ipsum",
      company: "Drapie Inc.",
      time: "3yrs"
    },
    {
      job: "Lorem Ipsum",
      company: "Drapie Inc.",
      time: "3yrs"
    },
    {
      job: "Lorem Ipsum",
      company: "Drapie Inc.",
      time: "3yrs"
    }
  ]
}
