const logger = (req,res, next)=>{
let hour=new Date().getHours()
let day=new Date().getDay()
if(hour<9 || hour>17 || day===0 || day===6){
res.status(400).send('<h1>The website is not avaible now . Please revisit us  Monday to Friday,  from 9 to 17</h1>')
}
else{next()}

}

module.exports = logger;