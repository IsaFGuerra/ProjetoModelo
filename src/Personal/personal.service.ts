import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma.service";

@Injectable()
export class GetPersonalService {
    constructor(private readonly database: PrismaService) { }

    async getClientFromPersonal( id : string) {
        const client = await this.database.personal.findMany({ //arrumar o findFirst
            where: {
                id,
            },
            select: {
                name: true,
            }
        })
    }
}