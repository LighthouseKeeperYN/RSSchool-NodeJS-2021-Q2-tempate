import /* Board, */ { IBoard } from './resources/boards/board.model.js'
import /* Column, */ { IColumn } from './resources/columns/column.model.js'
import /* Task, */ { ITask } from './resources/tasks/task.model.js'
import /* User, */ { IUser } from './resources/users/user.model.js'

// const testBoard = new Board({
//   id: 'testBoard',
//   title: 'testTitle',
//   columns: ['testColumn']
// })

// const testUser = new User({
//   id: 'testUser',
//   name: 'testName',
//   login: 'testLogin',
//   password: 'testPassword',
// })

// const testColumn = new Column({
//   id: 'testColumn',
//   title: 'testTitle',
//   order: 0
// })

// const testTask = new Task({
//   id: 'testTask',
//   title: 'testTitle',
//   order: 0,
//   description: 'testDescription',
//   userId: testUser.id,
//   boardId: testBoard.id,
//   columnId: testColumn.id,
// })

interface IDb {
  users: {
    [userId: string]: IUser
  },
  boards: {
    [boardId: string]: IBoard
  },
  columns: {
    [columnID: string]: IColumn
  },
  tasks: {
    [boardId: string]: {
      [taskId: string]: ITask
    }
  },
}

const db: IDb = {
  users: { /* [testUser.id]: testUser */ },
  boards: { /* [testBoard.id]: testBoard */ },
  columns: { /* [testColumn.id]: testColumn */ },
  tasks: {
/*     [testBoard.id]: {
      [testTask.id]: testTask
    } */
  },
}

export default db