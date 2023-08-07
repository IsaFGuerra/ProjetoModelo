import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class GetPersonalService {
    constructor(private readonly database: PrismaService) { }

    async getClientFromPersonal(namePersonal : string) {
        const personal = await this.database.personal.findMany({ 
            where: {
                namePersonal: {
                    equals: namePersonal
                },
            },
            // select: {
            //     client:{
            //         name: true,
            //     }
            // }
            include: {
                client: {
                    select: {
                        name: true
                    }
                }
            }
        });
        console.log(personal)
        return personal
    }
}