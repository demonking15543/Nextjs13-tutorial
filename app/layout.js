import '../styles/globals.css'
import Header from './Header'
export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <title>Vijay Website</title>
      </head>
      <body>
        <Header/>

        {children}
        </body>
    </html>
  )
}
