import { Body, Controller, Injectable, Post } from "@nestjs/common";
import { PersonalDto, createPersonalZodDto } from "src/dtos/create-personal.dto";
import { PrismaService } from "src/prisma/prisma.service";
import { CreatePersonalService } from "./create-personal.service";

@Controller('/batata')
@Injectable()
export class CreatePersonalController {
    constructor(private readonly service: CreatePersonalService) { }

    @Post()
    async createPersonal(@Body() body: PersonalDto) {
        try {
            const zod = createPersonalZodDto.parse(body);
            return this.service.create(zod);
        } catch (error) {
            return error;
        }
    }
}