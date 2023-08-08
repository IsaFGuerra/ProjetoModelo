import { Body, Controller, Get, Injectable } from "@nestjs/common";
import { CompararPersonalsService } from "./Comparar.service";

@Injectable()
@Controller('/CompareClient')
export class CompararPersonalsController {
    constructor(private service: CompararPersonalsService) { }

    @Get()
    async ClientPorPersonal(@Body() body: {idPersonal: string, idPersonal2: string}) {
        const clients = this.service.compararPersonals(body.idPersonal, body.idPersonal2)
        return clients;
    }
}