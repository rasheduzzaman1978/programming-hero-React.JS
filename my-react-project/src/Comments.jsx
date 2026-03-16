import { use } from 'react';
import Comment from './Comment';

export default function Comments({ commentsPromise }) {
  const comments = use(commentsPromise);

  return (
    <div className="card">
      <h3>Comments: {comments.length}</h3>

      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
}