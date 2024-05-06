import Image from 'next/image';
import ButtonPrimary from '@/components/buttons/buttonPrimary/ButtonPrimary';
import styles from './page.module.scss';
import ContactForm from '@/components/contactForm/ContactForm';
import TitlePrimary from '@/components/titlePrimary/TitlePrimary';
import laptop from '../../public/images/laptop.jpg';
import { getBlogPosts } from '@/lib/mdxUtils';
import PostListing from '@/components/blog/postListing/PostListing';
import Grid from '@/components/shared/grid/Grid';
import cn from 'classnames';

export const metadata = {
  title: 'Page Home',
  description: ''
};

export default function Home() {
  const allPosts = getBlogPosts();

  return (
    <>
      <header className={cn(styles.mediaSectionWrapper, styles.heroSection)}>
        <div className={styles.headerTextWrapper}>
          <TitlePrimary headingLevel="1">
            <span>
              Cześć<span className="comma">,</span>
            </span>
            <br />
            <span>tu Kuba</span>
          </TitlePrimary>
          <div className={styles.descriptionWrapper}>
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
      </header>

      <section className={styles.recentPostsWrapper}>
        <TitlePrimary headingLevel="2" align="right">
          <span>Ostatnie</span>
          <br />
          <span>Wpisy</span>
        </TitlePrimary>
        <Grid>
          <PostListing posts={allPosts} />
        </Grid>
        <ButtonPrimary href="/blog">Zobacz wszystkie artykuły</ButtonPrimary>
      </section>

      <section className={styles.mediaSectionWrapper}>
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
