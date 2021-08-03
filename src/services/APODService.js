import { AppState } from "../AppState"
import { apiNASA } from "./AxiosService"

class APODService {

  async getImage(){
    try {
      const res = await apiNASA.get()
      console.log('API:', res.data)
      AppState.image = res.data
    } catch (error) {
      console.error(error)
    }
  }

}

export const apodService = new APODService()