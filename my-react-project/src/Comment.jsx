export default function Comment({comment}) {

  console.log(comment);
  const {name, email, id, body} = comment;

  return (
    <div className="card">
      <h4>Comments ID: {id} </h4>
      <h4>Name: {name} </h4>
      <h4>Email: {email} </h4>
      <h4>Body: {body} </h4>
     
    </div>
  );
}