import styles from './battery.module.css';

const Battery = ({color = 'white', strokeWidth = 2, width = 100}) => {
    const svgData = `
    <svg width='24' height='12' viewBox='0 0 24 12' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path d='M1.5 4C1.5 2.34315 2.84315 1 4.5 1H19.5C20.0304 1 20.5391 1.21071 20.9142 1.58579C21.2893 1.96086 21.5 2.46957 21.5 3V3.5C21.5 3.63261 21.5527 3.75979 21.6464 3.85355C21.7402 3.94732 21.8674 4 22 4C22.1326 4 22.2598 4.05268 22.3536 4.14645C22.4473 4.24021 22.5 4.36739 22.5 4.5V7.5C22.5 7.63261 22.4473 7.75979 22.3536 7.85355C22.2598 7.94732 22.1326 8 22 8C21.8674 8 21.7402 8.05268 21.6464 8.14645C21.5527 8.24021 21.5 8.36739 21.5 8.5V9C21.5 9.53043 21.2893 10.0391 20.9142 10.4142C20.5391 10.7893 20.0304 11 19.5 11H4.5C2.84315 11 1.5 9.65685 1.5 8V4Z' stroke='${color}' stroke-width='${strokeWidth}' stroke-linecap='round' stroke-linejoin='round'/>
    </svg>
  `;

  const encodedSvg = encodeURIComponent(svgData);
  const backgroundImage = `url("data:image/svg+xml,${encodedSvg}")`;

  return (
    <span
        className={styles.battery}
        style={{
            "--battery-width": `${width}px`,
            backgroundImage,
            zIndex: 5
        }}
    ></span>
  );
}

export default Battery;
