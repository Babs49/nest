import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SorareService } from './sorare.service';
import {AuthModule} from './auth/auth.module'
import { UsersModule } from './users/users.module';
@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ['./**/*.graphql']
    }),
    AuthModule,
    UsersModule
  ],
  controllers: [AppController],
  providers: [AppService, SorareService],
})
export class AppModule { }
