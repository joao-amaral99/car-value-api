import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './users/user.module';
import { ReportsModule } from './reports/reports.module';
import { User } from './users/user.entity';
import { Reports } from './reports/reports.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      entities: [User, Reports],
      synchronize: true,
    }),
    UserModule, 
    ReportsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
