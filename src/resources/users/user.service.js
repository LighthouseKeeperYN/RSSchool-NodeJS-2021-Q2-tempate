import * as usersRepo from './user.memory.repository.js';

export const getAll = () => usersRepo.getAll();
export const getById = () => usersRepo.getById()
export const create = () => usersRepo.create()
export const update = () => usersRepo.update()
export const remove = () => usersRepo.remove()
