// Book.jsx
export default function Book({ book }) {
  const {name, price} = book;
  return (
    <li className="books">
      <h3>Book's Name: {name}</h3>
      <p>Price: {price} টাকা</p>
    </li>
  );
}