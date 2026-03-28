// Library.jsx
import Book from './Book';

export default function Library({ books }) {
  return (
    <div className="library">
      <h2>My National Central Library</h2>
      
      <p>Total Books: {books.length}</p>

      {books.length === 0 ? (
        <p>No books available right now.</p>
      ) : (
        <ul>
          {books.map(book => (
            <Book 
              key={book.id}
              book={book}
            />
          ))}
        </ul>
      )}
    </div>
  );
}