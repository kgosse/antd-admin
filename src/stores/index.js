import { createRootStore } from 'libx';
import TodoStore from './TodoStore';
import UserStore from './UserStore';
import TodosScreenStore from './screens/TodosScreenStore';
import AppScreenStore from './screens/AppScreenStore';
import LoginScreenStore from './screens/LoginScreenStore';

// if using Server Side Rendering, do this once per request.
export const rootStore = createRootStore({
  todoStore: TodoStore,
  userStore: UserStore,
  // used for UI state
  todosScreenStore: TodosScreenStore,
  appScreenStore: AppScreenStore,
  loginScreenStore: LoginScreenStore
})