export default class FirebaseAuth{
  constructor(firebase){
    this.firebase = firebase;
  }

  authenticate(){
    var provider = new this.firebase.auth.GithubAuthProvider();
    provider.addScope('repo');
    provider.addScope('administration');
    return this.firebase.auth().signInWithPopup(provider).then(function(result) {
      var token = result.credential.accessToken;
      return {token};
    }).catch(function(error) {
      return {error};
    });
  }
}