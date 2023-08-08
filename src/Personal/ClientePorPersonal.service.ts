import { Injectable } from "@nestjs/common";
import { ChartService } from "src/chart/charts.service";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class ClientPorPersonalService {
    constructor(private readonly database: PrismaService, private readonly service:ChartService) { }

    async ClientPorPersonal(personalId: string) {
        console.log("oi")
        const clients = await this.database.client.count({
            where: {
                personalPersonalId : personalId
            },
        })
        return clients
    }
}