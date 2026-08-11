import { MoveRight } from "lucide-react";
import Link from "next/link";

export default function NotFoundPage() {
    return (
        <main className="min-h-[calc(100vh-80px)] flex flex-col justify-center items-center text-center space-y-5 px-4">

            <h2 className="text-9xl text-gradient font-extrabold">404</h2>
            <p className="max-w-80 text-slate-500">The page you are looking for might have been removed or the link is incorrect.</p>
            <Link href="/" className="px-8 py-2.5 rounded-full btn-gradient flex gap-1">
                Go to Home <MoveRight />
            </Link>

        </main>
    )
} 