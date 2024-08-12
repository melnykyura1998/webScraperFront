import React, { FC } from "react";

import { BidItem } from "./bidItem";
import styles from "./styles.module.scss";
import { IBid } from "../../interfaces";
const BidsList:FC<{bids: IBid[] }> = ({ bids }) => {
    return (
        <div className={styles.wrapper}>
            {bids.map((bid, index) =>
                <BidItem key={index} bid={bid}/>)}

        </div>
    );
};

export { BidsList };
