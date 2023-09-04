import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class GetPersonalIdService {
    constructor(private readonly database: PrismaService) { }

    async getPersonalId(personalId: string) {
        const nome = await this.database.personal.findFirst({
            where: {
                id: personalId,
            },
            select: {
                User:{
                    select:{
                        name: true,
                    }
                }
            }
        });
        return nome.User.name;
    }
}