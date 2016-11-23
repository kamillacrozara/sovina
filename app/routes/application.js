import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel() {
    this.get('session').fetch().then(()=>{
      this.transitionTo('dashboard');
    }).catch((err) => {
      this.transitionTo('sign-in');
    });
  },

  actions: {
    signOut() {
      this.get('session').close();
      this.transitionTo('sign-in');
    },

    accessDenied(){
      this.transitionTo('sign-in');
    }
  }
});
