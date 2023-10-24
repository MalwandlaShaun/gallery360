import { useEffect, useState } from "react";
import {
  setDoc,
  doc,
  getDoc,
  getDocs,
  addDoc,
  query,
  where,
  collection,
  onSnapshot,
} from "firebase/firestore";
import { FIRESTORE_DB, storage } from "../firebase/firebase.config";
import auth from "../firebase/firebase.config.js";

export const useFetchExhibition = () => {
  const [exhibionData, setExhibionData] = useState([]);
  const [firebaseExhibition, setFirebaseExhibition] = useState(null);

  useEffect(() => {
    const user = auth.currentUser;
    const colRef = collection(FIRESTORE_DB, "exhibition");

    const q = query(colRef, where("userid", "==", user.uid));

    onSnapshot(q, (querySnapshot) => {
      const collection = [];
      querySnapshot?.docs.forEach((doc) => {
        collection.push({ ...doc.data(), key: doc.id });
      });
      collection.map((item) =>
        exhibionData.push({ value: item.name, key: item.key })
      );
      console.log("exhibionData : ", exhibionData);
      setFirebaseExhibition(collection);
    });
  }, []);

  return { exhibionData, firebaseExhibition };
};