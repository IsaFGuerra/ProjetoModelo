import { Injectable } from "@nestjs/common";
import { Personal, Prisma } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";
import * as bcrypt from 'bcrypt';
import { createPersonalZodDto } from "src/dtos/create-personal.dto";
import { z } from "zod";

type createPersonalZod = z.infer<typeof createPersonalZodDto>;

@Injectable()
export class CreatePersonalService {
    constructor(private readonly prisma: PrismaService) { }

    async create(base: createPersonalZod): Promise<Personal> {
        const data: Prisma.PersonalCreateInput = {
            //como adiciono o nome e tals que ta em usuario e nao em personal?
            cpf: base.cpf,
            email: base.email,
            password: await bcrypt.hash(base.password, 10),
        };

        const createdUser = await this.prisma.client.create({
            data
        });

        return {
            //como mudo o PersonalCreateInput?
            ...createdUser, //ta certo sera?? fazer teste
            cpf: base.cpf,
            email: base.email,
            password: 'senha secreta',
        };
    }
}