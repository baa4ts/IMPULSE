import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
    /**
     * @summary Conexion a la base de datos
     * referencia: https://docs.nestjs.com/recipes/prisma
     *
     * Ciclo de vida del modulo
     * Nota: Cuando se crea un modulo, tiene control de ciclo de vida (onModuleInit, onModuleDestroy)
     * referencia: https://docs.nestjs.com/fundamentals/lifecycle-events#lifecycle-events
     */

    async onModuleInit() {
        console.log('Conectando a la DB...');
        await this.$connect();
    }

    async onModuleDestroy() {
        console.log('Desconectando de la DB...');
        await this.$disconnect();
    }
}
