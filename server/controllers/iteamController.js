import Iteam from '../models/iteam.js';

export const createIteam = async(req,res)=>{
    try{
        const{title ,description,image,location,status,user}=req.body;
        console.log(req.body);
        
        if(!title || !status){
            return res.status(400).json({message:"Title and Status are required"});
        }

        const iteam = await Iteam.create({
            title,
            description,
            image,
            location,
            status,
            user
        });

        res.status(201).json({message:"Iteam created successfully"});

    }catch(err){
        res.status(500).json({message:err.message})
    }
}

