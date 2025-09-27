const aiAndMl = async (request, response) => {
    try{
    const db = request.app.locals.db; 
    const dbData = await db.collection("Ai_and_Ml").find({}).toArray();  
    if(dbData){
        response.status(201).json({dbData})
    }else{
        response.status(400).json({message: "Fail to fetch the data"}); 
    }
   }catch(error){
      response.status(500).json({
        message: "Internal Error"
      }); 
   }
}

const cyber = async (request, response) => {
    try{
        const db = request.app.locals.db; 
        const dbData = await db.collection("cybersecurity").find({}).toArray(); 
        if(dbData){
            response.status(201).json({dbData})
        }else{
            response.status(400).json({message: "Fail to fetch the data"}); 
        }

    }catch(error){
        response.status(500).json({
            message: "Internal Error"
        })
    }

}

const ds = async (request, response) => {
    try{
        const db = request.app.locals.db; 
        const dbData = await db.collection("Data_Science").find({}).toArray(); 
        if(dbData){
            response.status(201).json({dbData})
        }else{
            response.status(400).json({message: "Fail to fetch the data"}); 
        }

    }catch(error){
        response.status(500).json({
            message: "Internal Error"
        })
    }

}

const Mobile_Application= async (request, response) => {
    try{
        const db = request.app.locals.db; 
        const dbData = await db.collection("Mobile_Application").find({}).toArray(); 
        if(dbData){
            response.status(201).json({dbData})
        }else{
            response.status(400).json({message: "Fail to fetch the data"}); 
        }

    }catch(error){
        response.status(500).json({
            message: "Internal Error"
        })
    }

}

const Ar_vr= async (request, response) => {
    try{
        const db = request.app.locals.db; 
        const dbData = await db.collection("ar_vr_mr").find({}).toArray(); 
        if(dbData){
            response.status(201).json({dbData})
        }else{
            response.status(400).json({message: "Fail to fetch the data"}); 
        }

    }catch(error){
        response.status(500).json({
            message: "Internal Error"
        })
    }
}

const blockchain= async (request, response) => {
    try{
        const db = request.app.locals.db; 
        const dbData = await db.collection("block_chain").find({}).toArray(); 
        if(dbData){
            response.status(201).json({dbData})
        }else{
            response.status(400).json({message: "Fail to fetch the data"}); 
        }

    }catch(error){
        response.status(500).json({
            message: "Internal Error"
        })
    }

}

const cloud = async (request, response) => {
    try{
        const db = request.app.locals.db; 
        const dbData = await db.collection("cloud").find({}).toArray(); 
        if(dbData){
            response.status(201).json({dbData})
        }else{
            response.status(400).json({message: "Fail to fetch the data"}); 
        }

    }catch(error){
        response.status(500).json({
            message: "Internal Error"
        })
    }

}
module.exports = { aiAndMl, cyber , ds, Mobile_Application, Ar_vr, blockchain, cloud};