import { Body, Controller, Injectable, Param, Patch } from "@nestjs/common";
import { AddClientService } from "./add-clients.service";

@Injectable()
@Controller('AddClient')
export class AddClientController {
    constructor(private service: AddClientService) { }

    @Patch()
    async AddClient(@Body() body: { personalId: string, clientId: string }) {
        const addClients = this.service.addClient(body.personalId, body.clientId);
        return addClients;
    }
}