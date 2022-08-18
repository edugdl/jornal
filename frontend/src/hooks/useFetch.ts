import axios from "axios";
import { useState, useEffect } from "react";


export function useFetch<T = unknown>(url: string){
    const api = axios.create({
        baseURL: "http://localhost:8085/usuario",
    });

    const [data, setData] = useState<T | undefined>(undefined);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(()=>{
        api.get(url).then(res=>{
            setData(res.data);
        })
        .catch(err=>{
            setError(true);
            console.error(err);
        })
        .finally(()=>{
            setLoading(false);
        })
    }, []);

    return { data, loading, error };
}