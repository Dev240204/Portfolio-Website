import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'
import { ThemeProvider } from '@/context/ThemeContext'
import AuthProvider from '@/components/AuthProvider/AuthProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Dev Portfolio',
  description: 'This is the Portfolio website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* What we write here will be added to all the pages like we can add navbar and footer */}
      <body className={inter.className}>
        <ThemeProvider>
          <AuthProvider>
            <div className='container'>
              <Navbar/>
              {children}
              <Footer/>
            </div>
          </AuthProvider>
        </ThemeProvider>
        </body>
    </html>
  )
}
