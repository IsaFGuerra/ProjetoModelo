import { ApiProperty } from "@nestjs/swagger";
import { z } from "zod";

const FormData2 = z.object({
    clientId: z.string({
        invalid_type_error: 'id inválido',
        required_error: 'id é requirido',
    }),
    namePersonal: z.string({
        invalid_type_error: 'nome inválido',
        required_error: 'nome é requirido',
    }).refine((i) => i.length >= 4),
    cpf: z.string({
        invalid_type_error: 'CPF inválido',
        required_error: 'CPF é requirido',
    })
})

export class PersonalDTO{
    @ApiProperty({
        description: "Id do cliente",
        type: String,
        required: true,
    })
    id: string;
    @ApiProperty({
        description: "Nome do personal sendo cadastrado",
        type: String,
        required: true,
    })
    namePersonal: string;
    @ApiProperty({
        description: "CPF do personal sendo cadastrado",
        type: String,
        required: true,
    })
    cpf: string;
}