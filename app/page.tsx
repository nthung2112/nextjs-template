import { auth } from "@/lib/auth"; // path to your Better Auth server instance
import { headers } from "next/headers";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { ChevronRight, Lock, ShieldCheck } from "lucide-react";

export default async function page() {
	const session = await auth.api.getSession({
		headers: await headers(),
	});

	return (
		<div className="flex min-h-screen flex-col">
			{/* Navigation */}
			<header className="border-b">
				<div className="container  flex h-16 items-center justify-between">
					<div className="flex items-center ">
						<span className="font-bold text-xl">Next.js Template</span>
					</div>
					<nav className="flex items-center gap-6">
						<div className="flex items-center gap-2">
							<ModeToggle />
							{session?.user ? (
								<a href="/dashboard">
									<Button variant="outline" size="sm">
										Dashboard
									</Button>
								</a>
							) : (
								<>
									<Link href="/login">
										<Button variant="outline" size="sm">
											Log in
										</Button>
									</Link>
									<Link href="/signup">
										<Button size="sm">Sign up</Button>
									</Link>
								</>
							)}
						</div>
					</nav>
				</div>
			</header>

			{/* Hero section */}
			<section className="py-20">
				<div className="container flex flex-col items-center text-center gap-6">
					<ShieldCheck size={64} className="text-primary" />
					<h1 className="text-4xl md:text-6xl font-bold tracking-tight max-w-3xl">
						Next.js Template
					</h1>
					<p className="text-lg text-muted-foreground max-w-2xl">
						Next.js + Tailwind CSS + Better Auth + Drizzle Starter Kit is a complete template for
						your Next.js projects, and styled with Shadcn UI components.
					</p>
					<div className="flex gap-4 mt-4">
						<a target="_blank" href="https://github.com/nthung2112/nextjs-template">
							<Button size="lg" className="gap-2">
								Clone Repository <ChevronRight size={18} />
							</Button>
						</a>
						<Link href="/login">
							<Button size="lg" variant="outline">
								Try Demo
							</Button>
						</Link>
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer className="border-t py-10 mt-auto">
				<div className="container flex flex-col md:flex-row justify-between items-center gap-6">
					<div className="flex items-center gap-2">
						<Lock size={20} className="text-primary" />
						<span className="font-bold">Next.js Template</span>
					</div>
					<div className="text-sm text-muted-foreground">
						© {new Date().getFullYear()} nthung2112
					</div>
				</div>
			</footer>
		</div>
	);
}
