import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma.service";

@Injectable()
export class FindClientByIdService {
    constructor(private readonly database: PrismaService) {}

    async findClientById(name: string) {
        const client = await this.database.client.findMany({
            where: {
                name,
            },
            select: {
                id: true,
            },
        });
        return client;
    }
}