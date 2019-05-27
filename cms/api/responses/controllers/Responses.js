'use strict';

/**
 * Responses.js controller
 *
 * @description: A set of functions called "actions" for managing `Responses`.
 */

module.exports = {

  /**
   * Retrieve responses records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.responses.search(ctx.query);
    } else {
      return strapi.services.responses.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a responses record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.responses.fetch(ctx.params);
  },

  /**
   * Count responses records.
   *
   * @return {Number}
   */

  count: async (ctx, next, { populate } = {}) => {
    return strapi.services.responses.count(ctx.query, populate);
  },

  /**
   * Create a/an responses record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.responses.add(ctx.request.body);
  },

  /**
   * Update a/an responses record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.responses.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an responses record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.responses.remove(ctx.params);
  }
};
