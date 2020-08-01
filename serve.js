/* ------------------------------------------------------------------------
 *
 *         )  (           
 *        (   ) )      
 *         ) ( (           
 *       _______)_    _______     
 *    .-'---------|  |__   __|
 *   ( C|/\/\/\/\/|     | | ___  __ _ 
 *    '-./\/\/\/\/|     | |/ _ \/ _` |
 *      '_________'     | |  __/ (_| |
 *       '-------'      |_|\___|\__,_|
 *      -----------   ------------------
 *                         version 1.0.0
 * 
 * Author: 
 * -------------------------------------
 * Gerhard Richard Edens
 * 
 * Description:
 * -------------------------------------
 * The IDE development environment.
 * 
 */
const express = require('express')
const chalk = require('chalk');
const app = express()
const port = 3000
const open = require('open')

app.use(express.static('public'))

app.get('/', (req, res) => res.sendFile(__dirname + '/views/dashboard.html'))
app.get('/test', (req, res) => res.sendFile(__dirname + '/views/test.html'))

console.log(chalk.yellow(`

         )  (           
        (   ) )      
         ) ( (           
       _______)_    _______     
    .-'---------|  |__   __|
    ( C|\/\\/\\/\\/\\|     | | ___  __ _ 
    '-./\\/\\/\\/\\/|     | |\/ _ \\/ _| |
      '_________'     | |  __\/ (_| |
       '-------'      |_|\\___|\\__,_|
      -----------   ------------------
                         version 1.0.0
--------------------------------------
Author:          Gerhard Richard Edens

Description:
-------------------------------------
The IDE development environment.
`));
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))

open("http://localhost:3000")