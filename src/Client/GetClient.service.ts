import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class GetClientByIdService {
    constructor(private readonly database: PrismaService) {}

    async getClientById(clientId: string) {
        const client = await this.database.client.findUnique({
            where: {
                clientId,
            },
            select: {
                clientId: true,
                name: true,
                email: true,
                password: true,
            },
        });
        return client.clientId;
    }
    async getByEmail(email: string) {
        return this.database.client.findUnique({ 
            where: { 
                email 
            } 
        });
      }
}