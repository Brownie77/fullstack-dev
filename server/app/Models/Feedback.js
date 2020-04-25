'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Feedback extends Model {
    review() {
        return this.belongsTo('App/Models/Review')
    }
}

module.exports = Feedback
