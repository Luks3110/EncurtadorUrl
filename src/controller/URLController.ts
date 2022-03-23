import { URLModel } from './../model/url';
import { config } from './../config/constants';
import { Request, Response } from 'express'
import  shortid from 'shortid'
export class URLController{
    public async shorten(req: Request, res: Response): Promise<void>{
        console.log(req.body)
        // Ver se a URL já existe
        const { originURL } = req.body
        const url = URLModel.findOne({ originURL })
        if(url){
            res.json(url)
            return
        }
        // Criar o hash para URL
        const hash = shortid.generate()
        const shortUrl = `${config.API_URL}/${hash}`
        // Salvar a URL no banco
        const newUrl = URLModel.create({ hash, shortUrl, originURL })
        // Retornar a URL
        res.json(newUrl)
    }

    public async redirect(req: Request, res: Response): Promise<void> {
        // Pegar o hash da URL
        const { hash } = req.params
        // Encontrar a URL original pelo hash
        const url = {
            originURL: 'https://www.linkedin.com/feed/',
            hash: "sNMMHJ5vL",
	        shortUrl: "http://localhost:3000/sNMMHJ5vL"
        }
        // Redirecionar para a URL original
        res.redirect(url.originURL)
    }
}