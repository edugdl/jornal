import axios from "axios";
import { useState, useEffect } from "react";

type configType = {
    url: string;
    requestConfig?: any;
}

export function useAxiosPost<T = unknown>(config: configType){
    
    const api = axios.create({
        baseURL: "http://localhost:8085",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    });
    
    const {
        url,
        requestConfig
    } = config;

    const [response, setResponse] = useState<T | undefined>(undefined);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [call, setCall] = useState(false);

    const execute = () => {setCall(!call)};

    useEffect(() => {
        const fetchData = async () => {
            try{
                const res = await api.post(url, requestConfig.body);
                setResponse(res.data);
                console.log(res.data);
            }catch(err: any){
                setError(err.message);
            }finally{
                setLoading(false);
            }
        };
        fetchData();
    }, [call]);

    return { response, loading, error, execute };
}

