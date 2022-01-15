const HashingService = require('../Services/hashingService');
const MongoService = require('../Services/mongoService');
const UserValidationService = require('../Services/userValidationService');

class UserAuthenticationController{
    hashingService = new HashingService();
    mongoService = new MongoService();
    userValidationService = new UserValidationService();
    register(app){
        app.route('/signup')
        .post(async (request, response, next) =>{
            const {email,pass} = request.body;
            let user = await this.mongoService.getPass(email);
            if(user && user.length){
                response.json({success:false,message:"User already exist"});
            }
            else{
                await this.mongoService.addUser(email,pass);
                response.json({success:true,message:"You Succesfully Signed Up"});
            }
        });

        app.route('/login')
        .post(async (request,response,next) =>{
            const {email,pass} = request.body;
            let value = await this.mongoService.getPass(email);
            let correct = await this.hashingService.compareHash(pass,value[0].pass);
            if(correct){
                response.json({success:true,message:"You Logged In succesfully"});
            }else{
                response.json({success:false,message:"Please Enter Correct Password"});
            }
        });
    }
}

module.exports = UserAuthenticationController