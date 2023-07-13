//classe que recebe as requisições do insomnia
//pra ser controller precisa ter o @Controller
//aqui ficam os @get, @posts, @delete, ....
import { Body, Controller, Get, Injectable, Post } from '@nestjs/common';
import { createClientDTO } from 'src/dtos/createClient.dto';
import { PrismaService } from 'src/prisma.service';


@Controller('/cliente')
//async significa que precisa esperar o resultado daquela função pra continuar o código
@Injectable()
export class ClientController {
    constructor(private readonly prisma : PrismaService) {}

    @Post()
    async createClient(@Body() body: createClientDTO){ //isso é pra receber as informações por parâmetro
        const client = await this.prisma.client.create({
            data: {                name: body.name,
                sport: body.sport,
            },
        });

        return {
            client,
        };
    }
}