import FirebaseAdapter from 'emberfire/adapters/firebase';

export default FirebaseAdapter.extend({
  beforeModel() {
    this.get('session').fetch().catch((err) => {
      console.log(err);
    });
  }
});
