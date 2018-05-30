import { Request, Response } from 'express'

export let hi = (req: Request, res: Response) => {
    res.send("hello")
}

export let hello = (req: Request, res: Response) => {
    res.send("how's it going?")
}

export let awesome = (req: Request, res: Response) => {
    res.send("EVERYTHING IS AWESOME")
}