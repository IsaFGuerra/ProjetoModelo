import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class AddClientService {
    constructor(private readonly database: PrismaService) { }

    async addClient(personalId: string, clientId: string) {
        const clients = await this.database.personal.update({
        where: {
            id: personalId,
        },
        data: {
            client: {
                connect: {
                    id: clientId,
                }
            }
        }
    });
}
}