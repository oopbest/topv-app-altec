import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/common/header";
import Footer from "@/components/common/footer";

export const metadata: Metadata = {
  title: {
    absolute: "",
    default: "Home | Altec",
    template: "%s | Altec",
  },
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sukhumvit">
        <Header />
        <main className="block bg-theme-container">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
