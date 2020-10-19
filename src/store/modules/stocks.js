import stocks from '@/data/stocks'

export default {
    state: {
        stocks:[]
    },
    mutations: {
        setStocks(state,stocks){
            state.stocks = stocks
        }
    },
    actions:{
        buyStock({ commit }, order){
            console.log(order)
            commit()
        },
        initStocks({commit}){
            console.log('initStocks...')
            commit('setStocks',stocks)
        }
    },
    getters:{
        stock(state){
            return state.stocks
        }
    }
}