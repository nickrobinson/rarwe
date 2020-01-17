import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  router: service(),

  model(params) {
    let bands = this.modelFor('bands')
    return bands.find(band => band.slug === params.slug);
  },
});
