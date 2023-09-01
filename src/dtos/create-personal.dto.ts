import { ApiProperty } from "@nestjs/swagger";
import { createZodDto } from "nestjs-zod";
import { z } from "zod";

export const createPersonalZodDto = z.object({
    cpf: z.string({
        invalid_type_error: 'CPF inválido',
        required_error: 'CPF é requirido',
    }),
    email: z.string({
        invalid_type_error: 'tipo de entrada inválido',
        required_error: 'email é requirido'
    }),
    password: z.string({
        invalid_type_error: 'tipo de entrada inválido',
        required_error: 'senha é requirida'
    }).min(4).max(20),
})

export class PersonalDto extends createZodDto(createPersonalZodDto){
    @ApiProperty({
        description: "CPF do personal sendo cadastrado",
        type: String,
        required: true,
    })
    cpf: string;

    @ApiProperty({
        description: 'email do instrutor',
        type: String,
        required: true,
    })
    email: string;

    @ApiProperty({
        description: 'senha do instrutor',
        type: String,
        required: true,
    })
    password: string;
}