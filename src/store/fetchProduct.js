import getData from "../api/apiFetch";

export const namespaced = true;

export const state = {
  product: [],
};

export const mutations = {
  ADD_DATA(state, PayLoad) {
    state.product = PayLoad;
  },
};

export const actions = {
  fetchData({ commit }) {
    console.log("in Actions");
    getData()
      .then((data) => {
        console.log("fetched Data :", data);
        commit("ADD_DATA", data);
      })
      .catch((e) => console.log(e));
  },
};
