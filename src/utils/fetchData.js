import firebase from "./firebaseConfig";

export default function getData() {
  let data = [];
  let photographer = [];
  const dataRef = firebase.database().ref("photographer");
  dataRef.on("value", (snapshot) => {
    data = snapshot.val();
  });
  for (let i in data) {
    photographer.push({
      img: data[i].image_url,
      location: data[i].location,
      title: i,
      description: data[i].description,
      star: data[i].star,
      price: data[i].price,
      total: data[i].total,
    });
  }
  return photographer;
}
