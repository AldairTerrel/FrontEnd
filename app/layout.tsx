import type { Metadata } from 'next';
import { headers } from 'next/headers';
import './globals.css';

const siteTitle = 'Nexo — Diseño y desarrollo digital';
const previewTitle = 'Ideas claras. Experiencias que mueven.';
const description =
  'Creamos sitios web claros, rápidos y memorables para marcas que quieren avanzar.';

const trustedHostSuffixes = [
  '.openai.com',
  '.chatgpt.com',
  '.oaiusercontent.com',
  '.openaiusercontent.com',
  '.workers.dev',
];

function getMetadataBase(hostHeader: string | null) {
  if (!hostHeader) return new URL('http://localhost:3000');

  const host = hostHeader.toLowerCase();
  const hostname = host.replace(/:\d+$/, '');
  const isLocal = hostname === 'localhost' || hostname === '127.0.0.1';
  const isTrustedDeployment = trustedHostSuffixes.some((suffix) =>
    hostname.endsWith(suffix),
  );

  if (!isLocal && !isTrustedDeployment) {
    return new URL('http://localhost:3000');
  }

  return new URL(`${isLocal ? 'http' : 'https'}://${host}`);
}

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();

  return {
    metadataBase: getMetadataBase(requestHeaders.get('host')),
    title: siteTitle,
    description,
    openGraph: {
      title: previewTitle,
      description: 'Diseño y desarrollo digital con intención.',
      type: 'website',
      locale: 'es_PE',
      images: [
        {
          url: '/og.png',
          width: 1200,
          height: 630,
          alt: previewTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: previewTitle,
      description: 'Diseño y desarrollo digital con intención.',
      images: ['/og.png'],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
