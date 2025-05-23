import "./ui/globals.css";
import { geistSans, geistMono } from "./ui/fonts";

export const metadata = {
  title: "Athon Tools",
  description: "Generated by pablodev",
  icons: './athonfav.png'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
