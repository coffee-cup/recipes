import firebase from "firebase/app";
import * as React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { User } from "../models";

const USER_COLLECTION = "users";

export const loginWithGoogle = async () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  await firebase.auth().signInWithRedirect(provider);
};

export const createUser = async () => {
  const result = await firebase.auth().getRedirectResult();

  if (result != null && result.user != null) {
    const user: User = {
      displayName: result.user.displayName || "anon",
      email: result.user.email || "",
      admin: false,
    };

    const userRef = firebase
      .firestore()
      .collection(USER_COLLECTION)
      .where("email", "==", user.email);

    const doc = await userRef.get();

    if (doc.empty) {
      firebase
        .firestore()
        .collection(USER_COLLECTION)
        .add(user);
    }
  }
};

export const logout = () => {
  firebase.auth().signOut();
};

export const useUser = (): { initialising: boolean; user: User | null } => {
  const [user, setUser] = React.useState<User | null>(null);

  const result = useAuthState(firebase.auth());
  const initialising = result.initialising;
  const auth = result.user;

  React.useEffect(() => {
    const fetchUser = async () => {
      if (initialising || auth == null) {
        setUser(null);
        return;
      }

      const userRef = await firebase
        .firestore()
        .collection(USER_COLLECTION)
        .doc(auth.uid)
        .get();
      const user = userRef.data() as User;

      if (!user) {
        setUser(null);
      }

      setUser(user);
    };

    fetchUser();
  }, [initialising, auth]);

  return {
    initialising,
    user,
  };
};
