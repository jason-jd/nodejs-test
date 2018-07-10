const functions = require('firebase-functions');
// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require('firebase-admin');
const cors = require('cors')({origin: true});
admin.initializeApp();




// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

exports.addMessage = functions.https.onRequest((req, res) => {
    cors(req, res, ()=>{
    const original = req.query.original;
    // return admin.database().ref('/messages').push(original).then((snapshot) => {
      // return res.redirect(303, snapshot.ref.toString());
      return res.status(200).html({
        message: original
      })
    // });
    
    })
});
  