import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { ClientPorPersonalService } from "./list-resonal-clients.service";
import { ChartService } from "src/chart/charts.service";
import { GetPersonalIdService } from "./get-personal.service";

@Injectable()
export class CompararPersonalsService {
    constructor(private readonly prisma: PrismaService,
        private readonly numeroClientes: ClientPorPersonalService,
        private readonly service2: ChartService,
        private readonly nome: GetPersonalIdService) { }

    async compararPersonals(personalId: string, personalId2: string) {
        const nome1 = await this.nome.getPersonalId(personalId)
        const nome2 = await this.nome.getPersonalId(personalId2)

        const dado1 = await this.numeroClientes.ClientPorPersonal(personalId)
        const dado2 = await this.numeroClientes.ClientPorPersonal(personalId2)

        const tabela = await this.service2.generate(dado1, nome1, dado2, nome2)

    }
}