
import React, { useState } from 'react';
import { Fog } from './components/Fog';
import { CatIcon } from './components/CatIcon';
import { JamesIcon } from './components/JamesIcon';
import { HeartIcon } from './components/HeartIcon';

interface SceneProps {
  onNext: () => void;
}

const IntroScene: React.FC<SceneProps> = ({ onNext }) => (
  <div className="text-center">
    <h1 className="text-4xl md:text-5xl font-bold text-stone-100 mb-4 font-special tracking-wider">For Yana</h1>
    <p className="text-stone-300 mb-8">A little journey of support awaits you.</p>
    <button onClick={onNext} className="bg-amber-500 hover:bg-amber-600 text-stone-900 font-bold py-3 px-8 rounded-full transition-transform duration-300 transform hover:scale-105">
      Begin
    </button>
  </div>
);

const SimbaIntroScene: React.FC<SceneProps> = ({ onNext }) => (
  <div className="text-center flex flex-col items-center">
    <CatIcon className="w-24 h-24 mb-4 text-stone-300"/>
    <h2 className="text-3xl font-bold text-stone-100 mb-4">A furry friend is thinking of you</h2>
    <p className="text-stone-300 max-w-md mb-8">Your best friend, Simba, is sending you the loudest purrs for tomorrow. He can't wait for you to come home to rest and recover.</p>
    <button onClick={onNext} className="bg-stone-200 hover:bg-white text-stone-800 font-bold py-2 px-6 rounded-full transition duration-300">
      Next
    </button>
  </div>
);

const JamesNoteScene: React.FC<SceneProps> = ({ onNext }) => (
    <div className="text-center flex flex-col items-center max-w-lg">
        <JamesIcon className="w-28 h-28 mb-4 text-stone-400" />
        <h2 className="text-3xl font-bold text-stone-100 mb-4 font-special tracking-wider">Through the Fog</h2>
        <div className="bg-stone-200/90 p-6 rounded-md shadow-lg border border-stone-400">
            <p className="font-special text-stone-800 text-lg leading-relaxed text-center">
                Drawing strength from resilient characters like James Sunderland, remember you have the power to face any challenge.
                <br/><br/>
                Every step, even through a fog of uncertainty, is a step towards healing. You are not alone on this path.
            </p>
        </div>
        <button onClick={onNext} className="mt-8 bg-stone-200 hover:bg-white text-stone-800 font-bold py-2 px-6 rounded-full transition duration-300">
            Next
        </button>
    </div>
);


const SimbaOutroScene: React.FC<SceneProps> = ({ onNext }) => (
  <div className="text-center flex flex-col items-center">
    <CatIcon className="w-24 h-24 mb-4 text-stone-300"/>
    <h2 className="text-3xl font-bold text-stone-100 mb-4">Someone's Waiting</h2>
    <p className="text-stone-300 max-w-md mb-8">Simba is already prepping the couch for maximum post-op comfort. A full recovery plan of purrs, cuddles, and zero judgment for binge-watching shows all day is waiting for you.</p>
    <button onClick={onNext} className="bg-stone-200 hover:bg-white text-stone-800 font-bold py-2 px-6 rounded-full transition duration-300">
      Almost there...
    </button>
  </div>
);

const FinalScene: React.FC<{onRestart: () => void}> = ({ onRestart }) => (
    <div className="text-center flex flex-col items-center">
        <HeartIcon className="w-20 h-20 mb-4 text-amber-400"/>
        <h2 className="text-4xl font-bold text-stone-100 mb-4">You've got this, Yana!</h2>
        <p className="text-stone-300 max-w-md mb-8">Sending you all our love and strength for tomorrow. We can't wait to see you and celebrate your recovery.</p>
        <button onClick={onRestart} className="bg-amber-500 hover:bg-amber-600 text-stone-900 font-bold py-3 px-8 rounded-full transition-transform duration-300 transform hover:scale-105">
            Start Over
        </button>
    </div>
);

export default function App() {
  const [scene, setScene] = useState(0);

  const scenes = [
    <IntroScene onNext={() => setScene(1)} />,
    <SimbaIntroScene onNext={() => setScene(2)} />,
    <JamesNoteScene onNext={() => setScene(3)} />,
    <SimbaOutroScene onNext={() => setScene(4)} />,
    <FinalScene onRestart={() => setScene(0)} />,
  ];

  return (
    <main className="relative w-full h-screen bg-zinc-900 text-white overflow-hidden flex items-center justify-center p-4">
      <Fog />
      <div className="relative z-10 w-full flex items-center justify-center">
        <div key={scene} className="animate-fade-in">
          {scenes[scene]}
        </div>
      </div>
       <footer className="absolute bottom-4 text-center w-full z-10 text-stone-500 text-sm">
            Made with ❤️ to support our wonderful friend.
        </footer>
    </main>
  );
}
