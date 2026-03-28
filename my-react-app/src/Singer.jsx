export default function Singer ({singer}) {
  console.log(singer);
  const {name, age} = singer;
  return (
    <div className="singer">
      <h3>Name:{name} </h3>
      <p>Age: {age} </p>
    </div>
  )
}