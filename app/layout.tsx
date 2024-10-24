import "../styles/global.css";
import localFont from "next/font/local";
import dynamic from "next/dynamic";
import { Navbar } from "../components/organisms/nav";
import Head from "next/head";

// Dynamically import Analytics and SpeedInsights for better performance
const Analytics = dynamic(() => import("@vercel/analytics/react").then((mod) => mod.Analytics), {
  ssr: false,
  loading: () => <p></p>,
});

const SpeedInsights = dynamic(() => import("@vercel/speed-insights/next").then((mod) => mod.SpeedInsights), {
  ssr: false,
  loading: () => <p></p>,
});
// Import fonts using localFont
const geistSans = localFont({
  src: "../public/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "../public/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Combine metadata
const cx = (...classes: string[]) => classes.filter(Boolean).join(" ");

export default function RootLayout({
  
  children,
}: {
  children: React.ReactNode;
}) {
  // For client-side usage

  return (
    <html
      lang="en"
      className={cx(
        "text-black bg-white dark:text-white dark:bg-black",
        geistSans.variable, // Use localFont variables
        geistMono.variable
      )}
    >
      <Head>
        {/* Ensure the title is populated */}
        <title>Dominic Quintilian's Website</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Dominic Quintilian's Professional Product Management Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="antialiased max-w-xl mx-4 mt-8 lg:mx-auto">
        <Navbar />
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          {children}
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  );
}