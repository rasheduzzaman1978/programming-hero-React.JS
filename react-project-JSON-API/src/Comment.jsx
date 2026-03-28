export default function Comment({comment}) {

  console.log(comment);
  const {name, email, id, body} = comment;

  return (
  <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 p-4 border border-gray-200 hover:-translate-y-1 flex flex-col h-full">
  
  <div className="flex items-center justify-between mb-4">
    <span className="bg-blue-100 text-blue-600 text-sm font-semibold px-3 py-1 rounded-full">
      Comment ID: {id}
    </span>
    <span className="text-xs text-gray-400">User Comment</span>
  </div>

  <h3 className="text-xl font-bold text-gray-800 mb-2 min-h-[64px] text-justify">
    {name}
  </h3>

  <p className="text-sm text-gray-500 mb-4 text-left">E-mail: 
    📧 {email}
  </p>

  <div className="bg-gray-50 rounded-xl p-2 border border-gray-100 flex-grow text-justify">
    <p className="text-gray-700 leading-relaxed text-sm">
      {body}
    </p>
  </div>

  <div className="mt-5 flex justify-end">
    <button className="btn btn-sm btn-primary text-white rounded-xl hover:bg-blue-700 transition duration-300 text-sm font-medium">
      View Details
    </button>
  </div>
</div>


  );
}