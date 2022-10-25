import { Injectable } from '@nestjs/common';
import { gql, GraphQLClient } from 'graphql-request';
import { User } from 'src/auth/user';

@Injectable()
export class FootballService {
  endpoint = 'https://api.sorare.com/graphql';

  public graphQLClient = new GraphQLClient(this.endpoint, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  constructor() {}

  async getAllCardsFromUser(user: User) {
    // TODO GET USERNAME
    /* let slug : string = user.slug; */
    let slug : string = 'babadinho49';
    let token : string = '`Bearer' + user.jwtToken + '`';


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
        Authorization: token,
      },
    });

    let cursor = null;

    const variables = {
      slug: slug,
    };

    console.log("variables avant requete " ,  variables);
    
    do {
      console.log('Page starting from cursor', cursor);

      const data = await graphQLClient.request(AllCardsFromUser, variables);
      
      const paginatedCards = data['user']['paginatedCards'];
      console.log('paginated cards ' , paginatedCards);
      
      paginatedCards['nodes'].forEach((card) => {
        console.log('Carte on pagination' , card);
      });
      cursor = paginatedCards['pageInfo']['endCursor'];
    } while (cursor != null);
  }
}
