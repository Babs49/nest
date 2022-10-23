import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { SignInInput, SignInPayload } from './graphql';
import { SorareService } from './sorare.service';

@Resolver('signInPayload')
export class SignInResolver {
  constructor(private sorareService: SorareService) {}
  /* 
  @Mutation('signIn')
  async signIn(@Args('input') input: SignInInput) {
    return this.sorareService.signIn();
  } */
}
