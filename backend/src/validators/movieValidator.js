import {body, validationResult} from 'express-validator'

export const movieRules=[
    body('title').notEmpty().isString().trim().withMessage('Title is required,must be a string.'),
    body('year').notEmpty().isInt({min:4}).withMessage('Year must be a integer.'),
    body('genre').notEmpty().isString().trim().withMessage('Genre must be String.'),
]
export const handleMovieValidation = (req,res,next)=>{
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        res.status(400).json({errors:errors.array()})
    }
    next()
}