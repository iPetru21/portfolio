import React from "react";
import Battery from "~/components/car-hud/indicators/battery";
import styles from "~/components/car-hud/car-hud.module.css";
const CarHud = () => {
    return (
        <div className={styles.carhud}>
            {/* <Battery width={500}/> */}
        </div>
    );
};

export default CarHud;