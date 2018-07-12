import { Injectable } from '@angular/core';

@Injectable()
export class ApiUrls {

  spotifyApi = 'https://api.spotify.com/';
  spotifyQuerySearch = 'https://api.spotify.com/v1/search?query=';
  spotifyTracksSearch = 'https://api.spotify.com/v1/tracks';
  spotifyArtitsSearch = 'https://api.spotify.com/v1/artists/';
  spotifyAlbumsSearch = 'https://api.spotify.com/v1/albums/';
  logIn='https://accounts.spotify.com/api/token';

}
