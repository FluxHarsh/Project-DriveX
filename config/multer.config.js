const multer = require('multer');
const firebaseStorage = require('multer-firebase-storage');
const firebase = require('./firebase.config')
const serviceAccount = require('../drivee-95875-firebase-adminsdk-fbsvc-3c845eac85.json')


const storage=firebaseStorage({
    credentials: firebase.credential.cert(serviceAccount),
    bucketName: 'drivee-95875.firebasestorage.app',
    unique: true
}) 

const upload = multer({
    storage: storage,
})

module.exports = upload;
