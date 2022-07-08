import fetch  from 'node-fetch';
import { PrismaClient } from "@prisma/client";
import express, { Application, Request, Response, NextFunction } from "express"
import discordClient from '../discord';

const prisma = new PrismaClient();

export async function connect(req: Request, res: Response) {
    const discordId = req.body.discordId;
    const name = req.body.name;

    if (!discordId || !name)
        return res.status(400).json({message: 'Name or discordID missing'});
    
    try {
        let user = await prisma.users.findFirst({
            where: {discordId: discordId}
        });

        if (!user) {
            user = await prisma.users.create({
                data: {
                    'discordId': discordId,
                    'name': name
                }
            })
            console.log('User Created');
            return res.status(201).json({message: 'No user found, user created', user: user});
        } else {
            console.log('User found');
            return res.status(200).json({message: 'User succesfully found', user: user});
        }
    } catch(e) {
        console.error(e);
        return res.status(500).json({message: e});
    }
}