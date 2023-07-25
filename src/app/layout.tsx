import type { Metadata } from 'next'
import cl from './global.module.css'
import { CssBaseline } from '@mui/material'

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
      <body>
        <CssBaseline />
        <div className={cl.main_grid}>
          <header className={cl.header}>
            
          </header>
          <aside>
            <nav>
              <div>
                <ul>
                  <li>Home</li>
                  <li>Search</li>
                </ul>
              </div>
            </nav>
          </aside>
          <main className={cl.main}>
            {children}
          </main>
          <footer className={cl.footer}>

          </footer>
        </div>
      </body>
    </html>
  )
}