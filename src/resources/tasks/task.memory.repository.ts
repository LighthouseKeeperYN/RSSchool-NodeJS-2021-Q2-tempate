import { getRepository } from 'typeorm';
import Task, { ITask } from '../../entities/task.model.js';

export const getAll = async () => {
  const repo = getRepository(Task)
  return repo.find()
};

export const getById = async (id: string) => {
  const repo = getRepository(Task)
  const task = await repo.findOne(id)

  if (!task) {
    throw new Error('Task not found')
  }

  return task
}

export const create = async (task: ITask) => {
  const repo = getRepository(Task)
  const newTask = repo.create(task)

  return repo.save(newTask)
};

export const update = async (id: string, task: ITask) => {
  const repo = getRepository(Task)
  const updateRes = await repo.update(id, task)

  if (!updateRes.affected) {
    throw new Error('Task not found')
  }

  return task
};

export const remove = async (id: string) => {
  const repo = getRepository(Task)
  const foundTask = await repo.findOne(id)

  if (!foundTask) {
    throw new Error('Task not found')
  }

  await repo.delete(id)

  return foundTask
}

export const unassignAll = async (userId: string) => {
  const repo = getRepository(Task);
  await repo.update({ userId }, { userId: null });
}