import { LoggerService as LoggerServiceInterface } from '@nestjs/common';
import Logger from 'pino';

const logger = Logger({
  name: 'Test',
  level: 'debug',
  prettyPrint: {
    colorize: true,
    levelFirst: true,
    translateTime: 'SYS:HH:MM:ss.l',
  },
  redact: {
    paths: ['pid', 'hostname'],
    remove: true,
  },
});

class LoggerService implements LoggerServiceInterface {
  log(msg: string, ...args: any[]): void;
  log(obj: object, msg?: string, ...args: any[]): void;
  log(message: any, context?: string, ...args: any[]): void {
    logger.info(message, context, ...args);
  }

  error(msg: string, ...args: any[]): void;
  error(obj: object, msg?: string, ...args: any[]): void;
  error(message: any, trace?: string, context?: string, ...args: any[]): void {
    logger.error(
      {
        err: {
          message,
          stack: trace,
          context,
        },
      },
      ...args,
    );
  }

  warn(msg: string, ...args: any[]): void;
  warn(obj: object, msg?: string, ...args: any[]): void;
  warn(message: any, context?: string, ...args: any[]): void {
    logger.warn(message, context, ...args);
  }

  debug(msg: string, ...args: any[]): void;
  debug(obj: object, msg?: string, ...args: any[]): void;
  debug(message: any, context?: string, ...args: any[]): void {
    logger.debug(message, context, ...args);
  }

  verbose(msg: string, ...args: any[]): void;
  verbose(obj: object, msg?: string, ...args: any[]): void;
  verbose(message: any, context?: string, ...args: any[]): void {
    logger.verbose(message, context, ...args);
  }

  fatal(msg: string, ...args: any[]): void;
  fatal(obj: object, msg?: string, ...args: any[]): void;
  fatal(message: any, ...args: any[]): void {
    logger.fatal(message, ...args);
  }

  info(msg: string, ...args: any[]): void;
  info(obj: object, msg?: string, ...args: any[]): void;
  info(message: any, ...args: any[]): void {
    logger.info(message, ...args);
  }

  trace(msg: string, ...args: any[]): void;
  trace(obj: object, msg?: string, ...args: any[]): void;
  trace(message: any, ...args: any[]): void {
    logger.trace(message, ...args);
  }
}

export default new LoggerService();
