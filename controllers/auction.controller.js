var UserModel = require('../models/user.model');
var ArtifactModel = require('../models/artifact.model');
module.exports = function(app){
    app.get('/',(req,res)=>{
        res.render('layout');
    });

    app.post('/signup',function(req,res){
        if (!req.body.name || !req.body.address){
            res.json({err:1,data:{}});
            return;
        }
        var userNew = new UserModel({
            name:req.body.name,
            address:req.body.address,
            
        });
        userNew.save(function(value){
            if (value){
                res.json({err:2,data:{}});
            } else {
                res.json({err:0,data:userNew});
            }
        });
    });
    app.post('/login',function(req,res){
        if (!req.body.name || !req.body.address){
            res.json({err:1,data:{}});
            return;
        }
        UserModel.findOne({address:req.body.address}).then(function(value){
            if (!value){
                res.json({err:2,data:{}});
                return;
            }
            res.json({err:0,data:value});
        });
    });
    app.get('/bid',function(req,res){
        ArtifactModel.find().then(function(value){
            if (value.length==0){
                res.json({err:2,data:{}});
                return;
            }
            res.json({err:0,data:value});
        });

    });
    app.post('/create',function(req,res){
        if (!req.body.task || !req.body.maxvalue || !req.body.address){
            res.json({err:1,data:{}});
            return;
        }
        var artifact = new ArtifactModel({
            task:req.body.task,
            maxValue:req.body.maxvalue,
            address:req.body.address,
            tokenId:req.body.tokenId,
        });
        artifact.save(function(value){
            if (value){
                res.json({err:2,data:{}});
            } else {
                res.json({err:0,data:value});
            }
        });
    });

    app.post('/add',function(req,res){
        if (!req.body.tokenId){
            res.json({err:1,data:{}});
            return;
        }
        var bid = {
            PA:req.body.PA,
            LF:req.body.LF,
            BW:req.body.BW,
            P:req.body.P,
            IS:req.body.IS,
            CS:req.body.CS,
        };
        ArtifactModel.updateOne({tokenId:req.body.tokenId},{$set:{bid:bid}}).then(function(value){
            ArtifactModel.updateOne({tokenId:req.body.tokenId},{$set:{currentWinner:req.body.currentWinner}}).then(function(value){
                ArtifactModel.updateOne({tokenId:req.body.tokenId},{$set:{currentBid:req.body.currentBid}}).then(function(value){
                    res.json({err:0,data:{}});
                });
            });
        });
    });
    app.get('/token/:tokenId',function(req,res){
        if (!req.params.tokenId){
            res.json({err:1,data:{}});
            return;
        }
        ArtifactModel.findOne({tokenId:req.params.tokenId}).then(function(value){
            if(!value){
                res.json({err:2,data:{}});
                return;
            }
            res.json(value);
        });
    });
}