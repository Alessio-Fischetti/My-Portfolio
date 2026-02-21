import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-content',
  imports: [CommonModule],
  templateUrl: './contact-content.html',
  styleUrl: './contact-content.scss'
})
export class ContactContent {
  /* Variables */
  contacts: { contactType: string, contactValue: string, icon: string, copy: boolean }[] = [
    {
      contactType: 'Numero Telefonico', contactValue: '+39 380 194 9521', icon: 'assets/icons/telephone.png', copy: true
    },
    {
      contactType: 'Email', contactValue: 'afischetti.work@gmail.com', icon: 'assets/icons/email_container.png', copy: true
    },
    {
      contactType: 'Posizione', contactValue: 'Bologna, Italia, IT', icon: 'assets/icons/location.png', copy: false
    },
  ]
  links: { linkType: string, linkValue: string, icon: string, actualLink: string }[] = [
    {
      linkType: 'Linkedin', linkValue: 'linkedin.com/alessio-fischetti', icon: 'assets/icons/linkedin.svg', actualLink: 'https://www.linkedin.com/in/alessio-fischetti-a085ab20a/'
    },
    {
      linkType: 'GitHub', linkValue: 'github.com/Alessio-Fischetti', icon: 'assets/icons/github.svg', actualLink: 'https://github.com/Alessio-Fischetti'
    },
    {
      linkType: 'Portfolio', linkValue: 'lessio-fischetti.github.io/Software-Developer-Portfolio', icon: 'assets/icons/online.png', actualLink: 'https://alessio-fischetti.github.io/Software-Developer-Portfolio'
    },
    {
      linkType: 'Medium', linkValue: 'medium.com/@afischetti.work', icon: 'assets/icons/medium.svg', actualLink: 'https://medium.com/@afischetti.work'
    },

  ]

  /* Copia il valore */
  copy(value: string) {
    if (value === '+39 380 194 9521') {
      const cleanNumber = value.replace(/\s+/g, '');
      navigator.clipboard.writeText(cleanNumber);
    } else {
      navigator.clipboard.writeText(value)
    }
  }
}
