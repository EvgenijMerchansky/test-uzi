import axios from 'axios';

export const ganres = () => {

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
        console.log(response.data.genres,'response');
        const allGenres = response.data.genres,
              processedGenres = allGenres.map((elem,index) => {
                // console.log(elem)
                // return elem;

                return dispatch({
                  type: 'GANRES',
                  payload: elem
                })

              })



      })


  }

}

// * === === get all genres === === * //

export const onlyGanre = (individualGanre) => {
  console.log(individualGanre);

  return (dispatch) => {

    axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=7dd1a3813857d56dcfae3a021b23b626&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&without_genres='${individualGanre}'`,
      {
        method: 'get',
        headers: {
          'Access-Control-Allow-Headers':'Content-Type, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset, Retry-After',
          'content-type': 'application/json;charset=utf-8'
        },
        params: {

        }
      }).then(response => {
        console.log(response.data.results,'response');

        const genresArray = response.data.results;
        console.log(genresArray,'response.data.results');

        const processedGenre = genresArray.map((elem,inedx) => {

          return dispatch({
            type: 'ONLY_GANRE',
            payload: elem
          })

        })
        // const allGenres = response.data.genres,
        //       processedGenres = allGenres.map((elem,index) => {
        //         // console.log(elem)
        //         // return elem;
        //
        //
        //
        //       })




      })


  }

}
