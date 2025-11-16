
import "./globals.css";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-black h-dvh pl-[260px] pr-[260px]`}
      >
        {children}
      </body>
    </html>
  );
}
