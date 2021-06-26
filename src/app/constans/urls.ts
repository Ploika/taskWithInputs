import { environment } from "src/environments/environment";

export const urls = {
  users: `${environment.API}/users`,
  todos: `${environment.API}/todos`,
  todosWithUserId: `${environment.API}/todos?userId=`
}
