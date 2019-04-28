import * as admin from "firebase-admin";
import * as functions from "firebase-functions";

admin.initializeApp();
const firestore = admin.firestore();

const USER_COLLECTION = "users";

exports.createUser = functions.auth.user().onCreate((userRecord, _context) => {
  return firestore
    .collection(USER_COLLECTION)
    .doc(userRecord.uid)
    .set({
      displayName: userRecord.displayName,
      email: userRecord.email,
      admin: false,
    });
});
