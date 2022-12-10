import React from "react";

const Loading = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="relative w-24 h-24 animate-spin rounded-full bg-gradient-to-r from-red-500 via-teal-600 to-red-600 ">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gray-200 rounded-full border-2 border-white"></div>
            </div>
        </div>
    );
};

export default Loading;
