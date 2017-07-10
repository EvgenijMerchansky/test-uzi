import axios from 'axios';

export const ganres = (movies) => {

  return (dispatch) => {

    axios.get(
      'https://api.themoviedb.org/3/genre/movie/list?api_key=7dd1a3813857d56dcfae3a021b23b626&language=en-US&page=1&language=en-US',
      {
        method: 'get',
        headers: {
          'Access-Control-Allow-Headers':'Content-Type, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset, Retry-After',
          'content-type': 'application/json;charset=utf-8'
        },
        params: {

        }
      }).then(response => {

        const allGenres = response.data.genres,

              processedGenres = allGenres.map((elem,index) => {

                return dispatch({
                  type: 'GANRES',
                  payload: elem
                })

              })

      })

  }

}
