import Knex from 'knex'

export async function up(knex:Knex){
    console.log(`It Migrating ${__filename}`)
    return knex.schema.createTable("points", table=>{
        table.increments("id").primary()
        table.string("image").notNullable()
        table.string("name").notNullable()
        table.string("email").notNullable()
        table.string("whatsapp").notNullable()
        table.string("city").notNullable()
        table.string("uf", 2).notNullable()
        table.decimal('latitude').notNullable()
        table.decimal("longitude").notNullable()
    })
    .createTable("items", table=>{
        table.increments("id").primary()
        table.string("image").notNullable()
        table.string("title").notNullable()
    })
    .createTable("point_items", table=>{
        table.increments("id").primary()
        table.integer("point_id")
            .notNullable()
            .references("id")
            .inTable('points')
        table.integer("item_id")
            .notNullable()
            .references('id')
            .inTable('items')
    })
    .createTable("BrazilUfs", table=>{
        table.integer("codigo_uf").primary()
        table.string("uf").notNullable()
        table.string("name").notNullable()
        table.float("latitude").notNullable()
        table.float("longitude").notNullable()
    })
    .createTable("BrazilCities", table=>{
        table.integer("codigo_ibge").primary()
        table.string("name").notNullable()
        table.boolean("capital").notNullable()
        table.float("latitude").notNullable()
        table.float("longitude").notNullable()
        table.integer("codigo_uf").notNullable()
        .references("codigo_uf").inTable("BrazilUfs")
    })
    .createTable("migrations_seeds", table=>{
        table.string('name')
    })
}
export async function down(knex:Knex){
    return knex.schema
    .dropTable("points")
    .dropTable("items")
    .dropTable("point_items")
    .dropTable("BrazilUfs")
    .dropTable("BrazilCities")
}