import * as columnsRepo from './column.memory.repository.js';

export const getAll = () => columnsRepo.getAll();
export const getById = ({ userId }) => columnsRepo.getById(userId)
export const create = ({ body }) => columnsRepo.create(body)
export const update = ({ userId, body }) => columnsRepo.update(userId, body)
export const remove = ({ userId }) => columnsRepo.remove(userId)
