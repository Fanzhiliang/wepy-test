import Vuex from '@wepy/x';
// import cart from './modules/cart'

export default new Vuex.Store({
  state: {
    cartList: [
      { name: '笔记本电脑', number: 10 },
      { name: '好的手机', number: 5 }
    ]
  },
  mutations: {
    // 添加购物车
    addCart(state, goods) {
      const findObjIndex = state.cartList.findIndex(it => it.name === goods.name)

      if (findObjIndex >= 0) {
        state.cartList[findObjIndex].number += parseInt(goods.number)
      } else {
        state.cartList.push(goods)
      }
    },
    // 修改购物车
    setCart(state, goods) {
      const findObjIndex = state.cartList.findIndex(it => it.name === goods.name)

      if (findObjIndex >= 0) {
        state.cartList[findObjIndex].number = parseInt(goods.number)
      }
    },
    // 删除购物车
    deleteCart(state, goods) {
      const findObjIndex = state.cartList.findIndex(it => it.name === goods.name)

      if (findObjIndex >= 0) {
        state.cartList.splice(findObjIndex, 1)
      }
    }
  },
  actions: {},
  // modules: {
  //   cart: cart
  // }
});
