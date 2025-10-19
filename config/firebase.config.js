const Firebase = require('firebase-admin')

const serviceAccount = require('../drivee-95875-firebase-adminsdk-fbsvc-3c845eac85.json')

const firebase = Firebase.initializeApp({
    credential: Firebase.credential.cert(serviceAccount),
    storageBucket: 'drivee-95875.firebasestorage.app'
})

module.exports = Firebase;