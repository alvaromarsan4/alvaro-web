'use client';
import Menu from '@/app/components/Menu';
export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <body className="{`${geistSans.variable} ${geistMono.variable} antialiased`}">
            <Menu />
            {children}
        </body>
    </html>
  );
}