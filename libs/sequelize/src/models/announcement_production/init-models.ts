import type { Sequelize, Model } from "sequelize";
import { announcements } from "./announcements";
import type { announcementsAttributes, announcementsCreationAttributes } from "./announcements";
import { articles } from "./articles";
import type { articlesAttributes, articlesCreationAttributes } from "./articles";
import { categories } from "./categories";
import type { categoriesAttributes, categoriesCreationAttributes } from "./categories";

export {
  announcements,
  articles,
  categories,
};

export type {
  announcementsAttributes,
  announcementsCreationAttributes,
  articlesAttributes,
  articlesCreationAttributes,
  categoriesAttributes,
  categoriesCreationAttributes,
};

export function initModels(sequelize: Sequelize) {
  announcements.initModel(sequelize);
  articles.initModel(sequelize);
  categories.initModel(sequelize);

  announcements.belongsTo(articles, { as: "article", foreignKey: "article_id"});
  articles.hasMany(announcements, { as: "announcements", foreignKey: "article_id"});
  announcements.belongsTo(categories, { as: "category", foreignKey: "category_id"});
  categories.hasMany(announcements, { as: "announcements", foreignKey: "category_id"});

  return {
    announcements: announcements,
    articles: articles,
    categories: categories,
  };
}
