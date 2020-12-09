import firebase from "./firebaseConfig";

function createUser(data) {
  const dataRef = firebase.database().ref("photographer/" + data.title);
  dataRef.set({
    image_url: data.img,
    location: data.location,
    description: data.description,
    star: data.star,
    price: data.price,
    total: data.total,
  });
}

export default function dataSet() {
  const Photographers = [
    {
      img: "https://i.ibb.co/ZWvKSZH/smarty.png",
      location: "Jaipur",
      title: "Burhanuddin Bohra",
      description: "phorography - videography - event - social - product",
      star: 4.8,
      price: 1500,
      total: "₹90000/ total",
    },
    {
      img: "https://i.ibb.co/LCm9tX6/smarty2.png",
      location: "Jaipur",
      title: "Shubham Bajaj",
      description: "phorography - videography - event - social - product",
      star: 5.0,
      price: 19999,
      total: "₹75999/ total",
    },
    {
      img: "https://i.ibb.co/LCm9tX6/smarty2.png",
      location: "Jaipur",
      title: "Shubhm Bajaj",
      description: "phorography - videography - event - social - product",
      star: 4.0,
      price: 2000,
      total: "₹75999/ total",
    },
    {
      img: "https://i.ibb.co/LCm9tX6/smarty2.png",
      location: "Jaipur",
      title: "Shubham Bajaj",
      description: "phorography - videography - event - social - product",
      star: 3.0,
      price: 3999,
      total: "₹75999/ total",
    },
  ];
  for (let i in Photographers) {
    // console.log(Photographers[i]);
    createUser(Photographers[i]);
  }
}
