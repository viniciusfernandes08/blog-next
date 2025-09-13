import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Header } from "@/components/Header";
import {Footer} from '@/components/Footer';
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: 'The blog - Este é um blog com Next.js',
    template: '%s | The blog',
  },
  description: "Descrição do blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className=''
      >
        <Container>
          <Header />

          {children}

          <Footer />
        </Container>
      </body>
    </html>
  );
}
