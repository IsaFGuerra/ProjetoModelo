import { Body, Controller, Get, Query } from "@nestjs/common";
import { FindClientByIdService } from "./client.service";

@Controller('GetClient')
export class GetClientController{
    constructor(private readonly service: FindClientByIdService){}
    
    @Get()
    async getClient(@Query('id')  id: string){
        const client = await this.service.findClientById(id)
        return client;
    }
}