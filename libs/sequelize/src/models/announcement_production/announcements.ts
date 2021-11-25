import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { articles, articlesId } from './articles';
import type { categories, categoriesId } from './categories';

export interface announcementsAttributes {
  id: number;
  category_id: number;
  article_id: number;
}

export type announcementsPk = "id";
export type announcementsId = announcements[announcementsPk];
export type announcementsOptionalAttributes = "id";
export type announcementsCreationAttributes = Optional<announcementsAttributes, announcementsOptionalAttributes>;

export class announcements extends Model<announcementsAttributes, announcementsCreationAttributes> implements announcementsAttributes {
  id!: number;
  category_id!: number;
  article_id!: number;

  // announcements belongsTo articles via article_id
  article!: articles;
  getArticle!: Sequelize.BelongsToGetAssociationMixin<articles>;
  setArticle!: Sequelize.BelongsToSetAssociationMixin<articles, articlesId>;
  createArticle!: Sequelize.BelongsToCreateAssociationMixin<articles>;
  // announcements belongsTo categories via category_id
  category!: categories;
  getCategory!: Sequelize.BelongsToGetAssociationMixin<categories>;
  setCategory!: Sequelize.BelongsToSetAssociationMixin<categories, categoriesId>;
  createCategory!: Sequelize.BelongsToCreateAssociationMixin<categories>;

  static initModel(sequelize: Sequelize.Sequelize): typeof announcements {
    announcements.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'categories',
        key: 'id'
      }
    },
    article_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'articles',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'announcements',
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
      {
        name: "fk_announcement_categories_idx",
        using: "BTREE",
        fields: [
          { name: "category_id" },
        ]
      },
      {
        name: "fk_announcement_articles_idx",
        using: "BTREE",
        fields: [
          { name: "article_id" },
        ]
      },
    ]
  });
  return announcements;
  }
}
