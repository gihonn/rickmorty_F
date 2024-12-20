import { inject,Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class EpisodeService {
  private apiUrl = 'http://localhost:5245/api';
  private http = inject(HttpClient);

    // Obtener todos los episodios
  getEpisodes(): Observable<any> {
    return this.http.get(`${this.apiUrl}/Episode`).pipe(
      catchError(error => {
        console.error('Error al cargar los episodios', error);
        return of([]);  // Devuelve un array vacío en caso de error
      })
    );
  }

  // Obtener un episodio específico por su ID
  getEpisode(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/Episode/${id}`).pipe(
      catchError(error => {
        console.error(`Error al cargar el episodio con ID: ${id}`, error);
        return of(null);  // Devuelve null en caso de error
      })
    );
  }

  // Obtener un personaje por su ID
  getCharacter(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/Character/${id}`).pipe(
      catchError(error => {
        console.error(`Error al cargar el personaje con ID: ${id}`, error);
        return of(null);  // Devuelve null en caso de error
      })
    );
  }

  // Obtener una ubicación por su ID
  getLocation(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/Location/${id}`).pipe(
      catchError(error => {
        console.error(`Error al cargar la ubicación con ID: ${id}`, error);
        return of(null);  // Devuelve null en caso de error
      })
    );
  }
}
