import "./globals.css";
import { Inter } from "next/font/google";
import { CircleCheck, InfoIcon, Loader, TriangleAlert, X } from "lucide-react";
import { Toaster } from "sonner";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Substack Mod - Substack but with better landing page and conversions`,
  description: `Substack Mod lets their user customize their substack newsletter landing page.`,
  authors: [
    {
      name: "Chakravyu Labs",
      url: "https://www.chakravyu.com",
    },
    {
      name: "Shivam Gupta",
      url: "https://x.com/ashokasec",
    },
    {
      name: "ashokasec",
      url: "https://ashokasec.com",
    },
  ],
  alternates: {
    canonical: "https://substack-mod.ashokasec.com",
  },
  openGraph: {
    type: "website",
    url: "https://substack-mod.ashokasec.com",
    title: `Substack Mod - Substack but with better landing page and conversions`,
    description: `Substack Mod lets their user customize their substack newsletter landing page.`,
    siteName: "Substack Mod",
    images: [
      {
        url: "https://example.com/path/to/your/image.jpg", // Replace with your actual image URL
        alt: `Substack Mod Open Graph Image`,
      },
    ],
  },
  keywords: [
    "newsletter",
    "custom landing page",
    "substack",
    "substack mod",
    "custom newsletter"
  ],
  publisher: "Chakravyu Labs",
  creator: "Chakravyu Labs",
};


const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}
        <Toaster
          duration={5000000000}
          toastOptions={{
            unstyled: false,
            classNames: {
              error:
                "font-inter bg-[#120404] backdrop-blur-2 text-white border border-red-700 text-sm",
              success:
                "font-inter bg-green-100 text-green-500 border border-green-500 text-sm",
              warning:
                "font-inter bg-orange-900 text-orange-300 border border-orange-700 text-sm",
              info: "font-inter bg-[#00071d] text-blue-500 border border-blue-500 text-sm",
            },
          }}
          icons={{
            success: <CircleCheck size={20} />,
            info: <InfoIcon size={20} />,
            warning: <TriangleAlert size={20} />,
            error: <X size={20} />,
            loading: <Loader size={20} />,
          }}
        />
      </body>
    </html>
  );
}
