import { Controller, Get, Injectable, Query } from "@nestjs/common";
import { GetPersonalService } from "./personal.service";

@Injectable()
@Controller('GetPersonal')
export class GetPersonalController{
    constructor(private service: GetPersonalService){ }

    @Get()
    async getPersonalController(@Query('id') name: string){
        const client = this.service.getClientFromPersonal(name)
        return client;
    }
}