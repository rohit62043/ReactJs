import React from 'react';

function Logo() {
    return (
        <div className="flex items-center">
            <svg
                className="w-8 h-8 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
            </svg>
            <span className="text-lg font-bold">BlogApp</span>
        </div>
    );
}

export default Logo;
