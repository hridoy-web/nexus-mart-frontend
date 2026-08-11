import { MoveRight } from "lucide-react";
import Link from "next/link";

export default function NotFoundPage() {
    return (
        <main className="min-h-[calc(100vh-80px)] flex flex-col justify-center items-center text-center space-y-5 px-4">

            <h2 className="text-9xl text-gradient font-extrabold hover:scale-105 transition-all duration-500">404</h2>
            <p className="max-w-90 text-slate-500">The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
            <Link href="/" className="group px-8 py-2.5 rounded-full btn-gradient flex gap-1 items-center">
                Go to Home <MoveRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>

        </main>
    )
} 