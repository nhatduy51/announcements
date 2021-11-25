import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { announcements, announcementsId } from './announcements';

export interface articlesAttributes {
  id: number;
  headline: string;
  description?: string;
  state: boolean;
  body: string;
  priority: number;
  photo_url?: string;
  tags?: string;
  created_at: Date;
  updated_at: Date;
  published_at?: Date;
}

export type articlesPk = "id";
export type articlesId = articles[articlesPk];
export type articlesOptionalAttributes = "id" | "description" | "state" | "priority" | "photo_url" | "tags" | "created_at" | "updated_at" | "published_at";
export type articlesCreationAttributes = Optional<articlesAttributes, articlesOptionalAttributes>;

export class articles extends Model<articlesAttributes, articlesCreationAttributes> implements articlesAttributes {
  id!: number;
  headline!: string;
  description?: string;
  state!: boolean;
  body!: string;
  priority!: number;
  photo_url?: string;
  tags?: string;
  created_at!: Date;
  updated_at!: Date;
  published_at?: Date;

  // articles hasMany announcements via article_id
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

  static initModel(sequelize: Sequelize.Sequelize): typeof articles {
    articles.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    headline: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    state: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    priority: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    photo_url: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    tags: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    published_at: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'articles',
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
  return articles;
  }
}
