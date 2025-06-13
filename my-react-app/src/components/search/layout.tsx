'use client';
import './global.css';
import Navigation from "../navigation";

export default function RootLayout({children}: {
  children: React.ReactNode;
}) {
//TODO: this layout is just a wrapper for all the pages, feel free to throw it away and create your own
  return (
    <html lang="en">
    <body>
    <header>
      <Navigation />
    </header>
    <main className="wrapper">
      <section className="container">
        {children}
      </section>
    </main>
    <footer>

    </footer>
    </body>
    </html>
  );
}
