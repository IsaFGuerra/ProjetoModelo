import { ApiProperty } from '@nestjs/swagger';
import { z } from "zod";

const FormData = z.object({
    id : z.string({
        //caso dê erro nessa variável ele entra nessa área e exibe a mensagem de erro
        invalid_type_error: 'tipo de entrada inválido',
        required_error: 'id é requirido'
    }).optional(),
    name : z.string({
        invalid_type_error: 'tipo de entrada inválido',
        required_error: 'nome é requirido'
    })
})
export class ClientDTO {
    @ApiProperty({
        description: 'Id do cliente',
        type: String,
        required: false,
    })
    clientId: string;
    @ApiProperty({
        description: 'Nome do cliente',
        type: String,
        required: true,
    })
    name: string;
}