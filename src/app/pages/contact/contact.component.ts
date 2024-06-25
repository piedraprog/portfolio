import { Component } from '@angular/core';
import { socialMediaUrls } from '../../interfaces/social.interfaces';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  pageName: string = "contact me";

  email: string = "hello@drapie.dev"

  socialMediaUrls: socialMediaUrls[] = [
    { 
      social: "intagram", 
      url: "https://www.instagram.com/piedraprog" 
    },
    { 
      social: "tiktok", 
      url: "https://www.tiktok.com/@piedraprog" 
    },
    { 
      social: "github", 
      url: "https://github.com/piedraprog" 
    },
    { 
      social: "linkdn", 
      url: "https://www.linkedin.com/in/drapie" 
    }
  ]
}
