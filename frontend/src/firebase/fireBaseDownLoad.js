import { useEffect, useState } from "react";
import firebase from "firebase/compat/app";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
const firebaseDownLoad = ()=> {
const [ImagesUrls, setImageUrls] = useState([]);
  useEffect(() => {
    const storage = getStorage(firebase.app());
    const storageRef = ref(storage, "Event");

    Promise.all([
      getDownloadURL(ref(storageRef, "2023서울국제주류,와인박람회.png"))
    ])
    .then((urls) => {
        setImageUrls(urls);
      })
    .catch((error) => {
        console.log(error);
      });
  }, []);

  return(
    <></>
  );
};
export default firebaseDownLoad;