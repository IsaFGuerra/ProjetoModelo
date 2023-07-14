import { Controller, Get, Injectable, Query } from "@nestjs/common";
import { FindClientByIdService } from "./client.service";

@Injectable()
@Controller('GetClient')
export class GetClientController {
    constructor(private readonly service: FindClientByIdService) { }

    @Get()
    async getClient(@Query('name') name: string) {
        const client = await this.service.findClientById(name)
        return client;
    }
}