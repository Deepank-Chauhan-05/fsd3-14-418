const b1 = {
  picUrl= "https://m.media-amazon.com/images/I/518+W2zr3BL._AC_UY327_FMwebp_QL65_.jpg",
  bname: "The Road To Learn React",
  price: 2619,
  quantity: 10,
  rating: 5.0,
}

function Book() {
  return (
    <div>
      <img src="https://m.media-amazon.com/images/I/518+W2zr3BL._AC_UY327_FMwebp_QL65_.jpg" alt="The Road To Learn React"></img>
      <h1>Lets Us React</h1>
      <h2>Price: 765.00</h2>
      <h3>Quantity: 5</h3>
      <h4>Rating: 4.9</h4>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <Book />
      <h1>Hello React</h1>
      <Book />
      <Book />
      <Book />
    </div>
  );
}
