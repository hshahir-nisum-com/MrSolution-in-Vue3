import { createStore } from "vuex";
import * as fetchDataFromApi from "./fetchProduct";

export default createStore({
  state: {},
  modules: {fetchDataFromApi},
});
