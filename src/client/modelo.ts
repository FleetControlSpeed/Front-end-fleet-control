import { Modelo } from "@/model/Modelo";
import axios, { AxiosInstance } from "axios";

export class ModeloClient{

    private axiosClient: AxiosInstance;

    constructor() {
        this.axiosClient = axios.create({
            baseURL: 'http://localhost:8080/api/modelo',
            headers: {'Content-type' : 'application/json'}
        });
    }

    public async findById(id: number) : Promise<Modelo> {
        try {
            return (await this.axiosClient.get<Modelo>(`/${id}`)).data
        } catch (error:any) {
            return Promise.reject(error.response)
        }
    }

	public async cadastrar(Modelo: Modelo): Promise<void> {
		try {
			return (await this.axiosClient.post('/', Modelo))
		} catch (error:any) {
			return Promise.reject(error.response)
		}
	}

	public async editar(modelo: Modelo): Promise<void> {
		try {
			return (await this.axiosClient.put(`/${modelo.id}`, Modelo)).data
		} catch (error:any) {
			return Promise.reject(error.response)
		}
	}

	public async desativar(Modelo: Modelo): Promise<void> {
		try {
			return (await this.axiosClient.put(`/desativar/${Modelo.id}`, Modelo)).data
		} catch (error:any) {
			return Promise.reject(error.response)
		}
	}

    public async ativar(Modelo: Modelo): Promise<void> {
		try {
			return (await this.axiosClient.put(`/ativar/${Modelo.id}`, Modelo)).data
		} catch (error:any) {
			return Promise.reject(error.response)
		}
	}

}