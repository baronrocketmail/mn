// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import Nav from "./components/Nav";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, onSnapshot, addDoc, deleteDoc, doc, getDocs } from "firebase/firestore"

export async function getStaticProps() {

    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries

    // Your web app's Firebase configuration
    const firebaseConfig = {
        apiKey: "AIzaSyCpn2zaQa9Sy1_m1lHOgvghC4mu69hO7EM",
        authDomain: "version3-45a84.firebaseapp.com",
        projectId: "version3-45a84",
        storageBucket: "version3-45a84.appspot.com",
        messagingSenderId: "412870594426",
        appId: "1:412870594426:web:eca010a627f3ba737750c3"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

    const db = getFirestore()

    const colRef = collection(db,'payments')
    let unpaid = [];
    await getDocs(colRef).then(snapshot => {
        snapshot.docs.forEach(doc => {
            unpaid.push({...doc.data(), id: doc.id});
        })
    })
    return {
        props: { unpaid}
    }
}

export default function Home(props) {
    let elementsArgs = [["929 lee avenue", "/", "title"], ["autopay","/autopay","autopay"]]
     for (let i in props.unpaid) {
         elementsArgs.push([props.unpaid[i].name, props.unpaid[i].url, "unpaid"])
     }
     elementsArgs.push(["...", "/log", "log"])


    console.log(props.unpaid)
  return (
      <div>
        <Nav elements = {elementsArgs}/>
      </div>
  )
}
