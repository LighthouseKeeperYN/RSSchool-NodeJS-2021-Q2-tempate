import * as columnsRepo from './column.memory.repository.js';
import Column, { IColumn } from '../../entities/column.model.js'

export const getAll = async () => Object.values(await columnsRepo.getAll());
export const getById = async (columnId: string) => columnsRepo.getById(columnId)
export const create = async (body: IColumn) => columnsRepo.create(new Column(body))
export const update = async (columnId: string, body: IColumn) => columnsRepo.update(columnId, Column.fromRequest(body))
export const remove = async (columnId: string) => columnsRepo.remove(columnId)
