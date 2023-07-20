import { Body, Controller, Injectable, Post } from "@nestjs/common";
import { PersonalDTO } from "src/dtos/Personal.dto";
import { PrismaService } from "src/prisma.service";

@Controller('/batata')
@Injectable()
export class CreatePersonalController{
    constructor(private readonly prisma : PrismaService){}

    @Post()
    async createPersonal(@Body() body: PersonalDTO){
        try{
            const personal = await this.prisma.personal.create({
            data:{
                namePersonal: body.namePersonal,
                cpf: body.cpf, 
                client: {
                    connect: {
                        clientId: body.id
                    }
                    },
                },
            })

        return {
            personal,
        }
     } catch(error){
        throw new Error(error);
    }
    }
}