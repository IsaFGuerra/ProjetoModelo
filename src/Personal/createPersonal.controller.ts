import { Body, Controller, Injectable, Post } from "@nestjs/common";
import { PersonalDTO } from "src/dtos/CreatePersonal.dto";
import { PrismaService } from "src/prisma.service";

@Controller('/batata')
@Injectable()
export class CreatePersonalController{
    constructor(private readonly prisma : PrismaService){}

    @Post()
    async createPersonal(@Body() body: PersonalDTO){
        const personal = await this.prisma.personal.create({
            data:{
                namePersonal: body.namePersonal,
                sport: body.sport,
                cpf: body.cpf, 
                client: {
                    connect: {
                        id: body.clientId
                    }
                }
            },
        })

        return {
            personal,
        }
    }
}