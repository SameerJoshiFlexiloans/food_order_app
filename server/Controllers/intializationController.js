const MongoService = require('../Services/mongoService');
const config = require('config');

class InitializationController{
    mongoService = new MongoService();
    register(app){
        app.get('/read/:type',async (req,res,next)=>{
            try{
                let value = await this.mongoService.getMenu(config.get('menuId'));
                if(req.params.type == 'indian'){
                    res.json({success:true,data:value[0].indian});
                }
                else if(req.params.type == 'maxican'){
                    res.json({success:true,data:value[0].maxican});
                }
            }catch(err){
                res.json({success:false,error:err});
            }
        });
    }
}

module.exports = InitializationController;