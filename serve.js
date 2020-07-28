/* ------------------------------------------------------------------------
 *         ║    ║    ║   ║ 
 *        ║    ║    ║   ║ 
 *       ║    ║    ║   ║ 
 *        ║    ║    ║   ║ 
 * 
 *      ██████████████████████ 
 *     ██▒░░░░░░░░░░░░░░░▒██▒▒██ 
 *     ██▒░░░░░░░░░░░▒░▒░▒██▒▒██ 
 *     ███▒▒░░░░░░▒░░▒▒▒▒█████ 
 *       ██▒░░░░▒░▒░▒▒▒▒███ 
 *        ██▒▒▒▒▒▒▒▒▒▒▒███ 
 *         █████████████
 *       ══════════════════
 *        _______         
 *       |__   __|        
 *          | | ___  __ _ 
 *          | |/ _ \/ _` |
 *          | |  __/ (_| |
 *          |_|\___|\__,_|
 * 
 *          version 1.0.0
 * 
 * Author: Gerhard Richard Edens
 * 
 * Description:
 * 
 * The development expressjs server.
 * 
 */

const express = require('express')
const app = express()
const port = 3000
const open = require('open')

app.use(express.static('public'))

app.get('/', (req, res) => res.sendFile(__dirname + '/views/dashboard.html'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))

open("http://localhost:3000")