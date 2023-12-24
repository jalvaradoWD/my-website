'use client';

import gsap from 'gsap';

export default function Home() {
	const onClickAnimation = () => {
		gsap.from('.emoji', {
			rotateZ: 360,
			borderWidth: 10,
			repeat: 1,
			ease: 'expo.in',
		});
	};

	return (
		<main className="bg-gray-900 h-screen">
			<h1 className="text-[4rem] font-bold text-center dark:text-white">
				Hello, world! 🌎
			</h1>
			<button
				className="bg-blue-800 text-white font-bold rounded-md text-3xl p-2 w-[10rem] my-8"
				onClick={onClickAnimation}
			>
				Hello
			</button>
			<div className="emoji text-4xl text-center rounded-full h-[5rem] w-[5rem] flex items-center justify-center">
				🤣
			</div>
		</main>
	);
}
