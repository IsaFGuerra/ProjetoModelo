import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class GetClientByIdService {
    constructor(private readonly database: PrismaService) { }

    async getClientById(clientId: string) {
        const client = await this.database.client.findUnique({
            where: {
                id: clientId,
            },
            select: {
                id: true,
                User: {
                    select: {
                        name: true,
                    }
                },
            }
        });
        return client;
    }
    async getByEmail(email: string) {
        return this.database.client.findUnique({
            where: {
                email
            }
        });
    }
}