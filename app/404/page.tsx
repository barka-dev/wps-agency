import Link from "next/link";

export const metadata = {
    title: "404",  // Will use the template from layout
    description: "404 Page for all our missing pages",
    canonical:"https://your-domain.com/404",
    openGraph: {
        title: "Page Not Found",
        description: "404 Page for all our missing pages",
        url: "https://your-domain.com/404"
    }
};


export default function Contact() {
    return (
        <>
            <div className="flex flex-col justify-center mx-auto mt-8 mb-16 text-center max-w-2x1">
                <h1 className="mb-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
                404 – Unavailable
                </h1>
                <Link
                className="w-64 p-1 mx-auto font-bold text-center text-white border border-gray-500 rounded-lg sm:p-4" href="/">
                Return Home
                </Link>
            </div>
            <div className="mt-96">
                <br></br>
                <div className="mt-52">
                <br></br>
                </div>
            </div>
        </>
    );
}
