import { ApiProperty } from "@nestjs/swagger";

export class contentServiceDTO {

    @ApiProperty({
        description: 'Nome do cliente',
        type: String,
        required: true,
    })
    name: string;

    @ApiProperty({
        description: 'Id do cliente',
        type: String,
        required: true,
    })
    id: string;

    @ApiProperty({
        description: 'cpf do cliente',
        type: String,
        required: true,
    })
    cpf: string;
}