import { INestApplication, Injectable, OnModuleInit } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";


@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {


    async onModuleInit() {
        await this.$connect();
    }

    async enableShutdownHooks(app: INestApplication) {
        process.on('beforeExit', async () => {
            await app.close();
        })
    }
}

// import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
// import { PrismaClient, PrismaClientOptions, QueryEvent, LogEvent } from '@prisma/client';


// @Injectable()
// export class PrismaService extends PrismaClient<PrismaClientOptions> implements OnModuleInit {
//   async onModuleInit() {
//     await this.$connect();
//   }

//   $on(event: QueryEvent | LogEvent, callback: (event: QueryEvent | LogEvent) => void): void {
//     // Implementação do método, se necessário.
//   }

//   async enableShutdownHooks(app: INestApplication) {
//     this.$on('beforeExit', async () => {
//       await app.close();
//     });
//   }
// }