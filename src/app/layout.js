import cn from 'classnames';
import dynamic from 'next/dynamic';
import { Work_Sans, Anton } from 'next/font/google';
import styles from './layout.module.scss';
import '@/styles/main.scss';

const Navigation = dynamic(() => import('@/components/navigation/Navigation'), {
  ssr: false
});

const work_sans = Work_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-work-sans'
});

const anton = Anton({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
  variable: '--font-heading'
});

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
};

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body className={cn(work_sans.variable, anton.variable)}>
        <div className={styles.layoutContainer}>
          <Navigation />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
