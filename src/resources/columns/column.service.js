import * as columnsRepo from './column.memory.repository.js';
import Column from './column.model.js'

export const getAll = async () => Object.values(await columnsRepo.getAll());
export const getById = async ({ columnId }) => columnsRepo.getById(columnId)
export const create = async ({ body }) => columnsRepo.create(new Column(body))
export const update = async ({ columnId, body }) => columnsRepo.update(columnId, Column.fromRequest(body))
export const remove = async ({ columnId }) => columnsRepo.remove(columnId)
