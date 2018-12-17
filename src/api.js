import axios from 'axios'

const service = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/pokemon/'
})

export default {
  service: service,

  getPokemonDetail(id) {
    return service.get(`/${id}/`)
      .then(res => res.data)
  },
}