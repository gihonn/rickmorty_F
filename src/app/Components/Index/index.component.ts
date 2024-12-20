import { Component, OnInit,inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationComponent } from '../Location/location.component';
import { CharacterComponent } from '../Character/character.component';
import { EpisodeComponent } from '../Episode/episode.component';
import { EpisodeService } from '../../Services/episode.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [LocationComponent, CharacterComponent,EpisodeComponent,CommonModule],
  
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],

})
export class IndexComponent implements OnInit {
  episodes: any[] = [];
  selectedEpisode: any;
  charactersList: boolean = false;
  locationsList: boolean = false;
  error: boolean = false;
  private episodeService = inject(EpisodeService);

  ngOnInit(): void {
    this.loadEpisodes();
  }

  loadEpisodes(): void {
    this.episodeService.getEpisodes().subscribe(
      (data: any) => {
        if (data && data.length > 0) {
          this.episodes = data;
          this.error = false;  // Si la carga es exitosa, se limpia el error
        } else {
          console.log('No se encontraron episodios.');
          this.error = true;  // Marca error si no hay episodios
        }
      },
      (error) => {
        console.error('Error en la carga de episodios:', error);
        this.error = true;  // Marca error si ocurre un fallo en la carga
      }
    );
  }

  showEpisodeDetails(episode: any): void {
    this.selectedEpisode = episode;
    this.charactersList = false;
    this.locationsList = false;
  }

  toggleCharacters() {
    this.charactersList = !this.charactersList;
    this.locationsList = false;
  }

  toggleLocations() {
    this.locationsList = !this.locationsList;
    this.charactersList = false;
  }
}
