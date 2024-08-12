
import { BidsList } from "../components/bids";
import { useBids } from "../hooks";

const Bids = () => {
    const { bidsList } = useBids();

    return (
        <>
            <BidsList bids={bidsList}/>
        </>
    );
};

export { Bids };
