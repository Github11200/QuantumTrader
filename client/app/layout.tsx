import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { Lexend } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";

const lexend = Lexend({
	subsets: ["latin"],
	weight: ["400"],
	variable: "--font-lexend",
});

const fontSans = FontSans({
	subsets: ["latin"],
	variable: "--font-sans",
});

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={cn(
					"min-h-screen bg-background font-sans antialiased dark lexend",
					lexend.variable
				)}
			>
				{children}
			</body>
		</html>
	);
}
