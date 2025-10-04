// decorators/HelperErrores.decorator.ts
import { HttpException, InternalServerErrorException } from '@nestjs/common';
/**
 * 
 * @summary Template simple para ayudar con la gestion de errores de manera simple 
 * Referencia: https://www.typescriptlang.org/docs/handbook/decorators.html
 *  
 */
export function HelperErrores() {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const originalMethod = descriptor.value;

    descriptor.value = async function (...args: any[]) {
      try {
        return await originalMethod.apply(this, args);
      } catch (error) {
        console.warn(` [!] Error en ${propertyKey} [!] \n`, error);
        if (error instanceof HttpException) {
          throw error;
        } else {
          throw new InternalServerErrorException('Error interno del servidor');
        }
      }
    };

    return descriptor;
  };
}
