import firebase from "firebase/app";
import { useAuthState } from "react-firebase-hooks/auth";

export const loginWithGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithRedirect(provider);
};

export const logout = () => {
  firebase.auth().signOut();
};

export const useUser = () => useAuthState(firebase.auth());
