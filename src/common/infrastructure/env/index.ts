import { AppError } from '@/common/domain/errors/app-error';
import 'dotenv/config';
import { Db } from 'typeorm';
import { z } from 'zod';

const envSchema = z.object({
    NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
    PORT: z.coerce.number().default(3333),
    API_URL: z.string().default('http://localhost:3333'),
    DB_TYPE: z.literal('postgres').default('postgres'),
    DB_HOST: z.string().default('localhost'),
    DB_PORT: z.coerce.number().default(5432),
    DB_SCHEMA: z.string().default('public'),
    DB_NAME: z.string().default('postgres'),
    DB_USER: z.string().default('postgres'),
    DB_PASSWORD: z.string().default('postgres'),
})

const _env = envSchema.safeParse(process.env)

if (_env.success == false) {
    throw new AppError('Invalid Enviroment Variables');
}

export const env = _env.data 