import axios from 'axios'

const urlBase = 'http://127.0.0.1:8000'

export async function getAllHikes(){
    try {
        const response = await axios.get(urlBase + '/api/hikes/')
        return response.data
    } catch (error) {
        return []
    }
}

export async function getLatests(volume){
    try {
        const response = await axios.get(urlBase + `/api/latesthikes/${volume}`)
        return response.data
    } catch (error) {
        return []
    }
}

export async function getByCategory(category){
    try{
        const response = await axios.get(urlBase + `/api/hikes/${category}`)
        return response.data
    } catch (error){
        return []
    }
}

export async function getHikeById(id){
    try {
        const response = await axios.get(urlBase + `/api/hike/${id}`)
        return response.data
    } catch (error) {
        return []        
    }
}