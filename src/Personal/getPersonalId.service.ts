import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class GetPersonalIdService {
    constructor(private readonly database: PrismaService) { }

    async getPersonalId(personalId: string) {
        const personal = await this.database.personal.findMany({
            where: {
                personalId,
            },
        })
    }
}