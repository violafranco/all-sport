// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, getDocs, collection, doc, getDoc, query, where, addDoc } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFhlgDVR8cmFNKoYIXoXlTMCVx5FzVp8s",
  authDomain: "all-sport-965f2.firebaseapp.com",
  projectId: "all-sport-965f2",
  storageBucket: "all-sport-965f2.appspot.com",
  messagingSenderId: "171297914326",
  appId: "1:171297914326:web:7b3280e2a90d1f6277f877"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const DB = getFirestore(app);

export function testFirebase() {
    console.log(app);
}

export async function getItems() {
  try {
  //conectarse a la colección
  const collectionProductos = collection(DB, 'productos');
  //traigo todos los productos
  let respuesta = await  getDocs(collectionProductos);
  //extraemos los datos y los retornamos
  const products = respuesta.docs.map((docu) => {
    return {
      id: docu.id,
      ...docu.data()
    };
  })
  return products;}
  catch(error){
    alert('error')
  }
}

export async function getSingleItems(id) {
  const docRef = doc(DB, "productos", id);
  const docSnap = await getDoc(docRef);

  if(docSnap.exists()){
    return ({
      ...docSnap.data(),
      id: docSnap.id
    })
  } else {
    console.log('el producto no existe');
  }

}

export async function getItemsByCategory(categoryId) {
  const q = query(collection(DB, "productos"), where('category', '==', categoryId));

  const productsSnapshot = await getDocs(q);

  const products = productsSnapshot.docs.map((docu) => {
    return {
      ...docu.data(),
      id: docu.id
    };
  })
  return products;
}

export async function createBuyOrderFirestore(buyOrderData) {
  const collectionRef = collection(DB, "buyorders");
  const docRef = await addDoc(collectionRef, buyOrderData);
  
  return(docRef.id)
}

// para importar los items
// va en el App -> <button onClick={exportItems}>exportar item</button>
export async function exportItems() {
  const products = [
    {
        id: 1,
        title: 'Nike MC Trainer 2',
        price: 22000,
        stock: 20,
        description: 'Las mejores zapatillas para running',
        category: 'zapatilla',
        description: 'Zapatilla ideal para aquellos deportistas de elite',
        image: 'https://static.nike.com/a/images/t_default/174d2928-8bf4-4363-950d-31a849e09d45/air-zoom-pegasus-39-zapatillas-de-running-asfalto-rZmWzq.png'
    },
    {
        id: 2,
        title: 'Nike Legend Essential 3',
        price: 25000,
        stock: 5,
        description: 'Las mejores zapatillas para running',
        category: 'zapatilla',
        image: 'https://static.nike.com/a/images/t_default/57dd56da-b069-4c63-bece-4810c1067215/air-zoom-pegasus-39-zapatillas-de-running-asfalto-rZmWzq.png'
    },
    {
        id: 3,
        title: 'Nike Air Force 1',
        price: 35000,
        stock: 8,
        description: 'Las mejores zapatillas urbanas',
        category: 'zapatilla',
        image: 'https://static.nike.com/a/images/t_default/e777c881-5b62-4250-92a6-362967f54cca/air-force-1-07-zapatillas-QxRXZV.png'
    },
    {
        id: 4,
        title: 'Nike Air Zoom Pegasus',
        price: 18000,
        stock: 12,
        description: 'Las mejores zapatillas para running',
        category: 'zapatilla',
        image: 'https://static.nike.com/a/images/t_default/6314b470-5c14-47ce-b350-e7e4930618e7/calzado-de-running-de-carretera-air-zoom-pegasus-39-d4dvtm.png'
    },
    { 
        id: 5,
        title: 'Nike Air Max Impact',
        price: 45000,
        stock: 6,
        description: 'Las mejores zapatillas para running',
        category: 'zapatilla',
        image: 'https://static.nike.com/a/images/t_default/ea681251-cd25-44ec-a097-6cf980cb23a1/air-max-impact-4-zapatillas-de-baloncesto-XRZ3WB.png'
    },
    { 
        id: 6,
        title: 'Remera Nike runing mujer',
        price: 12000,
        stock: 8,
        description: 'Remera ultraligera para hacer deporte',
        category: 'remera',
        image: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/312/744/products/mujer-rojo1-9e5e784f8c2342476a16560080073710-1024-1024.png'
    },
    { 
        id: 7,
        title: 'Remera Nike runing hombre',
        price: 11000,
        stock: 12,
        description: 'Remera ultraligera para hacer deporte',
        category: 'remera',
        image: 'http://d3ugyf2ht6aenh.cloudfront.net/stores/951/243/products/remera-nike-lentic1-f5745a1e4cd200fb2216565904554124-640-0.png'
    },
    { 
        id: 8,
        title: 'Camiseta River Plate 2022',
        price: 17000,
        stock: 9,
        description: 'Remera del mejor club de Argentina',
        category: 'remera',
        description: 'La remera del club m{as grande de America',
        image: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/312/744/products/fcghjkolp1-4d96006ef3f313f21916438145428453-1024-1024.png'
    },
    { 
        id: 9,
        title: 'Pelota de basket Molten 7',
        price: 22000,
        stock: 2,
        description: 'Pelota ideal para jugar al basket',
        category: 'pelota',
        image: 'https://hoopshoes.net/wp-content/uploads/2022/01/Balon-de-Basquetbol-Molten-BG50007.png'
    },
    { 
        id: 10,
        title: 'Pelota de fútbol mundial 2022',
        price: 38000,
        stock: 20,
        description: 'Pelota ideal para jugar al fútbol',
        category: 'pelota',
        image: 'https://casacaslucholass.com/wp-content/uploads/2022/03/Balon-adidas-Al-Rihla-FIFA-World-Cup-Qatar-2022-Casacas-LuchoLasS.png'
    }
  ];

  const collectionRef = collection(DB, "productos");

  for (let item of products) {
    delete item.id;
    const docRef = await addDoc(collectionRef, item);
    console.log('item id:', docRef.id);
  }

}