import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class downloadCVService {
  /* Costruttore della classe service */
  constructor(private http: HttpClient) { }

  /* Scarica il cv */
  async downloadCV(): Promise<void> {
    try {
      const blob = await firstValueFrom(this.http.get('assets/Cv_Alessio_Fischetti.pdf', { responseType: 'blob' }));
      const blobUrl = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = 'Cv-Alessio_Fischetti.pdf';
      link.click();
      window.URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error('Errore nel download:', error);
    }
  }

  /* Scarica l' about me */
  async downloadAboutMe(): Promise<void> {
    try {
      const blob = await firstValueFrom(this.http.get('assets/About_me.pdf', { responseType: 'blob' }));
      const blobUrl = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = 'About Me Alessio Fischetti.pdf';
      link.click();
      window.URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error('Errore nel download:', error);
    }
  }
}
