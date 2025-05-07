import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Bob Haozous",
  description: "Bob Haozous is a man with a mission, or two. Some thirty years ago he set out to be a damn good sculptor. He has since achieved this, successfully wedding Native and especially Apache imagery with powerful form and a sharp, unequivocal wit aimed at contemporary American life, at “the white man in all of us.” Between them, he and his father – the deeply respected artist Allan Houser – have defined the range of Native American sculpture.",
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
