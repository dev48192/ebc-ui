// hooks/useFirebaseAuth.js
import { useEffect } from "react";
import { auth, onAuthStateChanged } from "../firebase";
import axiosInstance from "../common/axiosxhr";

const useFirebaseAuth = () => {
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const token = await user.getIdToken();
        localStorage.setItem("id_token", token);
        axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      } else {
        localStorage.removeItem("id_token");
        delete axiosInstance.defaults.headers.common["Authorization"];
      }
    });

    return () => unsubscribe();
  }, []);
};

export default useFirebaseAuth;
