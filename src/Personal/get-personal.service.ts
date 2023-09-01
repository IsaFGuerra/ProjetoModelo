import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class GetPersonalIdService {
    constructor(private readonly database: PrismaService) { }

    async getPersonalId(personalId: string) {
        const { namePersonal } = await this.database.personal.findFirst({
            where: {
                personalId,
            },
            select: {
                namePersonal: true,
            }
        });
        return namePersonal;
    }
}