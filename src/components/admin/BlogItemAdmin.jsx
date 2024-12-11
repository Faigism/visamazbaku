const BlogItemAdmin = ({ blog, onEdit, onDelete }) => {
  const maxSummaryLength = 100 // Maksimum simvol sayı
  const truncatedSummary =
    blog.summary.length > maxSummaryLength
      ? `${blog.summary.slice(0, maxSummaryLength)}...`
      : blog.summary

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-cyan-800">
          {blog.title}
        </h3>
        <p className="text-gray-700 mb-4">{truncatedSummary}</p>
        <div className="text-gray-500 text-sm">{blog.date}</div>
        <div className="flex space-x-2 mt-4">
          <button
            onClick={() => onEdit(blog)}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Edit
          </button>
          <button
            onClick={() => {
              const confirmed = window.confirm(
                'Silmək istədiyinizdən əminsiniz?'
              )
              if (confirmed) {
                onDelete(blog.id, blog.type)
              }
            }}
            className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  )
}

export default BlogItemAdmin
