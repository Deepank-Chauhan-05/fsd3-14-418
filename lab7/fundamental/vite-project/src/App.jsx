//function must return single element
//<></> : fragmentis used to group instead of div(only in javascript)

function Hello() {
  return (
    <>
      <h1>Book Name</h1>
      <h2>Book Price</h2>
      <h3>Book Author</h3>
    </>
  );
}

export default function App() {
  return (
    <>
      <h1>Hello React</h1>
      <Hello />
    </>
  );
}
