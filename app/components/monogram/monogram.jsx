import { forwardRef, useId } from 'react';
import { classes } from '~/utils/style';
import styles from './monogram.module.css';

export const Monogram = forwardRef(({ highlight, className, ...props }, ref) => {
  const id = useId();
  const clipId = `${id}monogram-clip`;

  return (
    <svg
      aria-hidden
      className={classes(styles.monogram, className)}
      width="40"
      viewBox="0 0 128 238"
      ref={ref}
      {...props}
    >
      <defs>
        <clipPath id={clipId}>
          <rect x="0.5" y="54.5" width="55" height="183"/>
          <circle cx="28" cy="23" r="22.5"/>
          <path d="M127.5 114C127.5 128.913 123.773 140.064 118.209 148.41C112.643 156.76 105.217 162.332 97.7764 166.053C90.3338 169.774 82.8851 171.637 77.2928 172.569C74.4979 173.035 72.1698 173.268 70.5425 173.384C69.7289 173.442 69.0907 173.471 68.6572 173.486C68.6014 173.487 68.549 173.489 68.5 173.491V54.5095C68.549 54.5109 68.6014 54.5125 68.6572 54.5144C69.0907 54.5288 69.7289 54.5578 70.5425 54.6159C72.1698 54.7322 74.4979 54.9649 77.2928 55.4307C82.8851 56.3627 90.3338 58.2259 97.7764 61.9472C105.217 65.6676 112.643 71.2402 118.209 79.5899C123.773 87.9364 127.5 99.0875 127.5 114Z"/>
        </clipPath>
      </defs>
      <rect clipPath={`url(#${clipId})`} width="100%" height="100%" />
      {highlight && (
        <g clipPath={`url(#${clipId})`}>
          <rect className={styles.highlight} width="100%" height="100%" />
        </g>
      )}
    </svg>
  );
});
