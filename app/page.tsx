import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRight, ShieldCheck } from "lucide-react";

export default async function page() {
	return (
		<div className="flex min-h-screen flex-col">
			{/* Hero section */}
			<section className="py-20">
				<div className="container flex flex-col items-center text-center gap-6">
					<ShieldCheck size={64} className="text-primary" />
					<h1 className="text-4xl md:text-6xl font-bold tracking-tight max-w-3xl">Homepage</h1>
					<p className="text-lg text-muted-foreground max-w-2xl">Welcome to your homepage.</p>
					<div className="flex gap-4 mt-4">
						<Link href="/login">
							<Button size="lg" variant="outline">
								Try Login
							</Button>
						</Link>
					</div>
				</div>
			</section>
		</div>
	);
}
