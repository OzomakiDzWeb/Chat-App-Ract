import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storge } from "./fairbas";

const upload=async (file)=>{
      const date=new Date()
     const storageRef = ref(storge, `images/${date + file.name}`);
     const uploadTask = uploadBytesResumable(storageRef, file);

return new Promise((resolve,reject)=>{
   uploadTask.on(
  "state_changed",
  (snapshot) => {
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log("Upload is " + progress + "% done");
    
  },
  (error) => {
    // Handle unsuccessful uploads
    reject('somting went wrong?'+ error.code)
  },
  () => {
    // Handle successful uploads on complete
    // For instance, get the download URL: https://firebasestorage.googleapis.com/...
    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
      resolve(downloadURL);
    });
  }
)  
})
}

export default upload;