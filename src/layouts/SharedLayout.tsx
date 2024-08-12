
import { Outlet } from "react-router-dom";

import styles from "./styles.module.scss";
import { Loader } from "../components";
import { useBids } from "../hooks";
const SharedLayout = () => {
    const { handleType, bidId, handleSearch, bidIdParams, isLoading } = useBids();
    return (
        <div>
            <header >
                <div className={styles.wrapper}>
                    <h2 className={styles.title}>
                        Web Scrapper
                    </h2>
                    <>
                        <input value={bidId} onChange={(e) => handleType(e.target.value)}/>
                        <button onClick={async () => {
                            await handleSearch();
                        }}
                        >
                            {bidIdParams && !bidId ? "Show All" : "Find"}
                        </button>
                    </>
                </div>
            </header>
            <div className={styles.body}>
                {isLoading && <Loader/>}
                <Outlet/>
            </div>
        </div>
    );
};

export { SharedLayout };
