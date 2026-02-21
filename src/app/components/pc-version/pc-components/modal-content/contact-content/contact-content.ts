import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Contact, Link } from '../../../../interfaces/contact-interface';
import { CONTACTS, LINKS } from '../../../../../mocks/contact.mock';

@Component({
  selector: 'app-contact-content',
  imports: [CommonModule],
  templateUrl: './contact-content.html',
  styleUrl: './contact-content.scss'
})
export class ContactContent {
  /* Variables */
  contacts: Contact[] = CONTACTS
  links: Link[] = LINKS

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
