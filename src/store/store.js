// this is to be a vuex test page for the statemanagement 

export default {
    state:{
        count:0
        // isAuthentcated: false 
    },
    mutations:{
        increment: state => state.count++,
        decrement: state => state.count--
        
    },

};
