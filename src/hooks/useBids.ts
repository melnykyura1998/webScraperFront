import { useCallback, useState } from "react";

import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";

import { IBid } from "../interfaces";
import { bidsServises } from "../services";

const useBids = () => {
    const { bidId: bidIdParams } = useParams();
    const [bidId, setBidId] = useState<string>();
    const navigate = useNavigate();
    const handleType = useCallback((v:string) => {
        setBidId(v);
    }, []);

    const fetchBids = async () => {
        const { data: { data } } = await bidsServises.getAll();
        return data;
    };
    const fetchBid = async (bidId?:string):Promise<IBid> => {
        const { data: { data } } = await bidsServises.getById(bidId!);
        return data;
    };

    const { data = [], error, isLoading } = useQuery<IBid[], Error>({
        queryKey: ["items"],
        queryFn: fetchBids,
    });
    const queryOptions: UseQueryOptions<IBid, Error> = {
        queryKey: ["item", bidId],
        queryFn: () => fetchBid(bidId!),
        enabled: !!bidId,
    };
    const { data: bid, error: bidError, isLoading: bidLoading, isFetching, refetch } = useQuery<IBid, Error>(queryOptions);
    const handleSearch = async () => {
        if (bidIdParams && !bidId) {
            navigate("/bids");
            return;
        }
        bidId && await refetch().then(data => {
            if (data?.data?.displayId) {
                navigate(`bids/${data?.data?.id}`);
                setBidId("");
            } else {
                setBidId("");
                navigate("/bids");
            }
        });
    };
    return {
        bidsList: data,
        error,
        handleType,
        bidId,
        isLoading: isLoading || bidLoading || isFetching,
        handleSearch,
        bidIdParams,
    };
};

export { useBids };
