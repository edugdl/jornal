import axios from "axios";
import { useState, useEffect } from "react";

const api = axios.create({
    baseURL: "http://localhost:8085/usuario",
});

type User = {
    nome: string
    email: string
    senha: string
    dataNascimento: string
    cpf: string
    cep: string
}

type Login = {
    email: string
    senha: string
}

type Register = {
    nome: string
    email: string
    senha: string
    dataNascimento: string
    cpf: string
    cep: string
}

export function useFetchGet<T = unknown>(url: string){

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

export function useFetchPost<T = unknown>(url: string, body: any){
    const [data, setData] = useState<T | undefined>(undefined);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(()=>{
        api.post(url, body).then(res=>{
            setData(res.data);
        }).catch(err=>{
            setError(true);
            console.error(err);
        }).finally(()=>{
            setLoading(false);
        })
    });
    return { data, loading, error };
}