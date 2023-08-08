import { Module } from '@nestjs/common';
import { CreatePersonalController } from './createPersonal.controller';
import { GetPersonalService } from './personal.service';
import { GetPersonalController } from './GetPersonal.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PrismaService } from 'src/prisma/prisma.service';
import { GetPersonalIdService } from './getPersonalId.service';
import { ClientPorPersonalService } from './ClientePorPersonal.service';
import { ClientPorPersonalController } from './ClientePorPersonal.controller';
import { AddClientService } from './AddClients.service';
import { AddClientController } from './addClients.controller';
import { ChartService } from 'src/chart/charts.service';
import { CompararPersonalsService } from './Comparar.service';
import { CompararPersonalsController } from './Comparar.controller';

@Module({
    imports: [PrismaModule],
    controllers: [CreatePersonalController, GetPersonalController, ClientPorPersonalController, AddClientController, CompararPersonalsController],
    providers: [GetPersonalService, PrismaService, GetPersonalIdService, ClientPorPersonalService, AddClientService, ChartService, CompararPersonalsService],
})
export class PersonalModule { }
