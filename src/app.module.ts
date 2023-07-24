//modulo principal
import { Module } from '@nestjs/common';
import { ClientModule } from './Client/client.module';
import { PersonalModule } from './personal/personal.module';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [ClientModule, PrismaModule, PersonalModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule { }
