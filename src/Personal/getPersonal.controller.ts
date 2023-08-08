import { Controller, Get, Injectable, Post, Query } from "@nestjs/common";
import { GetPersonalService } from "./personal.service";
import { GetPersonalIdService } from "./getPersonalId.service";
import { ClientPorPersonalService } from "./ClientePorPersonal.service";

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