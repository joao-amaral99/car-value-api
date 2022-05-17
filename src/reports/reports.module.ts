import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReportsController } from './reports.controller';
import { ReportsService } from './reports.service';
import { ReportsRepository } from './reports.repository';
import { Reports } from './reports.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Reports])],
  controllers: [ReportsController],
  providers: [ReportsService, ReportsRepository],
})

export class ReportsModule {}