export default function PageLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<main className="prose dark:prose-invert prose-h1:font-bold prose-img:rounded prose-li:my-1 mx-auto px-2">
				{children}
			</main>
		</>
	);
}
