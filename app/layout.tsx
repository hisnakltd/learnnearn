import './globals.css';
import type { Metadata } from 'next';
import { Providers } from './providers';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

export const metadata: Metadata = {
  title: 'LEARN N\' EARN BLOG - Master Passive Income Strategies',
  description: 'Discover expert-led tutorials and comprehensive guides that help you learn new skills and create income opportunities.',
  keywords: 'passive income, online business, digital marketing, Amazon KDP, affiliate marketing, learn and earn',
  authors: [{ name: 'LEARN N\' EARN BLOG' }],
  openGraph: {
    type: 'website',
    url: 'https://learnnearmblog.com/',
    title: 'LEARN N\' EARN BLOG - Master Passive Income Strategies',
    description: 'Discover expert-led tutorials and comprehensive guides that help you learn new skills and create income opportunities.',
    images: [
      {
        url: 'https://i.imgur.com/vrcL8Yx.png',
        width: 1200,
        height: 630,
        alt: 'LEARN N\' EARN BLOG Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LEARN N\' EARN BLOG - Master Passive Income Strategies',
    description: 'Discover expert-led tutorials and comprehensive guides that help you learn new skills and create income opportunities.',
    images: ['https://i.imgur.com/vrcL8Yx.png'],
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
  other: {
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'DENY',
    'X-XSS-Protection': '1; mode=block',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.addEventListener('load', function() {
                setTimeout(function() {
                  document.body.classList.add('app-loaded');
                }, 500);
              });
            `,
          }}
        />
      </head>
      <body className="font-sans">
        <noscript>
          <div style={{
            textAlign: 'center',
            padding: '50px',
            fontFamily: 'Arial, sans-serif'
          }}>
            <h1>JavaScript Required</h1>
            <p>This application requires JavaScript to run properly. Please enable JavaScript in your browser settings.</p>
          </div>
        </noscript>
        
        <div id="loading-fallback" style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(135deg, #10b981, #3b82f6)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
          fontFamily: 'Arial, sans-serif',
          zIndex: 9999,
        }}>
          <div style={{ textAlign: 'center' }}>
            <img 
              src="https://i.imgur.com/vrcL8Yx.png" 
              alt="LEB Logo" 
              style={{ 
                width: '80px', 
                height: '80px', 
                marginBottom: '20px', 
                borderRadius: '50%' 
              }} 
            />
            <h1 style={{ 
              margin: '0 0 10px 0', 
              fontSize: '2rem' 
            }}>
              LEARN N&apos; EARN BLOG
            </h1>
            <p style={{ 
              margin: 0, 
              opacity: 0.9 
            }}>
              Loading your learning journey...
            </p>
            <div style={{
              marginTop: '30px',
              width: '50px',
              height: '50px',
              border: '3px solid rgba(255,255,255,0.3)',
              borderRadius: '50%',
              borderTopColor: 'white',
              animation: 'spin 1s ease-in-out infinite',
            }}></div>
          </div>
        </div>

        <Providers>
          <div className="flex min-h-screen flex-col">
            <Header />
            <div className="flex-1">{children}</div>
            <Footer />
          </div>
        </Providers>

        <style jsx global>{`
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
          
          .app-loaded #loading-fallback {
            display: none;
          }
        `}</style>
      </body>
    </html>
  );
}