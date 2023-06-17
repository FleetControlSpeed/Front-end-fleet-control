import axios, {AxiosInstance} from 'axios';
import { Usuarios } from '@/models/usuario';

export class UsuarioClient {
    private axiosClient: AxiosInstance;
    constructor () {
        this.axiosClient=axios.create({
            baseURL:"http://localhost:8080/api/condutor",
            headers:{"Content-Type": "application/JSON"}
        });

    }
    public async FindAll() :Promise <Usuarios[]> {
        try{
            return(await this.axiosClient.get<Usuarios[]>("/listar")).data

        }catch(error:any)
        {
            return Promise.reject(error.response)
        }

    }

    public async FinbyId(id:number) :Promise<Usuarios>{
        try{
            return(await this.axiosClient.get<Usuarios>(`/${id}`)).data
        }catch(error:any){
            return Promise.reject(error.response)
        }
    }

    public async Delete(id:number) :Promise<string>{
        try{
            return(await this.axiosClient.delete<string>(`/${id}`)).data
        }catch(error:any){
            return Promise.reject(error.response)
        }
    }
public async Cadastrar(usuarios : Usuarios) :Promise<void>{
    try{
        return(await this.axiosClient.post('/cadastrar',usuarios)).data;
    }catch(error:any){
        return Promise.reject(error.response)
    }
}

public async Editar(usuarios:Usuarios) :Promise<void>{
    try{
        return(await this.axiosClient.put(`/editar`, usuarios)).data;
    }catch(error:any){
        return Promise.reject(error.response)
    }
}   
public async FindAtivo() :Promise <Usuarios[]> {
    try{
        return(await this.axiosClient.get<Usuarios[]>("/listarPorAtivo")).data

    }catch(error:any)
    {
        return Promise.reject(error.response)
    }

}

}