import { Usuario } from "@/models/usuario";
import axios, { AxiosInstance } from "axios";

export class UsuarioClient{

    private axiosClient: AxiosInstance;

    constructor() {
        this.axiosClient = axios.create({
            baseURL: 'http://localhost:8080/api/usuario',
            headers: {'Content-type' : 'application/json'}
        });
    }

    public async findById(id: number) : Promise<Usuario> {
        try {
            return (await this.axiosClient.get<Usuario>(`/${id}`)).data
        } catch (error:any) {
            return Promise.reject(error.response)
        }
    }

	public async cadastrar (Usuario : Usuario): Promise<void>{
		try{
			return (await this.axiosClient.post('/', Usuario)).data
		}catch (error:any){
			return Promise.reject(error.response)
		}
	}

	public async editar (Usuario : Usuario) : Promise<void>{
		try{
			return (await this.axiosClient.put(`/${Usuario.id}`)).data
		}catch(error:any){
			return Promise.reject(error.response)
		}
	}

	public async desativar (Usuario : Usuario) : Promise<void>{
		try{
			return (await this.axiosClient.put(`/desativar/${Usuario.id}`, Usuario)).data
		}catch(error:any){
			return Promise.reject(error.response)
		}
	}
	
	public async ativar(Usuario: Usuario): Promise<void> {
		try {
			return (await this.axiosClient.put(`/ativar/${Usuario.id}`, Usuario)).data
		} catch (error:any) {
			return Promise.reject(error.response)
		}
	}
} 