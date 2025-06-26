
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.createVendors = async (req , res) => {
    try {
        const data = req.body;
        const vendor = await prisma.vendor.create({data});
        res.json(vendor);
    
    } catch (error) {
        res.status(500).json({error: error.message});

    } 

};

exports.getVendors = async (req, res) => {
    const page = parseInt(req.query.page) ||1;
    const limit = parseInt(req.query.limit) || 5 ;
    const skip = (page-1)* limit;

    const [vendors, total] = await Promise.all( [
        prisma.vendor.findMany({skip,take: limit}),
        prisma.vendor.count()
    ]);

    res.json({vendors,total});
};

exports.updateVendor = async (req,res) => {
    const{id}= req.params;
    const data = req.body;
    try{

        const vendor= await prisma.vendor.update({
            where :{id: parseInt(id)},
            data
        });
        res.json(vendor);
    } catch (error) {
        res.atatus(500).json({error:error.message});
    }
};

exports.deleteVendors = async (req,res) => {
    
    const{id} = req.params;
    try{

        await prisma.vendor.delete({
            where:{id: parseInt(id)}
        });
        res.json({message: 'Vendor deleted'});
    }catch(error){
        res.status(500).json({error:error.message});
    }
};