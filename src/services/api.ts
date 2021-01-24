export default class ApiService {

  _apiBase = 'https://swapi.dev/api/';

  async getData(url: string = '') {
    const res = await fetch(`${this._apiBase}${url}`);
    if (!res.ok) {
      throw new Error('Could not fetch ' + url + 'error code ' + res.status)
    }
    const body = res.json();
    return body;
  }

  async getAllCharacters() {
    const res = await this.getData('people/');
    return res.results;
  }

  getCharacter(id: string) {
    return this.getData(`people/${id}`);
  }

  async getAllStarships() {
    const res = await this.getData('starships/');
    return res.results;
  }

  getStarship(id: string) {
    return this.getData(`starshipse/${id}`);
  }
}
