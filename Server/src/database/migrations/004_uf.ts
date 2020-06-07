import Knex from 'knex'

export async function up(knex:Knex){
    return knex.schema.createTable("BrazilUfs", table=>{
        table.integer("codigo_uf").primary()
        table.string("uf").notNullable()
        table.string("name").notNullable()
        table.float("latitude").notNullable()
        table.float("longitude").notNullable()
    })
}
export async function down(knex:Knex){
    return knex.schema.dropTable("BrazilUfs")
}