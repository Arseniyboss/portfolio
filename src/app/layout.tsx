import './globals.css'
import { ReactNode } from 'react'
import { Metadata } from 'next'
import { Inter } from 'next/font/google'
import StyledComponentsRegistry from '@lib/registry'

type Props = {
  children: ReactNode
}

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Portfolio website build with NextJS',
}

const RootLayout = ({ children }: Props) => {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  )
}

export default RootLayout
