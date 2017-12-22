This is a fork of https://github.com/simplajs/simpla. Added firebase adapter. Should work with netlify and firebase now.

Steps:
1. Go to firebase console and enable github authentication in Authentication section. Its well documented.
2. Create a git repository as usual(refer Simpla documentation).

The client should now load firebase too. 

```<script src="https://www.gstatic.com/firebasejs/4.8.1/firebase.js"></script>
<script>
      var config = {
        apiKey: "api-key",
        authDomain: "your valu",
        databaseURL: "xxxxx",
        projectId: "xxxxxxxx",
        storageBucket: "xxxxxxx",
        messagingSenderId: "xxxxxxxxxxx"
      };
      firebase.initializeApp(config);

      Simpla.init({

        // The Github repo you want Simpla to use
        repo: 'username/repo',

        // Firebase auth adapter, initialize with your Netlify site name
         auth: new SimplaFirebase(firebase)

      })
 </script>```
 
 The config part is provided by Firebase. Thats it!
