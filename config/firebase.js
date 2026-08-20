// CONFIGURAÇÃO FIREBASE REALTIME DATABASE

const admin = require("firebase-admin");

const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://morte123-502fd-default-rtdb.firebaseio.com/"
});

const db = admin.database();

module.exports = db;