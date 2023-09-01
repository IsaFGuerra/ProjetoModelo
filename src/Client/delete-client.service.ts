import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class DeleteClientByIdService {
    constructor(private readonly database: PrismaService) {}

    async deleteClientById(clientId: string){
        const deleteClient = await this.database.client.delete({
            where: {
                id: clientId,
            }
        });
        return {
            deleteClient,
            message: 'excluido com sucesso',
        }
    }
}