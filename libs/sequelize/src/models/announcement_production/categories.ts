import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { announcements, announcementsId } from './announcements';

export interface categoriesAttributes {
  id: number;
  name: string;
}

export type categoriesPk = "id";
export type categoriesId = categories[categoriesPk];
export type categoriesOptionalAttributes = "id";
export type categoriesCreationAttributes = Optional<categoriesAttributes, categoriesOptionalAttributes>;

export class categories extends Model<categoriesAttributes, categoriesCreationAttributes> implements categoriesAttributes {
  id!: number;
  name!: string;

  // categories hasMany announcements via category_id
  announcements!: announcements[];
  getAnnouncements!: Sequelize.HasManyGetAssociationsMixin<announcements>;
  setAnnouncements!: Sequelize.HasManySetAssociationsMixin<announcements, announcementsId>;
  addAnnouncement!: Sequelize.HasManyAddAssociationMixin<announcements, announcementsId>;
  addAnnouncements!: Sequelize.HasManyAddAssociationsMixin<announcements, announcementsId>;
  createAnnouncement!: Sequelize.HasManyCreateAssociationMixin<announcements>;
  removeAnnouncement!: Sequelize.HasManyRemoveAssociationMixin<announcements, announcementsId>;
  removeAnnouncements!: Sequelize.HasManyRemoveAssociationsMixin<announcements, announcementsId>;
  hasAnnouncement!: Sequelize.HasManyHasAssociationMixin<announcements, announcementsId>;
  hasAnnouncements!: Sequelize.HasManyHasAssociationsMixin<announcements, announcementsId>;
  countAnnouncements!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof categories {
    categories.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(45),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'categories',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  return categories;
  }
}
