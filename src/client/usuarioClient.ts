
import { Usuario } from "@/models/usuario";
import axios, { AxiosInstance } from "axios";

class UsuarioClient {
    
    axiosClient: AxiosInstance;

    constructor() {
        this.axiosClient = axios.create({
            baseURL: 'http://localhost:8080/api/condutores',
            headers: {'Content-type' : 'application/json'}
        });
    }

    public async findById(id: number): Promise<Usuario> {
        try {
            return (await this.axiosClient.get<Usuario>(`/${id}`)).data
        } catch (error:any) {
            return Promise.reject(error.response)
        }
    }

    public async listaAll(): Promise<any[]> {
        try {
            return (await this.axiosClient.get<Usuario[]>(`/listar`)).data
        } catch (error:any) {
            return Promise.reject(error.response)
        }
    }

	public async listaAllAtivos(): Promise<any> {
        try {
            return (await this.axiosClient.get<Usuario[]>(`/listar/ativos`)).data
        } catch (error:any) {
            return Promise.reject(error.response)
        }
    }

    public async cadastrar(usuario: Usuario): Promise<string> {
        try {
            return (await this.axiosClient.post<string>(``, usuario)).data
        } catch (error:any) {
            return Promise.reject(error.response)
        }
    }
    public async editar(id: number, Usuario: Usuario): Promise<string> {
        try {
            return (await this.axiosClient.put<string>(`/editar/${id}`, Usuario)).data
        } catch (error:any) {
            return Promise.reject(error.response)
        }
    }
    public async excluir(id: number): Promise<string> {
        try {
            return (await this.axiosClient.put<string>(`/desativar/${id}`)).data
        } catch (error:any) {
            return Promise.reject(error.response)
        }
    }


}

export default new UsuarioClient();