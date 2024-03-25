import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import styles from './listWrapper.module.scss';
import ListItem from '../listItem/ListItem';

const ListWrapper = () => {
  const container = useRef(null);

  useGSAP(
    () => {
      let mm = gsap.matchMedia();

      mm.add('(max-width: 1024px)', () => {
        gsap.from(container.current, {
          opacity: 0,
          duration: 0.2
        });
        gsap.from('.item', {
          y: -20,
          scale: 0,
          opacity: 0,
          duration: 0.15,
          ease: 'power1.out',
          stagger: {
            each: 0.1
          }
        });
      });
    },
    { scope: container }
  );

  return (
    <ul ref={container} className={styles.wrapper}>
      <ListItem href={'/'}>Home</ListItem>
      <ListItem href={'/blog'}>Blog</ListItem>
      <ListItem href={'/o-mnie'}>O mnie</ListItem>
      <ListItem href={'#kontakt'}>Kontakt</ListItem>
    </ul>
  );
};

export default ListWrapper;
