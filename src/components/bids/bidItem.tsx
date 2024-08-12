import React, { FC } from "react";

import { useNavigate } from "react-router-dom";

import styles from "./styles.module.scss";
import { IBid } from "../../interfaces";
const BidItem:FC<{bid:IBid}> = ({ bid }) => {
    const navigate = useNavigate();

    const goToBid = () => {
        navigate(`/bids/${bid.id}`);
    };

    return (
        <div className={styles.bidItem}>
            {/*<div className={styles.id} >{bid.displayId}</div>*/}
            <div onClick={goToBid} className={styles.link}>{bid.title}</div>
        </div>
    );
};

export { BidItem };
