
import React from 'react';

export const CatIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg 
        {...props}
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
    >
        <path d="M12 5c-2.21 0-4 1.79-4 4 0 1.64.99 3.05 2.39 3.66 M12 5c2.21 0 4 1.79 4 4 0 1.64-.99 3.05-2.39 3.66" />
        <path d="M14.83 15.18A4.017 4.017 0 0112 17a4 4 0 110-8 4 4 0 014.83 2.18" />
        <path d="M9 18c-2.67 0-5-1.33-5-3 0-1.2.9-2.25 2.13-2.75" />
        <path d="M15 18c2.67 0 5-1.33 5-3 0-1.2-.9-2.25-2.13-2.75" />
        <path d="M12 17v2a2 2 0 002 2h0a2 2 0 002-2v-2" />
        <path d="M12 17v2a2 2 0 01-2 2h0a2 2 0 01-2-2v-2" />
        <path d="M10 14s.5-1 2-1 2 1 2 1" />
        <path d="M9 12.5s-1 0-1-1" />
        <path d="M15 12.5s1 0 1-1" />
    </svg>
);
