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
      </head>
      <body style={{backgroundColor: `#F8F8FB`}}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}