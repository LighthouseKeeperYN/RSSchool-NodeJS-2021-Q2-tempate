import * as columnsRepo from './column.memory.repository.js';

export const getAll = () => columnsRepo.getAll();
export const getById = () => columnsRepo.getById()
export const create = () => columnsRepo.create()
export const update = () => columnsRepo.update()
export const remove = () => columnsRepo.remove()
