"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();
exports.createClientAccount = functions.firestore
    .document('/userProfile/{userId}/clientList/{clientId}')
    .onCreate((snap, context) => __awaiter(this, void 0, void 0, function* () {
    return admin
        .auth()
        .createUser({
        uid: context.params.clientId,
        email: snap.data().email,
        password: '123456789',
        displayName: snap.data().fullName,
    })
        .then(userRecord => {
        return admin
            .database()
            .ref(`/userProfile/${userRecord.uid}`)
            .set({
            fullName: userRecord.displayName,
            email: userRecord.email,
            coachId: context.params.userId,
            admin: false,
            startingWeight: snap.data().startingWeight,
        });
    })
        .catch(error => {
        console.log('Error creating new user:', error);
    });
}));
//# sourceMappingURL=index.js.map