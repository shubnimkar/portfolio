import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

export const metadata = {
  title: "Shubham Nimkar | DevOps Engineer Portfolio",
  description: "DevOps Engineer with 2 years of hands-on experience designing AWS infrastructure, automating CI/CD pipelines, and managing containerized environments.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className="min-h-full flex flex-col bg-slate-950 text-white antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
