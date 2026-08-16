import { Component, ChangeDetectionStrategy } from '@angular/core';
import { AboutExperienceRow } from '../../interfaces/about-experience-row';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrl: './about.component.scss',
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class AboutComponent {
  pageName: string = "about me"

  linkdnUrl: string = "https://www.linkedin.com/in/drapie/"

  tableInfo: AboutExperienceRow[] = [
    {
      job: "Product Engineer / Full-stack TypeScript Engineer",
      company: "Independent / Drapie",
      time: "mar. 2025 - present"
    },
    {
      job: "Frontend Developer",
      company: "Well Made Software",
      time: "oct. 2024 - mar. 2025"
    },
    {
      job: "Frontend Developer",
      company: "D4T",
      time: "jul. 2024 - sep. 2024"
    },
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

  aboutme: string = "I am a frontend-focused Product Engineer specialized in Angular and TypeScript, with practical full-stack capability across business applications, SaaS products, and internal systems."

  aboutme2: string = "My strongest work happens where frontend depth meets product ownership: understanding existing systems, translating business workflows into software, working across APIs and data when needed, and taking product slices from requirements through deployment and real-user iteration."

  goTo() {
    window.open(this.linkdnUrl, "_blank");
  }
}
