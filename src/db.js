import Board from './resources/boards/board.model.js'
import Column from './resources/columns/column.model.js'
import Task from './resources/tasks/task.model.js'
import User from './resources/users/user.model.js'

const testBoard = new Board({
  id: 'testBoard',
  title: 'testTitle',
  column: 'testColumn'
})

const testUser = new User({
  id: 'testUser',
  name: 'testName',
  login: 'testLogin',
  password: 'testPassword',
})

const testColumn = new Column({
  id: 'testColumn',
  title: 'testTitle',
  order: 0
})

const testTask = new Task({
  id: 'testTask',
  title: 'testTitle',
  order: 0,
  description: 'testDescription',
  userId: testUser.id,
  boardId: testBoard.id,
  columnId: testColumn.id,
})

const db = {
  boards: { [testBoard.id]: testBoard },
  columns: { [testColumn.id]: testColumn },
  tasks: {
    [testBoard.id]: {
      [testTask.id]: testTask
    }
  },
  users: { [testUser.id]: testUser }
}

export default db