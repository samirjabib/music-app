const customHeader = (req, res, next) => {
    try{
        const apiKey = req.headers.apikey;
        if(apiKey ==="samir-1"){
            next()
        }else{
            res.status(403)
            res.send({ error:"API_KEY_NO_ES_CORREECTA"})
        }
    }catch(error){
        res.status(403)
        res.send({error:"algo_ocurrio_en_el_custom_header"})
    }
}

module.exports = { customHeader }