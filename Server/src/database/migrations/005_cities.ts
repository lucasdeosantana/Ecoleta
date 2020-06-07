import Knex from 'knex'

export async function up(knex:Knex){
    return knex.schema.createTable("BrazilCities", table=>{
        table.integer("codigo_ibge").primary()
        table.string("name").notNullable()
        table.boolean("capital").notNullable()
        table.float("latitude").notNullable()
        table.float("longitude").notNullable()
        table.integer("codigo_uf").notNullable()
        .references("codigo_uf").inTable("BrazilUfs")
    })
}
export async function down(knex:Knex){
    return knex.schema.dropTable("BrazilCities")
}
