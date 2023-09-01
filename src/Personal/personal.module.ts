import { Module } from '@nestjs/common';
import { CreatePersonalController } from './create-personal.controller';
import { GetPersonalService } from './get-personal-clients.service';
import { GetPersonalController } from './get-personal-clients.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PrismaService } from 'src/prisma/prisma.service';
import { GetPersonalIdService } from './get-personal.service';
import { ClientPorPersonalService } from './list-resonal-clients.service';
import { ClientPorPersonalController } from './list-personal-clients.controller';
import { AddClientService } from './add-clients.service';
import { AddClientController } from './add-clients.controller';
import { ChartService } from 'src/chart/charts.service';
import { CompararPersonalsService } from './compare-personals.service';
import { CompararPersonalsController } from './compare-personals.controller';

@Module({
    imports: [PrismaModule],
    controllers: [CreatePersonalController, GetPersonalController, ClientPorPersonalController, AddClientController, CompararPersonalsController],
    providers: [GetPersonalService, PrismaService, GetPersonalIdService, ClientPorPersonalService, AddClientService, ChartService, CompararPersonalsService],
})
export class PersonalModule { }
