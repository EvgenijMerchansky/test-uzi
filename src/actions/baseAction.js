import axios from 'axios';
import store from '../store';

export const getData = () => {

  return (dispatch) => {

    axios.get(
      'https://api.themoviedb.org/3/movie/top_rated?api_key=7dd1a3813857d56dcfae3a021b23b626&language=en-US&page=1',
      {
        method: 'get',
        headers: {
          'Access-Control-Allow-Headers':'Content-Type, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset, Retry-After',
          'content-type': 'application/json;charset=utf-8'
        },
        params: {

        }
      }).then(response => {

        // console.log(response,'response')

        const filmData = response.data.results
        filmData.map((elem,index) => {

          return dispatch({
            type: 'ADD_DATA',
            payload: elem

          })

        })

      })

    }

  }

export const newUser = (arg,password,repassword) => {

  const id = () => {
    return '_' + Math.random().toString(36).substr(2, 9)
  };

  const newUserDATA = {
    name: arg.length < 3 || arg.length > 20 ? null : arg,
    id: id(),
    password: password.length < 8 || password.length > 20 ? null : password,
    repassword: repassword == password ? repassword : null,
    favorites: [],
    watchLater: [],
    registrated: false,
    logined: false
  };

  const errors = {
    ErrorName: "Don't walid login!",
    ErrorPassword: "Don't walid password!",
    ErrorRepassword: "Passwords do not match!"
  };

    return (dispatch) => {

      store.dispatch({
        type: 'NEW_USER',
        payload: newUserDATA.name && newUserDATA.password && newUserDATA.repassword != null ? newUserDATA : errors
      })

    }
}

export const userCheck = (login,password) => {

  const id = () => {
    return '_' + Math.random().toString(36).substr(2, 9)
  };

  return{
    type: 'CHECK_USER',
    payload: {
      name: login,
      id: id(),
      password: password,
      favorites: [],
      watchLater: [],
      registrated: false,
      logined: false,
      valid: false
    }
  }
}

export const change = (typingAttribute,listFilms) => {

  const changeF = listFilms.filter((elem, index) => {
    const value = typingAttribute.toLowerCase();
    return ~elem.props.children[0].props.children.toLowerCase().indexOf(value);

  })

  return (dispatch) => {
    dispatch({
      type: 'CHANGE_LIST',
      payload: changeF
    })

  }

}

export const tradeData = (id,films) => {

  return (dispatch) => {

    const changeF = films.filter((elem, index) => {

      const idsv = elem.genre_ids.indexOf(Number(id));

      if(idsv == 0){

        return elem;

      }

    })

    const sortGettingData = changeF.map((elem,index) => {

      return elem;

    })

    return dispatch({
      type: 'TRADE_DATA',
      payload: sortGettingData
    })

  }

}

export const like = (vote_count) => {

  return {
    type: 'GET_LIKE',
    payload: vote_count
  }

}

export const addLike = () => {

  return {
    type: 'ADD_LIKE',
    payload: 'test'
  }

}


export const faveData = (dataFave) => {

  return {
    type: 'ADD_FAVE_DATA',
    payload: dataFave
  }

}

export const laterData = (dataLater) => {

  return {
    type: 'ADD_LATER_DATA',
    payload: dataLater
  }

}
