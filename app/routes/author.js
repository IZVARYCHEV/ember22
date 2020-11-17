import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
//import { timeStamp } from 'console';

export default class AuthorRoute extends Route {
    @service dataService;

    async model() {
        return this.dataService.readAuthors();
    }
}
