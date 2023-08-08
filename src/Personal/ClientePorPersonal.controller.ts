import { Controller, Get, Injectable, Param, Query } from "@nestjs/common";
import { ClientPorPersonalService } from "./ClientePorPersonal.service";

@Injectable()
@Controller('GetClient')
export class ClientPorPersonalController {
    constructor(private service: ClientPorPersonalService) { }

    @Get(':id')
    async ClientPorPersonal(@Param('id') id: string) {
        const clients = this.service.ClientPorPersonal(id)
        return clients;
    }
}