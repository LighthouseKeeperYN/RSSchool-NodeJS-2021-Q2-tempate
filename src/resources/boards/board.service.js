import * as boardsRepo from './board.memory.repository.js';

export const getAll = () => boardsRepo.getAll();
export const getById = () => boardsRepo.getById()
export const create = () => boardsRepo.create()
export const update = () => boardsRepo.update()
export const remove = () => boardsRepo.remove()
