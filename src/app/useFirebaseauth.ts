import { useEffect } from "react";
import axios from "axios";
import { auth, onAuthStateChanged } from "../firebase";

const useFirebaseAuth = () => {
  useEffect(() => {
    
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const token = await user.getIdToken();
        localStorage.setItem("id_token", token);
      } else {
        localStorage.removeItem("id_token");
      }
    });

    return () => unsubscribe();
  }, []);
};

export default useFirebaseAuth;
