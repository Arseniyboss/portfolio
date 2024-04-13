import './globals.css'
import { ReactNode } from 'react'
import { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Container } from '@/styles/globals'
import StyledComponentsRegistry from '@/lib/registry'
import Header from '@/components/header/Header'

type Props = {
  children: ReactNode
}

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Portfolio website built with NextJS',
}

const RootLayout = ({ children }: Props) => {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <Header />
          <Container>{children}</Container>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}

export default RootLayout
