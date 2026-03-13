// Book.jsx
export default function Book({ name, price }) {
  return (
    <li className="books">
      <h3>{name}</h3>
      <p>Price: {price} টাকা</p>
    </li>
  );
}