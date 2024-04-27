import Image from 'next/image';
import Hero from '@/components/hero/Hero';
import ButtonPrimary from '@/components/buttons/buttonPrimary/ButtonPrimary';
import RecentPosts from '@/components/blog/recentPosts/RecentPosts';
import styles from '@/components/blog/recentPosts/recentPosts.module.scss';
import ContactForm from '@/components/contactForm/ContactForm';
import ContentMediaSection from '@/components/shared/contentMediaSection/ContentMediaSection';
import laptop from '../../public/images/laptop.jpg';

export const metadata = {
  title: 'Page Home',
  description: ''
};

export default function Home() {
  return (
    <>
      <Hero />
      <section className={styles.recentPostsWrapper}>
        <h2 className={styles.title}>
          <span>Ostatnie</span>
          <br />
          <span>wpisy</span>
        </h2>
        <RecentPosts />
        <div className={styles.buttonWrapper}>
          <ButtonPrimary href="/blog">Zobacz wszystkie artykuły</ButtonPrimary>
        </div>
      </section>
      <section>
        <ContentMediaSection>
          <div>
            <h1 className={styles.title}>
              <span>
                Cześć<span className={styles.comma}>,</span>
              </span>
              <br />
              <span>tu Kuba</span>
            </h1>
            <ContactForm />
          </div>

          <div>
            <Image
              src={laptop}
              alt="Mężczyzna pracujący z laptopem"
              width={330}
              height={500}
              style={{
                objectFit: 'cover',
                maxWidth: '100%'
              }}
            />
          </div>
        </ContentMediaSection>
      </section>
    </>
  );
}
