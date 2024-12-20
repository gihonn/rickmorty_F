import { Component, OnInit, Input } from '@angular/core';
import { EpisodeService } from '../../Services/episode.service';
import { LocationComponent } from '../Location/location.component';
import { CharacterComponent } from '../Character/character.component';

@Component({
  selector: 'app-episode',
  imports:[LocationComponent,CharacterComponent],
  standalone: true,
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.css']
})
export class EpisodeComponent implements OnInit {
  @Input() episode: any;
  characters: any[] = [];
  locations: any[] = [];

  constructor(private episodeService: EpisodeService) {}

  ngOnInit(): void {
    this.loadEpisodeDetails();
  }

  loadEpisodeDetails(): void {
    this.episode.characters.forEach((characterUrl: string) => {
      const characterId = this.extractIdFromUrl(characterUrl);
      this.episodeService.getCharacter(characterId).subscribe(character => {
        this.characters.push(character);
      });
    });

    this.episode.locations.forEach((locationUrl: string) => {
      const locationId = this.extractIdFromUrl(locationUrl);
      this.episodeService.getLocation(locationId).subscribe(location => {
        this.locations.push(location);
      });
    });
  }

  private extractIdFromUrl(url: string): number {
    const parts = url.split('/');
    return +parts[parts.length - 1];
  }
}
