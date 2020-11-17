import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let userInfo = JSON.parse(localStorage.getItem('Info'));

const state = {
    user: userInfo
};

const mutations = {

};

const actions = {};

const getters = {};

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
})