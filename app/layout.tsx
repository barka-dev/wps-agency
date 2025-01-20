import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: {
    default: "WebPackSolution",
    template: "%s | WebPackSolution"
  },
  description: "Your default site description",
  keywords: ["Next.js", "React", "JavaScript"],
  authors: [{ name: "Your Name" }],
  creator: "Your Name",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://your-domain.com",
    title: "Your Site Name",
    description: "Your site description",
    siteName: "Your Site Name",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Your Site Name"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Your Site Name",
    description: "Your site description",
    creator: "@yourhandle",
    images: ["/og-image.jpg"]
  },
  robots: {
    index: true,
    follow: true
  }
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({children}:RootLayoutProps) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
      <div className="text-white bg-black">
        <Header />
        {children}
        <Footer />
      </div>
        
      </body>
    </html>
  );
}
