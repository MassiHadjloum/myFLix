import { TypesActions } from "redux/actions/actions-type";
import data from "Views/list-de-films";


const initialState = {
  movies: data,
  searched: "",
  mylist: [],
  header_movie: data[Math.floor(Math.random() * data.length)],
};

const getIndex = (list, item) => {
  return list.findIndex((it) => it.id === item.id);
};

const filterData = (title) => {
  return initialState.movies.filter((movie) =>
    movie.original_title?.toLocaleLowerCase().includes(title)
  ); //.original_title.toLowerCase().includes(initialState.searched));
};

const addToList = (movie) => {
  const exists = initialState.mylist.includes(movie);
  //const idx = initialState.movies.findIndex((mv) => mv.id === movie.id);
  if (!exists) {
    movie.inmylist = true;
    initialState.mylist.push(movie);
    console.log("add to list ", movie.inmylist);
  }
  //console.log("reducer add to list ", initialState.mylist);
  return initialState.mylist /* .includes(movie)
    ? initialState.mylist
    : initialState.mylist.push(movie) */;
};

const removefromlist = (movie) => {
  const idx = initialState.mylist.findIndex((mv) => mv.id === movie.id); // getIndex(initialState.mylist, movie)
  // console.log(movie.original_title, " ", idx);
  if (idx !== -1) {
    movie.inmylist = false;
    initialState.mylist.splice(idx, 1);
  }
  // console.table(initialState.mylist)
  return initialState.mylist;
};

const likeMovie = (id, like) => {
  const idx = initialState.movies.findIndex((movie, index) => movie.id === id);
  console.log("first");
  if (like) {
    initialState.movies[idx].vote_count += 1;
  } else {
    initialState.movies[idx].vote_count -= 1;
  }
  return initialState.movies;
};

export const movieReducer = (initState = initialState, { type, payload }) => {
  switch (type) {
    case TypesActions.GET_MOVIES:
      return initState;
      break;
    case TypesActions.SEARCH_MOVIE:
      console.log("data ", filterData(payload), " searched ", payload);
      return {
        ...initState,
        searched: payload,
        movies:  filterData(payload).length === 0 ? initState.movies : filterData(payload),
      };
      break;
    case TypesActions.ADD_TO_MY_LIST_MOVIE:
      return {
        ...initState,
        mylist: addToList(payload),
      };
      break;
    case TypesActions.LIKE_MOVIE:
      return {
        ...initState,
        movies: likeMovie(payload.id, payload.like),
      };
      break;
    case TypesActions.REMOVE_FROM_MY_LIST:
      return {
        ...initState,
        mylist: removefromlist(payload),
      };
    default:
      return initState;
      break;
  }
};
