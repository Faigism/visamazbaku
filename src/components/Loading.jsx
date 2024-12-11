const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="flex space-x-2">
        {/* İlk Yumru */}
        <div
          className="w-4 h-4 bg-blue-500 rounded-full animate-wave"
          style={{ animationDelay: '0s' }}
        ></div>
        {/* İkinci Yumru */}
        <div
          className="w-4 h-4 bg-blue-500 rounded-full animate-wave"
          style={{ animationDelay: '0.2s' }}
        ></div>
        {/* Üçüncü Yumru */}
        <div
          className="w-4 h-4 bg-blue-500 rounded-full animate-wave"
          style={{ animationDelay: '0.4s' }}
        ></div>
        {/* Dördüncü Yumru */}
        <div
          className="w-4 h-4 bg-blue-500 rounded-full animate-wave"
          style={{ animationDelay: '0.6s' }}
        ></div>
      </div>
    </div>
  )
}
export default Loading
