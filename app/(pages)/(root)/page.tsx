"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useCallback, useEffect } from "react";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";

const Dongguan = "/assets/Dongguan1.png";
import Hero from "./_components/hero";

export default function Home() {
	const [open, setOpen] = React.useState(false);
	const fullscreenRef = React.useRef(null);

	const handleClick = useCallback(() => {
		setOpen(true);
	}, []);
	const handleEnterFullscreen = useCallback(() => {
		if (fullscreenRef.current) {
			(fullscreenRef.current as any).enter();
		}
	}, []);
	//useEffect(() => { setOpen(false); }, []);

	return (
		<>
			<Hero />
			<main className="flex min-h-screen flex-col items-center p-24 bg-gray-800">
				<div className="text-4xl font-bold text-gray-200"></div>
				<div className="max-w-3/4"></div>

				<button className="text-4xl font-bold text-gray-200" type="button" onClick={() => setOpen(true)}>
					东莞地铁
				</button>
				<Image
					className="rounded-3xl"
					width={500}
					height={500}
					src={Dongguan}
					alt="Dongguan"
					onClick={handleClick}
				/>

				<Lightbox
					open={open}
					close={() => setOpen(false)}
					slides={[{ src: Dongguan }, { src: Dongguan }, { src: Dongguan }]}
					plugins={[Zoom, Fullscreen]}
					fullscreen={{ ref: fullscreenRef }}
					on={{ click: handleEnterFullscreen }}
				/>

				{/*<div className="flex justify-center items-center gap-8">
					<Button variant="destructive" size="lg">
						large button
					</Button>
					<Button variant="outline" size="lg">
						large button
					</Button>
				</div>
				<div className="flex justify-center items-center gap-8">
					<Button variant="link" size="lg">
						link button
					</Button>
				</div>
				 <Button variant="myButton">My Button</Button> */}
			</main>
		</>
	);
}

//<Image className="rounded-3xl" src={Dongguan} alt="Dongguan" onClick={handleClick} />
//const Dongguan = "/Dongguan1.png";
//import Dongguan from "../assets/Dongguan1.png";
//const Dongguan = Dongguan1.src;

//<Viewer visible={visible} onClose={handleClose} images={[{ src: Dongguan, alt: "Dongguan" }]} />
