import { AppState } from "../AppState"
import { apiNASA } from "./AxiosService"

class APODService {

  async getImage(){
    try {
      const res = await apiNASA.get('?api_key=bQzL1qV3LisdFxR03P6dYx42Ow57uazIX9MooXmL')
      console.log('API:', res.data)
      AppState.image = res.data
    } catch (error) {
      console.error(error)
    }
  }

}

export const apodService = new APODService()