import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma.module';
import { CreatePersonalController } from './createPersonal.controller';
import { AppModule } from 'src/app.module';
import { GetPersonalService } from './personal.service';
import { GetPersonalController } from './GetPersonal.controller';

@Module({
    imports: [PrismaModule],
    controllers: [CreatePersonalController, GetPersonalController],
    providers: [GetPersonalService],
})
export class PersonalModule { }
