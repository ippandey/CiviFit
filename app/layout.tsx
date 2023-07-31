import "./globals.css";
import { Poppins } from "next/font/google";
import Progressbar from "../components/Progressbar";
import { LayoutProvider } from "./LayoutProvider";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <LayoutProvider>{children}</LayoutProvider>
        <Progressbar />
      </body>
    </html>
  );
}
