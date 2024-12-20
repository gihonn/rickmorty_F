import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes'; // Importa las rutas definidas
import { AppComponent } from './app/app.component'; // Importa el AppComponent

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),  // Proveemos el HttpClient
    provideRouter(routes)
    
  ],
}).catch((err) => console.error(err)); 