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

  async getAllCardsFromUser() {
    // TODO GET USERNAME
    let slug ='babadinho49'

    const AllCardsFromUser = gql`
      query AllCardsFromUser($slug: String!, $cursor: String) {
        user(slug: $slug) {
          paginatedCards(after: $cursor) {
            nodes {
              slug
              userOwnersWithRate {
                from
                price
              }
            }
            pageInfo {
              endCursor
            }
          }
        }
      }
    `;

    const graphQLClient = new GraphQLClient('https://api.sorare.com/graphql', {
      headers: {
        // 'Authorization': `Bearer <YourJWTorOAuthToken>`,
        // 'APIKEY': '<YourOptionalAPIKey>'
      },
    });

    let cursor = null;
    do {
      console.log('Page starting from cursor', cursor);
      const data = await graphQLClient.request(AllCardsFromUser, {
        slug,
        cursor,
      });
      const paginatedCards = data['user']['paginatedCards'];
      paginatedCards['nodes'].forEach((card) => {
        console.log(card);
      });
      cursor = paginatedCards['pageInfo']['endCursor'];
    } while (cursor != null);
  }
}

