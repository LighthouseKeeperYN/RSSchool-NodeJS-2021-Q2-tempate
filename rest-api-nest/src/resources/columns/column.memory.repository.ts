import { getRepository } from 'typeorm';
import Column, { IColumn } from '../../entities/column.model.js';

export const getAll = async () => {
  const repo = getRepository(Column);
  return repo.find();
};

export const getById = async (id: string) => {
  const repo = getRepository(Column);
  const column = await repo.findOne(id);

  if (!column) {
    throw new Error('Column not found');
  }

  return column;
};

export const create = async (column: IColumn) => {
  const repo = getRepository(Column);
  const newColumn = repo.create(column);

  return repo.save(newColumn);
};

export const update = async (id: string, column: IColumn) => {
  const repo = getRepository(Column);
  const updateRes = await repo.update(id, column);

  if (!updateRes.affected) {
    throw new Error('Column not found');
  }

  return column;
};

export const remove = async (id: string) => {
  const repo = getRepository(Column);
  const foundColumn = await repo.findOne(id);

  if (!foundColumn) {
    throw new Error('Column not found');
  }

  await repo.delete(id);

  return foundColumn;
};
