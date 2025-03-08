// app/layout.tsx
import { Providers } from './providers'
import { fonts } from './fonts'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang='en' className={fonts.rubik.variable}>
      <head>
        <title>Mahlangu | Portfolio</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name="google-site-verification" content="aZOBDEpmO5mlrgII26w8bAVgu7UDnFZaG6X2vLYdJkQ" />
        <link rel='icon' href='/favicon-32x32.png' />
      </head>
      <body style={{backgroundColor: `#F8F8FB`}}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}