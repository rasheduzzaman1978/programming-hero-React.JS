export default function Post({post}) {

  const {id, title, body} = post;

  return (
    <div className="card">
    <p>ID: {id}</p>
    <p>Title: {title}</p>
    <p>Body: {body}</p>
    </div>
  )
}