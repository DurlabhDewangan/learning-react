import React, { useState, useEffect } from "react";

function DogViewer() {
  const [dogImage, setDogImage] = useState('');
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => {
        setDogImage(data.message);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching dog image:', err);
        setIsLoading(false);
      });
  }, [count]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="p-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">
              🐶 Random Dog Viewer
            </h1>
            
            <button
              onClick={() => setCount(count + 1)}
              disabled={isLoading}
              className={`px-6 py-3 rounded-full font-medium text-white shadow-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
                isLoading
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700'
              }`}
            >
              {isLoading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Loading...
                </span>
              ) : (
                'Show Another Dog'
              )}
            </button>
            <div className="mt-8 rounded-lg overflow-hidden shadow-xl">
  {dogImage ? (
    <img 
      src={dogImage} 
      alt="Random Dog" 
      className={`w-full h-80 sm:h-96 md:h-[32rem] object-cover transition-opacity duration-500 ${
        isLoading ? 'opacity-50' : 'opacity-100'
      }`}
    />
  ) : (
    <div className="flex items-center justify-center h-80 sm:h-96 md:h-[32rem] bg-gray-100">
      <p className="text-gray-500">No dog to display</p>
    </div>
  )}
</div>
            
            <div className="mt-6 text-sm text-gray-500">
              Clicked {count} time{count !== 1 ? 's' : ''}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DogViewer;