import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Contact, Link } from '../../../../interfaces/contact-interface';
import { CONTACTS, LINKS } from '../../../../../mocks/contact.mock';
import { LanguageService } from '../../../../../service/language-service';

@Component({
  selector: 'app-contact-content',
  imports: [CommonModule],
  templateUrl: './contact-content.html',
  styleUrl: './contact-content.scss'
})
export class ContactContent {
  language: any;
  /* Variables */
  contacts: Contact[] = CONTACTS
  links: Link[] = LINKS

  constructor(private langService: LanguageService) { }

  ngOnInit() {
    this.langService.language$.subscribe(() => {
      this.language = this.langService.words;
    });
  }

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
