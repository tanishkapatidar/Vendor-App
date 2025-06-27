
const{PrismaClient}= require('@prisma/client');
const prisma = new PrismaClient();

async function createVendor(req , res) {
    try {
        const data = req.body;
        console.log("Received vendor data:", data);
        const vendor = await prisma.vendor.create({data});
        res.json(vendor);
    
    } catch (error) {
        console.error("Error in createVendor:", error);
        res.status(500).json({error: error.message});

    } 

};

async function getVendors(req, res) {
    const page = parseInt(req.query.page) ||1;
    const limit = parseInt(req.query.limit) || 5 ;
    const skip = (page-1)* limit;

    const [vendors, total] = await Promise.all( [
        prisma.vendor.findMany({skip,take: limit}),
        prisma.vendor.count()
    ]);

    res.json({vendors,total});
};

async function updateVendor(req,res) {
    const{id}= req.params;
    const data = req.body;
    try{

        const vendor= await prisma.vendor.update({
            where :{id: parseInt(id)},
            data
        });
        res.json(vendor);
    } catch (error) {
        res.status(500).json({error:error.message});
    }
};

async function deleteVendor(req,res) {
    
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

module.exports = {
    createVendor,
    getVendors,
    updateVendor,
    deleteVendor
  };
  