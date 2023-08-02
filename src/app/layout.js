import './globals.css'






export const metadata = {
  title: 'To-do app',
  description: 'Test Aquarela io',
  
}

export default function RootLayout({ children }) {
  return (
    <html lang='en' >
      <body >{children}</body>
    </html>
  )
}
