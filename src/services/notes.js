import axios from "axios"
const baseUrl = 'http://localhost:3001/notes'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response)
}

const create = newObject => {
    const request = axios.post(baseUrl, newObject)
    return request.then(response => response)
}

const update = (id, newObject) => {
    const request = axios.put(`${baseUrl}/${id}`, newObject)
    return request.then(response => response)
}

const remove = id => {
    const request = axios.delete(`${baseUrl}/${id}`)
    return request.then(response => response)
}


export default { getAll, create, update, remove }