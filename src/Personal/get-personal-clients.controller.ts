import { Controller, Get, Injectable, Post, Query } from "@nestjs/common";
import { GetPersonalService } from "./get-personal-clients.service";
import { GetPersonalIdService } from "./get-personal.service";
import { ClientPorPersonalService } from "./list-resonal-clients.service";

@Injectable()
@Controller('GetPersonal')
export class GetPersonalController {
    constructor(private service: GetPersonalService, private service2: GetPersonalIdService, private service3: ClientPorPersonalService) { }

    @Get()
    async getPersonal(@Query('id') name: string) {
        const client = this.service.getClientFromPersonal(name)
        return client;
    }

    @Get()
    async getPersonalById(@Query('id') personalId: string) {
        const client = this.service2.getPersonalId(personalId)
        return client;
    }
}