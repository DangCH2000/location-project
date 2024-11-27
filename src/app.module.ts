import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LocationModule } from './location/location.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost', // Địa chỉ PostgreSQL
      port: 5432, // Port mặc định
      username: 'postgres', // Tài khoản PostgreSQL
      password: 'admin', // Mật khẩu
      database: 'location_db', // Tên database
      autoLoadEntities: true, // Tự động load Entity
      synchronize: true, // Tự động tạo bảng
    }),
    LocationModule,
  ],
})
export class AppModule {}
