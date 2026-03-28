export default function Friend({friend}) {

  console.log(friend);
  const {name, email, username, website, phone} = friend;
  return (
    <div className="card">
      <h4>Name: {name} </h4>
      <h4>Email: {email} </h4>
      <h4>Username: {username} </h4>
      <h4>Website: {website} </h4>
      <h4>Phone: {phone} </h4>
    </div>
  )
}