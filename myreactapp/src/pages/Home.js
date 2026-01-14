import { useQuery } from "@tanstack/react-query";
import Axios from "axios";
export const Home = () => {
    const { data } = useQuery ({
        queryKey: ["cat"],
        queryFn: () =>
            Axios.get("https://catfact.ninja/fact").then((res) => res.data),
    });

    return (
        <h1>
            This is the Home Page
            <p> {data?.fact} </p>
        </h1>
    );
};