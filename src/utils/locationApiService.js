import axios from "axios"
import {locationURLs} from "./constants"

export class LocationAPIService {
    // add a constructor here if I get a pro plan and need auth

    async makeGetRequest(endpoint) {
        const url = `${locationURLs().ROOT}/${endpoint}`
        const response = await axios.get(url)
        return response
    }

    async GET(url, callback) {
        this.makeGetRequest(url).then(callback);
    }
}

export default new LocationAPIService();