import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma.service";

@Injectable()
export class FindClientByIdService {
    constructor(private readonly database: PrismaService) {}

    async findClientById(id: string) {
        const client = await this.database.client.findFirst({
            where: {
                id,
            },
            select: {
                name: true,
                sport: true,
            },
        });
        return client;
    }
}