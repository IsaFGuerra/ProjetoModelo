import { ApiProperty } from '@nestjs/swagger';
import { createZodDto } from 'nestjs-zod';
import { z } from "zod";

export const createClientZodDTO = z.object({
    email: z.string({
        invalid_type_error: 'tipo de entrada inválido',
        required_error: 'email é requirido'
    }),
    password: z.string({
        invalid_type_error: 'tipo de entrada inválido',
        required_error: 'senha é requirida'
    }).min(4).max(20),
})

export class createClientDTO extends createZodDto(createClientZodDTO) {
    @ApiProperty({
        description: 'email do cliente',
        type: String,
        required: true,
    })
    email: string;

    @ApiProperty({
        description: 'senha do cliente',
        type: String,
        required: true,
    })
    password: string;
}