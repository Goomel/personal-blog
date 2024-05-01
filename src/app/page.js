import Image from 'next/image';
import ButtonPrimary from '@/components/buttons/buttonPrimary/ButtonPrimary';
import RecentPosts from '@/components/blog/recentPosts/RecentPosts';
import styles from '@/components/blog/recentPosts/recentPosts.module.scss';
import ContactForm from '@/components/contactForm/ContactForm';
import laptop from '../../public/images/laptop.jpg';
import TitlePrimary from '@/components/titlePrimary/TitlePrimary';

export const metadata = {
  title: 'Page Home',
  description: ''
};

export default function Home() {
  return (
    <>
      <header className={styles.heroWrapper}>
        <div className={styles.sectionWrapper}>
          <div>
            <TitlePrimary headingLevel="1">
              <span>
                Cześć<span className="comma">,</span>
              </span>
              <br />
              <span>tu Kuba</span>
            </TitlePrimary>
            <p className={styles.description}>
              Witaj na moim blogu!
              <br />
              Dzielę się tutaj moimi przemyśleniami i wskazówkami z dziedziny
              frontendu.
              <br />
              Mam nadzieję, że znajdziesz tu coś dla siebie!&nbsp;🚀
            </p>
            <ButtonPrimary>Czytaj więcej</ButtonPrimary>
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
        </div>
      </header>
      <section className={styles.recentPostsWrapper}>
        <TitlePrimary headingLevel="2" textRight={true}>
          <span>Ostatnie</span>
          <br />
          <span>Wpisy</span>
        </TitlePrimary>
        <RecentPosts />
        <div className={styles.buttonWrapper}>
          <ButtonPrimary href="/blog">Zobacz wszystkie artykuły</ButtonPrimary>
        </div>
      </section>
      <section className={styles.sectionWrapper}>
        <div>
          <TitlePrimary headingLevel="2">
            <span>Napisz</span>
            <br />
            <span>Do mnie</span>
          </TitlePrimary>
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
      </section>
    </>
  );
}
