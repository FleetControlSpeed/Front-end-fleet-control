import { multa } from "@/models/multa";
import axios, { AxiosInstance } from "axios";

class multaClient {

    private axiosClient : AxiosInstance

    constructor() {
        this.axiosClient = axios.create({
            baseURL: 'http://localhost:8080/api/multa',
            headers: {'Content-type' : 'application/json'}
        });
    }

    public async findById(id: number): Promise<multa> {
        try {
            return (await this.axiosClient.get<multa>(`/${id}`)).data
        } catch (error:any) {
            return Promise.reject(error.response)
        }
    }

    public async listaAll(): Promise<any> {
        try {
            return (await this.axiosClient.get<multa[]>(`/listar`)).data
        } catch (error:any) {
            return Promise.reject(error.response)
        }
    }

    public async listaAllAtivos(): Promise<any> {
        try {
            return (await this.axiosClient.get<multa[]>(`/lista/ativos`)).data
        } catch (error:any) {
            return Promise.reject(error.response)
        }
    }

    public async cadastrar(multa: multa): Promise<string> {
        try {
            return (await this.axiosClient.post<string>(``, multa)).data
        } catch (error:any) {
            return Promise.reject(error.response)
        }
    }
    public async editar(id: number, multa: multa): Promise<string> {
        try {
            return (await this.axiosClient.put<string>(`/editar/${id}`, multa)).data
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

export default new multaClient();