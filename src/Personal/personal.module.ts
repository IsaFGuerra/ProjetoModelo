import { Module } from '@nestjs/common';
import { CreatePersonalController } from './createPersonal.controller';
import { AppModule } from 'src/app.module';
import { GetPersonalService } from './personal.service';
import { GetPersonalController } from './GetPersonal.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PrismaService } from 'src/prisma/prisma.service';
import { GetPersonalIdService } from './getPersonalId.service';

@Module({
    imports: [PrismaModule],
    controllers: [CreatePersonalController, GetPersonalController],
    providers: [GetPersonalService, PrismaService, GetPersonalIdService],
})
export class PersonalModule { }
