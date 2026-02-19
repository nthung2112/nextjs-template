import { auth } from "@/lib/auth"; // path to your Better Auth server instance
import { headers } from "next/headers";

export default async function DashboardPage() {
	const session = await auth.api.getSession({
		headers: await headers(), // you need to pass the headers object.
	});

	if (!session?.user) {
		return;
	}
	return (
		<div className="flex min-h-screen flex-col">
			<section className="py-20">
				<div className="container flex flex-col items-center text-center gap-6">
					<h1 className="text-4xl md:text-6xl font-bold tracking-tight max-w-3xl">
						Dashboard Page
					</h1>
					<p className="text-lg text-muted-foreground max-w-2xl">Welcome to your dashboard page.</p>
				</div>
			</section>
		</div>
	);
}
