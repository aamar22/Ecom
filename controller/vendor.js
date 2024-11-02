const vendor = require("../model/vendor.js")
const QRCode = require('qrcode');


exports.add=async function(req,res){
    try{
        let user = req.body
        let create = vendor.create(user)
        res.status(200).json(create)

    }catch(error){
        res.status(500).json(error.message)

    }
},
exports.get= async function(req,res){
    try{
        const vendor = await vendor.findOne({vendorID:req.body.vendorID})
        if(!vendor){
            res.status(404).send("vendor not found")
        }
        const qrdata = `http://127.0.0.1:3000/vendor/${vendorID}`
        const qrCodeUrl = await QRCode.toDataURL(qrData);
         res.json({ qrCodeUrl });
    }
    catch(error){
        res.status(500).send('Internal Server Error');
    }
}