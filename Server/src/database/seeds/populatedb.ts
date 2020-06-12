import Knex from 'knex'
import states from './StartData/states'
import cities from './StartData/cities'


export async function seed(knex:Knex){
    console.log("Hey, We are now Creating your database....")
    console.log("The Creation will delay few minutes....")
    console.log("It's a Perfect Time to take a cofee....")
    console.log()
    console.log(`
    ., '''''''''''''''''' ,.
 .'   .oooooo$$$$$ooooooo.   '.
::  ,$$$$$$$$$$$$$$$$$$$$$$,  ',
|;  '$$$$$$$$$$$$$$$$$$$$$$'    ''''''''''.
|;     ''''''$$$$$'''''''       ,:''''':, |
|;   '|                   |'    ||      | |
|;   '|                   |'    ||      | |
|;   '|                   |'    ||      | |
|;   '|                   |'    ||      | |
|;   '|                   |'    ':.....:' |
|;   '|                   |'     ,,,,,,,,,'
|;   '|                   |'    ;
|;.   |                   |   .'
 '||,,,                   ,,,;'
    ''';;;;,,,,,,,,,,,;;;;'''
           '''''''''''`)
console.log()
    await knex("items").insert([
        {title:"Lâmpadas", image:"lampadas.svg"},
        {title:"Pilhas e Baterias", image:"baterias.svg"},
        {title:"Papéis e Papelão", image:"papeis-papelao.svg"},
        {title:"Resíduos Eletrônicos", image:"eletronicos.svg"},
        {title:"Resíduos Orgânicos", image:"organicos.svg"},
        {title:"Óleo de Cozinha", image:"oleo.svg"},
    ])
    await knex("BrazilUfs").insert(states)
    var percente = 0
    process.stdout.write(`${percente}% Completed`)
    for(let i=0; i<cities.length; i++){
        await knex("BrazilCities").insert(cities[i])
        if(i%56==0){
            percente++
            process.stdout.clearLine(0)
            process.stdout.cursorTo(0)
            process.stdout.write(`${percente}% Completed`)
        }
  
    }
    console.log()
    console.log(`Database was Create with Success!
    The list of City are powered by: kelvins in 
    GitHub: https://github.com/kelvins/Municipios-Brasileiros`)
}
function sleep(ms:number) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }   
export default seed