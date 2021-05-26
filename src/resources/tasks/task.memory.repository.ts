import db from '../../db.js'
import { ITask } from './task.model';

export const getAll = async (boardId: string) => db.tasks[boardId]
export const getById = async (boardId: string, taskId: string) => {
  if (!db.tasks[boardId]?.[taskId]) {
    throw new Error('Task not found')
  }

  return db.tasks[boardId][taskId]
}
export const create = async (boardId:string, task:ITask) => {
  if (!db.tasks[boardId]) {
    throw new Error("Board doesn't exist")
  }

  db.tasks[boardId][task.id] = task
  return db.tasks[boardId][task.id]
};
export const update = async (boardId:string, taskId:string, task:ITask) => {
  if (!db.tasks[boardId]?.[taskId]) {
    throw new Error('Task not found')
  }

  db.tasks[boardId][taskId] = { ...db.tasks[boardId][taskId], ...task }
  return db.tasks[boardId][taskId]
};
export const remove = async (boardId:string, taskId:string) => {
  if (!db.tasks[boardId]?.[taskId]) {
    throw new Error('Task not found')
  }

  const deletedTask = db.tasks[boardId][taskId]
  delete db.tasks[boardId][taskId]
  return deletedTask
}
export const unassignAll = async (userId:string) => {
  const allTasks = Object.values(db.tasks).map(boardTasks => Object.values(boardTasks)).flat()
  allTasks.forEach((task: ITask) => {
    if (!(task.userId === userId) || !db.tasks[task.boardId]) return
    db.tasks[task.boardId][task.id].userId = null
  })
}