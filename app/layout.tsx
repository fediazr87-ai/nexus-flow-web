import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className="bg-slate-900 antialiased text-white">
        {children}
      </body>
    </html>
  )
}