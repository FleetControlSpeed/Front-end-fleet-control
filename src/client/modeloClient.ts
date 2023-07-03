import { Modelo } from "@/models/modelo";
import { multa } from "@/models/multa";
import axios, { AxiosInstance } from "axios";

class modeloClient {

    private axiosClient : AxiosInstance

    constructor() {
        this.axiosClient = axios.create({
            baseURL: 'http://localhost:8080/api/modelo',
            headers: {'Content-type' : 'application/json'}
        });
    }

    public async findById(id: number): Promise<Modelo> {
        try {
            return (await this.axiosClient.get<Modelo>(`/${id}`)).data
        } catch (error:any) {
            return Promise.reject(error.response)
        }
    }

    public async listaAll(): Promise<any> {
        try {
            return (await this.axiosClient.get<Modelo[]>(`/listar`)).data
        } catch (error:any) {
            return Promise.reject(error.response)
        }
    }

    public async listaAllAtivos(): Promise<any> {
        try {
            return (await this.axiosClient.get<Modelo[]>(`/listarPorAtivo`)).data
        } catch (error:any) {
            return Promise.reject(error.response)
        }
    }

    public async cadastrar(Modelo: Modelo): Promise<string> {
        try {
            return (await this.axiosClient.post<string>(``, Modelo)).data
        } catch (error:any) {
            return Promise.reject(error.response)
        }
    }
    public async editar(id: number, Modelo: Modelo): Promise<string> {
        try {
            return (await this.axiosClient.put<string>(`/editar/${id}`, Modelo)).data
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

export default new modeloClient();