import { Controller, Delete, Injectable, Param } from "@nestjs/common";
import { PrismaService } from "src/prisma.service";
import { FindClientByIdService } from "./client.service";

@Injectable()
@Controller('/DeleteClient')
export class DeleteClientController{
    constructor(private readonly service: FindClientByIdService){}

    @Delete(':id')
    async deleteClient(@Param('id') id: string){
        const deleteClient = await this.service.DeleteClientById(id)
    }
}