import Ember from 'ember';
import ToriiFirebaseAdapter from 'emberfire/torii-adapters/firebase';

export default ToriiFirebaseAdapter.extend({
  firebase: Ember.inject.service(),

  fetch(){
    debugger;
    let token = this.get('storage.token');

    if (isEmpty(token)) {
      throw new Error('No token in storage');
    }

    return Ember.RSVP.resolve({ token });
  },

  open(){
    debugger;
  },

  close(){
    debugger;
  }
});
