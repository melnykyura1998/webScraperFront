import React, { FC } from "react";

import styles from "./styles.module.scss";
import { IBid } from "../../interfaces";

const BidDetailsItem:FC<{bid:IBid}> = ({ bid }) => {
    return (
        <div>
            <h3 className={styles.bidDetailItem}>{bid.title}</h3>
            <div className={styles.bidDetailItem}>
                <h4>ID</h4>
                {bid.displayId}
            </div>
            <div className={styles.bidDetailItem}>
                <h4>Due date</h4>
                {bid.dueDate}
            </div>
            <div className={styles.bidDetailItem}>
                <h4>Solicitation Type</h4>
                {bid.solicitationType}
            </div>
            <div className={styles.bidDetailItem}>
                <h4>Solicitation Summary</h4>
                {bid.solicitationSummary}
            </div>

        </div>
    );
};

export { BidDetailsItem };
