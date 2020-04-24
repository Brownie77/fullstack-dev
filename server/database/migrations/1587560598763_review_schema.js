'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ReviewSchema extends Schema {
  up () {
    
    this.create('reviews', (table) => {
      table.increments()//уникальный порядковый номер ревью для отслеживания и последующего менеджмента
      table.integer('user_id')//идентификатор id пользователя, которому проводится данное ревью. Присваивается при создании нового ревью
      table.string('title', 255)//заголовок ревью
      table.text('body')
      table.timestamps()
    })
  }

  down () {
    this.drop('reviews')
  }
}

module.exports = ReviewSchema
