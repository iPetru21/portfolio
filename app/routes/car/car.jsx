import backgroundSprLarge from '~/assets/spr-background-large.jpg';
import backgroundSprPlaceholder from '~/assets/spr-background-placeholder.jpg';
import backgroundSpr from '~/assets/spr-background.jpg';

import { baseMeta } from '~/utils/meta';
import { useMemo, lazy, useEffect, useState, useRef } from "react";

import CarScene from './car-scene';

import {
    ProjectContainer,
    ProjectBackground,
} from '~/layouts/project';
import { VisuallyHidden } from '~/components/visually-hidden';
import { Link as RouterLink } from '@remix-run/react';
import stylesLink from '~/routes/home/intro.module.css';
import { ThemeProvider, useTheme } from '~/components/theme-provider';
export const meta = () => {
  return baseMeta({
    title: 'Traveling',
    description: 'A list of hardware and software I use to do my thing',
  });
};

export const Car = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';
  const themes = ['dark', 'light'];

  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(true);

  const observerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setScrollIndicatorHidden(false); // Ascunde indicatorul de scroll
          } else {
            setScrollIndicatorHidden(true); // Afișează indicatorul de scroll
          }
        });
      },
      {
        threshold: 1.0, // Pragul de 1.0 înseamnă că elementul trebuie să fie complet vizibil
      }
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, []);

  return (
      <>
        <ThemeProvider theme="dark" data-invert>
          <ProjectContainer>
          <CarScene/>

            <ProjectBackground
              opacity={isDark ? 0.5 : 0.8}
              src={backgroundSpr}
              srcSet={`${backgroundSpr} 1080w, ${backgroundSprLarge} 2160w`}
              placeholder={backgroundSprPlaceholder}
            />
            <RouterLink
              to="/"
              className={stylesLink.scrollIndicator}
              data-status={'entered'}
              data-hidden={scrollIndicatorHidden}
              // onClick={handleScrollClick}
            >
              <VisuallyHidden>Scroll to details</VisuallyHidden>
            </RouterLink>
            <RouterLink
              to="/"
              className={stylesLink.mobileScrollIndicator}
              data-status={'entered'}
              data-hidden={scrollIndicatorHidden}
              // onClick={handleScrollClick}
            >
              <VisuallyHidden>Scroll to details</VisuallyHidden>
              <svg
                aria-hidden
                stroke="currentColor"
                width="43"
                height="15"
                viewBox="0 0 43 15"
              >
                <path d="M1 1l20.5 12L42 1" strokeWidth="2" fill="none" />
              </svg>
            </RouterLink>
          </ProjectContainer>
        </ThemeProvider>
      </>
  );
};