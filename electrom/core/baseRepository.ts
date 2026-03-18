export class BaseRepository {
  protected model: any;

  constructor(model: any) {
    this.model = model;
  }

  async getAll() {
    return this.model.findAll({
      attributes: {
        exclude: ["createdAt", "updatedAt", "deletedAt"],
      },
    });
  }

  async getById(id: string) {
    return this.model.findByPk(id);
  }

  async create(data: any) {
    return this.model.create(data);
  }

  async update(id: string, data: any) {
    const item = await this.model.findByPk(id);
    if (!item) return null;

    await item.update(data);
    return item;
  }

  async destroy(id: string) {
    const deleted = await this.model.destroy({
      where: { id },
    });

    return deleted > 0;
  }
}
