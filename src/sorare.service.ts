import { Injectable } from '@nestjs/common';
import { GraphQLClient, gql } from 'graphql-request';
import { FADataDto } from './fa-data-dto';
import { UserAuthDto } from './user-auth-dto';

@Injectable()
export class SorareService {
  endpoint = 'https://api.sorare.com/graphql';
  public graphQLClient = new GraphQLClient(this.endpoint, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  constructor() {}

  async signInWith2FA(faData: FADataDto) {
    console.log('Service data 2FA ', faData);
    

    const SignInMutation2FA = gql`
      mutation SignInMutation($input: signInInput!) {
        signIn(input: $input) {
          currentUser {
            slug
            jwtToken(aud: "testbaba") {
              token
              expiredAt
            }
          }
          otpSessionChallenge
          errors {
            message
          }
        }
      }
    `;

    const query =
      'mutation SignInMutation($input: signInInput!) { signIn(input: $input) { currentUser { slug jwtToken(aud: "testbaba") { token expiredAt } } errors { message } } }';

    const variables = {
      input: { otpSessionChallenge: faData.session, otpAttempt: faData.code },
    };

    console.log('variables 2fa ', variables);

    const reponse = await this.graphQLClient.request(
      SignInMutation2FA,
      variables,
    );
    console.log('Réponse 2FA', JSON.stringify(reponse));

    return reponse;
  }

  async signIn(userAuthDto: UserAuthDto) {
    const SignInMutation = gql`
      mutation SignInMutation($input: signInInput!) {
        signIn(input: $input) {
          currentUser {
            slug
            jwtToken(aud: "testbaba") {
              token
              expiredAt
            }
          }
          otpSessionChallenge
          errors {
            message
          }
        }
      }
    `;

    const query =
      'mutation SignInMutation($input: signInInput!) { signIn(input: $input) { currentUser { slug jwtToken(aud: "testbaba") { token expiredAt } } otpSessionChallenge errors { message } } }';

    const variables = {
      input: { email: userAuthDto.email, password: userAuthDto.password },
    };

    const data = await this.graphQLClient.request(SignInMutation, variables);

    return data;
  }
}
