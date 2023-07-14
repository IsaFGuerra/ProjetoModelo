//modulo principal
import { Module } from '@nestjs/common';
import { ClientModule } from './Client/client.module';
import { PrismaModule } from './prisma.module';
import { PersonalModule } from './personal/personal.module';

@Module({
  imports: [ClientModule, PrismaModule, PersonalModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
