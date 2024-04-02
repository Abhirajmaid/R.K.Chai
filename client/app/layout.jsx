import { Kanit } from "next/font/google";
import "./globals.css";

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  metadataBase: new URL("https://r-k-chai.vercel.app/"),
  title: {
    default: "RKChaiwala",
    template: "%s | RK Chaiwala",
  },
  description:
    "RK Chaiwala offers authentic Indian chai experiences, blending tradition with innovation. Join our chai community and savor the rich flavors of India in every cup",
  twitter: {
    card: "summary_large_image",
    site: "@rkchai",
  },
  openGraph: {
    title: "RK Chaiwala",
    description:
      "RK Chaiwala offers authentic Indian chai experiences, blending tradition with innovation. Join our chai community and savor the rich flavors of India in every cup",
    images: [
      {
        url: "./opengraph-image.png",
      },
    ],
  },
  keywords: ["chai", "RK chaiwala", "rkchaiwala", "chai cafe"],
};

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en">
        <body className={kanit.className}>{children}</body>
      </html>
    </>
  );
}
