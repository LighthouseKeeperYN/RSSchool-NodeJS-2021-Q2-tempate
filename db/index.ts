import Board, { IBoard } from '../src/entities/board.model.js'
import Column, { IColumn } from '../src/entities/column.model.js'
import Task, { ITask } from '../src/entities/task.model.js'
import User, { IUser } from '../src/entities/user.model.js'

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

const testBoard = new Board({
  id: 'testBoard',
  title: 'testTitle',
  columns: [testColumn]
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
  users: { [testUser.id]: testUser },
  boards: { [testBoard.id]: testBoard },
  columns: { [testColumn.id]: testColumn },
  tasks: {
    [testBoard.id]: {
      [testTask.id]: testTask
    }
  },
}

export default db