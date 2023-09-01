import { Controller, Delete, Injectable, Param } from "@nestjs/common";
import { DeleteClientByIdService } from "./delete-client.service";

@Injectable()
@Controller('/DeleteClient')
export class DeleteClientController {
    constructor(private readonly service: DeleteClientByIdService) { }

    @Delete(':id')
    async deleteClient(@Param('id') id: string) {
        const deleteClient = await this.service.deleteClientById(id);
    }
}