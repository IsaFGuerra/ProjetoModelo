import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma.service";

@Injectable()
export class FindClientByIdService {
    constructor(private readonly database: PrismaService) {}

    async findClientById(name: string) {
        const client = await this.database.client.findUnique({
            where: {
                name,
            },
            select: {
                clientId: true,
            },
        });
        return client.clientId;
    }

    async DeleteClientById(clientId: string){
        const deleteClient = await this.database.client.delete({
            where: {
                clientId,
            }
        });
        return {
            message: 'excluido com sucesso',
        }
    }
}
