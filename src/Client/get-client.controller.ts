import { Controller, Get, Injectable, Query } from "@nestjs/common";
import { GetClientByIdService } from "./get-client.service";

@Injectable()
@Controller('GetClient')
export class GetClientController {
    constructor(private readonly service: GetClientByIdService) { }

    @Get()
    async getClient(@Query('name') name: string) {
        const client = await this.service.getClientById(name)
        return client;
    }
}