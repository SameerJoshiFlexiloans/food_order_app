const MongoService = require('../Services/mongoService');

class InitializationController{
    mongoService = new MongoService();
    register(app){
        app.get('/read/:type',async (req,res,next)=>{
            try{
                let value = await this.mongoService.getMenu("61dedc7ba090dc1c698c0ab3");
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