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
//import { FIRESTORE_DB, storage } from "../../../firebase/firebase.config";
//import auth from "../firebase/firebase.config.js";
import * as ImagePicker from "expo-image-picker";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
//import { addDoc, collection, onSnapshot } from "firebase/firestore";

export const useImageFunctions = () => {
  const [image, setImage] = useState("");
  const [imageUrl, setImageUrl] = useState();
  const [images, setImages] = useState([]);
  const [imagesUrls, setImagesUrls] = useState([]);
  const [progress, setProgress] = useState("");

  async function uploadImage(uri, fileType) {
    const response = await fetch(uri);
    const blob = await response.blob();

    const storageRef = ref(storage, "Artworks/" + new Date().getTime());
    const uploadTask = uploadBytesResumable(storageRef, blob);

    // listen for events
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        setProgress(progress.toFixed());
      },
      (error) => {
        // handle error
        console.log(error);
        alert("Upload Error : ", error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
          console.log("File available at", downloadURL);
          // save record

          if (imagesUrls.length === 0) {
            const newImagesUrl = [
              ...imagesUrls,
              { imgUrl: downloadURL, default: true },
            ];
            setImageUrl(downloadURL);
            setImagesUrls(newImagesUrl);
            console.log("new imagesUrls 1", imagesUrls);
          } else if (imagesUrls.length === 1) {
            const newImagesUrl = [
              ...imagesUrls,
              { imgUrl: downloadURL, default: false },
            ];
            setImagesUrls(newImagesUrl);
          } else {
            const newImagesUrl = [
              ...imagesUrls,
              { imgUrl: downloadURL, default: false },
            ];
            setImagesUrls(newImagesUrl);
          }
          console.log("new imagesUrls 2", imagesUrls);
        });
      }
    );
  }

  async function pickImage() {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [3, 4],
      quality: 1,
    });

    if (!result.canceled) {
      const source = { uri: result.assets[0].uri };
      if (!image) {
        setImage(source);
      } else {
        const updatedImages = [...images, source];

        setImages(updatedImages);
      }

      await uploadImage(result.assets[0].uri, "image");
    }
  }

  async function pickVideo() {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Videos,
      allowsEditing: true,
      aspect: [3, 4],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      await uploadImage(result.assets[0].uri, "video");
    }
  }

  return { pickImage, uploadImage, image, imagesUrls, images, imageUrl };
};

// Ddefault active selector
