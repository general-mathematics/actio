import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'
import TopRightNav from './components/TopRightNav'
import Header from './components/Header'
import Title from './components/Title'
import Footer from './components/Footer'
import BottomNavigation from './components/BottomNavigation'
import FooterNavigation from './components/FooterNavigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} container`}>
        <Header>
            <TopRightNav/>
            {/* <Title/> */}
        </Header>
        {children}
        <Footer><FooterNavigation/></Footer>
        <BottomNavigation/>
      </body>
    </html>
  )
}
