import React from "react";

import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

import { BidDetailsItem } from "../components/bids";
import { IBid } from "../interfaces";
import { bidsServises } from "../services";

const Bid = () => {
    const { bidId } = useParams();

    const fetchBid = async (bidId?:string):Promise<IBid> => {
        const { data: { data } } = await bidsServises.getById(bidId!);
        return data;
    };

    const queryOptions: UseQueryOptions<IBid, Error> = {
        queryKey: ["item", bidId],
        queryFn: () => fetchBid(bidId!),
        enabled: !!bidId,
    };
    const { data: bid } = useQuery<IBid, Error>(queryOptions);
    console.log(bid);
    return (
        <>
            {bid && <BidDetailsItem bid={bid}/>}
        </>
    );
};

export { Bid };
