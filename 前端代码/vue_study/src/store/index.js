import { createStore } from 'vuex'

// 创建 Vuex Store
const store = createStore({
  // 状态（State）- 存储数据
  state: {
    count: 0,
    user: {
      name: '张三',
      age: 18
    },
    todos: [
      { id: 1, text: '学习 Vue', done: false },
      { id: 2, text: '学习 Vuex', done: false }
    ]
  },

  // 变更（Mutations）- 同步修改状态
  mutations: {
    // 增加计数
    INCREMENT(state) {
      state.count++
    },
    
    // 减少计数
    DECREMENT(state) {
      state.count--
    },
    
    // 设置计数
    SET_COUNT(state, value) {
      state.count = value
    },
    
    // 更新用户信息
    UPDATE_USER(state, user) {
      state.user = { ...state.user, ...user }
    },
    
    // 添加待办事项
    ADD_TODO(state, todo) {
      state.todos.push({
        id: Date.now(),
        text: todo.text,
        done: false
      })
    },
    
    // 切换待办事项状态
    TOGGLE_TODO(state, id) {
      const todo = state.todos.find(t => t.id === id)
      if (todo) {
        todo.done = !todo.done
      }
    },
    
    // 删除待办事项
    DELETE_TODO(state, id) {
      state.todos = state.todos.filter(t => t.id !== id)
    }
  },

  // 动作（Actions）- 异步操作，提交 Mutations
  actions: {
    // 异步增加计数
    incrementAsync({ commit }) {
      setTimeout(() => {
        commit('INCREMENT')
      }, 1000)
    },
    
    // 异步获取用户信息
    async fetchUser({ commit }) {
      // 模拟 API 请求
      const response = await new Promise(resolve => {
        setTimeout(() => {
          resolve({
            name: '李四',
            age: 25
          })
        }, 1000)
      })
      commit('UPDATE_USER', response)
    },
    
    // 异步添加待办事项
    addTodoAsync({ commit }, todo) {
      return new Promise(resolve => {
        setTimeout(() => {
          commit('ADD_TODO', todo)
          resolve()
        }, 500)
      })
    }
  },

  // 获取器（Getters）- 计算属性，从 state 派生数据
  getters: {
    // 获取计数
    getCount: (state) => state.count,
    
    // 获取双倍计数
    doubleCount: (state) => state.count * 2,
    
    // 获取用户信息
    getUser: (state) => state.user,
    
    // 获取用户名
    getUserName: (state) => state.user.name,
    
    // 获取所有待办事项
    getAllTodos: (state) => state.todos,
    
    // 获取未完成的待办事项
    getUndoneTodos: (state) => state.todos.filter(todo => !todo.done),
    
    // 获取已完成的待办事项
    getDoneTodos: (state) => state.todos.filter(todo => todo.done),
    
    // 获取待办事项数量
    getTodoCount: (state) => state.todos.length,
    
    // 获取未完成数量
    getUndoneCount: (state) => state.todos.filter(todo => !todo.done).length
  },

  // 模块（Modules）- 将 store 分割成模块
  modules: {
    // 可以在这里添加模块
    // user: userModule,
    // product: productModule
  }
})

export default store

