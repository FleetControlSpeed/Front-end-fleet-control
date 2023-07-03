import { Veiculo } from "@/models/veiculo";
import axios, { AxiosInstance } from "axios";

class VeiculoClient {
    
    axiosClient: AxiosInstance;

    constructor() {
        this.axiosClient = axios.create({
            baseURL: 'http://localhost:8080/api/veiculos',
            headers: {'Content-type' : 'application/json'}
        });
    }

    public async findById(id: number): Promise<Veiculo> {
        try {
            return (await this.axiosClient.get<Veiculo>(`/${id}`)).data
        } catch (error:any) {
            return Promise.reject(error.response)
        }
    }

    public async listaAll(): Promise<any[]> {
        try {
            return (await this.axiosClient.get<Veiculo[]>(`/listar`)).data
        } catch (error:any) {
            return Promise.reject(error.response)
        }
    }

	public async listaAllAtivos(): Promise<any> {
        try {
            return (await this.axiosClient.get<Veiculo[]>(`/lista/ativos`)).data
        } catch (error:any) {
            return Promise.reject(error.response)
        }
    }

    public async cadastrar(veiculo: Veiculo): Promise<string> {
        try {
            return (await this.axiosClient.post<string>(``, veiculo)).data
        } catch (error:any) {
            return Promise.reject(error.response)
        }
    }
    public async editar(id: number, veiculo: Veiculo): Promise<string> {
        try {
            return (await this.axiosClient.put<string>(`/${id}`, veiculo)).data
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

export default new VeiculoClient();