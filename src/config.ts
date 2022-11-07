export const Config = () => ({
  port: Number(process.env.PORT) || 3000,
  database: {
    type: 'postgres',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_port) || 5432,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: true,
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
  },
});
