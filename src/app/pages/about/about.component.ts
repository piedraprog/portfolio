import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  pageName: string = "about me"

  linkdnUrl: string = "https://www.linkedin.com/in/drapie/"

  tableColums: any[] = ["job","company","time"]
  
  tableInfo: any[] = [
    {
      job: "Frontend Developer",
      company: "Tikket",
      time: "feb. 2023 - feb. 2024"
    },
    {
      job: "Frontend Developer",
      company: "Bluesensor",
      time: "may. 2022 - ago. 2022 "
    },
    {
      job: "Intern",
      company: "Reaseguradora Delta ",
      time: "may. 2021 - mar. 2022"
    },
    {
      job: "Freelance Developer",
      company: "Freelance",
      time: "may. 2021 - mar. 2022"
    },
  ]

  aboutme: string = "I have 4 years of experience as a Front-end Developer. I have worked with technologies such as Angular and Node.js to create user-centric software solutions. My core competencies include platform architecture design, efficient coding and optimizing applications for high volume of requests."

  aboutme2: string = "  In my recent role at Tikket, I have worked closely with Product Owners and development teams, contributing to the design and development of innovative functionality and continuously improving the user experience. I value a culture of teamwork, effective communication and the constant pursuit of excellence. I am committed to bringing diverse perspectives and enriching experiences to the team, always with a focus on collective success and the achievement of shared goals."

  goTo() {
    window.open(this.linkdnUrl, "_blank");
  }
}
