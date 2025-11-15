
import "./globals.css";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-black h-dvh pl-[360px] pr-[360px]`}
      >
        {children}
      </body>
    </html>
  );
}
