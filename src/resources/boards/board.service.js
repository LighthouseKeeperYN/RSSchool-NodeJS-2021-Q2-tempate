import * as boardsRepo from './board.memory.repository.js';

export const getAll = () => boardsRepo.getAll();
export const getById = ({ userId }) => boardsRepo.getById(userId)
export const create = ({ body }) => boardsRepo.create(body)
export const update = ({ userId, body }) => boardsRepo.update(userId, body)
export const remove = ({ userId }) => boardsRepo.remove(userId)
