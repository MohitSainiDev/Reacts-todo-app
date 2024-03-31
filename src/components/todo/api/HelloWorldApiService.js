

import { apiClient } from './ApiClient'

export function retrieveHelloWorldBean(){
    return  apiClient.get('/hello-world-bean')
}

/*export const retrieveHelloWorldPathVariable
    = (username) => axios.get(`http://localhost:8080/hello-world/path-variable/${username}`)*/

    export function retrieveHelloWorldPathVariable(username,token){
        return  apiClient.get(`/hello-world/path-variable/${username}`)
    }

    export function executeBasicAuthenticationService(token){
        return  apiClient.get(`/basicauth`,{
            headers:{
                Authorization:token
            }
        })
    }
    