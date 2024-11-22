import React from 'react'

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = []

  for (let i = 1; i <= totalPages; i++) {
    if (
      i === 1 ||
      i === totalPages ||
      (i >= currentPage - 1 && i <= currentPage + 1)
    ) {
      pageNumbers.push(i)
    } else if (
      (i === currentPage - 2 || i === currentPage + 2) &&
      pageNumbers[pageNumbers.length - 1] !== '...'
    ) {
      pageNumbers.push('...')
    }
  }

  return (
    <nav className="flex justify-center items-center mt-8 space-x-2">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`px-3 py-1 rounded-lg border transition-all ${
          currentPage === 1
            ? 'border-gray-300 text-gray-400'
            : 'border-gray-300 text-gray-600 hover:border-blue-500 hover:text-blue-500'
        }`}
      >
        ﹤
      </button>

      {pageNumbers.map((number, index) =>
        number === '...' ? (
          <span key={`ellipsis-${index}`} className="px-2 text-gray-500">
            ...
          </span>
        ) : (
          <button
            key={`page-${number}-${index}`}
            onClick={() => onPageChange(number)}
            className={`px-3 py-1 rounded-lg border transition-all ${
              currentPage === number
                ? 'bg-blue-500 text-white border-blue-500 shadow-md'
                : 'border-gray-300 text-gray-600 hover:border-blue-500 hover:text-blue-500'
            }`}
          >
            {number}
          </button>
        )
      )}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`px-3 py-1 rounded-lg border transition-all ${
          currentPage === totalPages
            ? 'border-gray-300 text-gray-400'
            : 'border-gray-300 text-gray-600 hover:border-blue-500 hover:text-blue-500'
        }`}
      >
        ﹥
      </button>
    </nav>
  )
}

export default Pagination
