import React from 'react';
import BackgroundBeamsWithCollision from './BackgroundBeamsWithCollision';

export function BackgroundBeamsWithCollisionDemo() {
	return (
		<BackgroundBeamsWithCollision>
			<h2 className="relative z-20 font-sans text-2xl font-bold tracking-tight text-center text-black md:text-4xl lg:text-7xl dark:text-white">
				What&apos;s cooler than Beams?{' '}
				<div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
					<div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
						<span className="">Exploding beams.</span>
					</div>
					<div className="relative py-4 text-transparent bg-no-repeat bg-clip-text bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500">
						<span className="">Exploding beams.</span>
					</div>
				</div>
			</h2>
		</BackgroundBeamsWithCollision>
	);
}

export default BackgroundBeamsWithCollisionDemo;
