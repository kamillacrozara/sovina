import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    signIn(user) {
      this.get('session').open('firebase', {
        provider: "password",
        email: user.email || '',
        password: user.password || '',
      }).then(() => {
        this.transitionTo('/');
      }).catch((err) => {
        this.get('notify').error('E-mail ou senha inválidos');
        console.log(err);
      });
    }
  }
});
