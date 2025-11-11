
import React from 'react';

export const Fog: React.FC = () => {
    return (
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
            <div 
                className="absolute bg-black/30 w-[800px] h-[800px] rounded-full -top-1/4 -left-1/4 filter blur-3xl fog-1"
            ></div>
            <div 
                className="absolute bg-zinc-800/40 w-[1000px] h-[1000px] rounded-full -bottom-1/4 -right-1/4 filter blur-3xl fog-2"
            ></div>
             <div 
                className="absolute bg-amber-900/10 w-[600px] h-[600px] rounded-full bottom-0 left-1/4 filter blur-3xl fog-1"
            ></div>
        </div>
    );
};
