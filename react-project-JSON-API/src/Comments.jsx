import { use } from 'react';
import Comment from './Comment';

export default function Comments({ commentsPromise }) {
  const comments = use(commentsPromise);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 bg-gray-100">
  {
    comments.map(comment => (
      <Comment key={comment.id} comment={comment} />
    ))
  }
</div>
  );
}