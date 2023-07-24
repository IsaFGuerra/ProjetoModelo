import { ApiProperty } from '@nestjs/swagger';
import { z } from "zod";

const FormData = z.object({
    id: z.string({
        //caso dê erro nessa variável ele entra nessa área e exibe a mensagem de erro
        invalid_type_error: 'tipo de entrada inválido',
        required_error: 'id é requirido'
    }).optional(),
    name: z.string({
        invalid_type_error: 'tipo de entrada inválido',
        required_error: 'nome é requirido'
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
export class ClientDTO {
    @ApiProperty({
        description: 'Nome do Atleta',
        type: String,
        required: true,
    })
    name: string;

    @ApiProperty({
        description: 'Nome do Atleta',
        type: String,
        required: true,
    })
    password: string;

    // @ApiProperty({
    //     description: 'Id do cliente',
    //     type: String,
    //     required: false,
    // })
    // clientId: string;

    // @ApiProperty({
    //     description: 'Nome do cliente',
    //     type: String,
    //     required: true,
    // })
    // name: string;

    // @ApiProperty({
    //     description: 'email do cliente',
    //     type: String,
    //     required: true,
    // })
    // email: string;

    // @ApiProperty({
    //     description: 'senha do cliente',
    //     type: String,
    //     required: true,
    // })
    // password: string;
}