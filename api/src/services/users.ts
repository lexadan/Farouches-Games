import { PrismaClient } from "@prisma/client";
import express, { Application, Request, Response, NextFunction } from "express"

const prisma = new PrismaClient();

export async function deleteUser(req: Request, res: Response) {
    const discordId = req.params.discordId;

    if (!discordId)
        return res.status(400).json({message: 'Missing discordId'});
    
    try {
        await prisma.users.delete({
            where: {
                discordId: +discordId
            }
        });
        return res.status(203).json({message: 'User succesfully deleted'});
    } catch(e) {
        console.error(e);
        return res.status(500).json({message: e});
    }
}

export async function getAllUsers(req: Request, res: Response) {
    
    const currentPage: any = req.query.page || 1;
    const listPerPage: number = 5;
    const offset = (+currentPage - 1) * listPerPage;

    const allUsers = await prisma.users.findMany({
        skip: offset,
        take: listPerPage
    });

    res.json({
        data: allUsers,
        meta: {page: currentPage}
    });
}