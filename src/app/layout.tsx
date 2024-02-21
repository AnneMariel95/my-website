import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anne Mariel",
  description: "Welcome to my homepage",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className={inter.className + " " + "h-full"}>{children}</body>
      <Script
        type="text/javascript"
        strategy="afterInteractive"
        id="plerdy"
        data-plerdy_code="1"
        dangerouslySetInnerHTML={{
          __html: `var _protocol="https:"==document.location.protocol?"https://":"http://";
        _site_hash_code = "737d525f84de7123ac33814850a25d5c",_suid=45017, plerdyScript=document.createElement("script");
        plerdyScript.setAttribute("defer",""),plerdyScript.dataset.plerdymainscript="plerdymainscript",
        plerdyScript.src="https://d.plerdy.com/public/js/click/main.js?v="+Math.random();
        var plerdymainscript=document.querySelector("[data-plerdymainscript='plerdymainscript']");
        plerdymainscript&&plerdymainscript.parentNode.removeChild(plerdymainscript);
        try{document.head.appendChild(plerdyScript)}catch(t){console.log(t,"unable add script tag")}`,
        }}
      ></Script>
    </html>
  );
}
