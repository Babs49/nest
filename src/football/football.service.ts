import { Injectable } from '@nestjs/common';
import { gql, GraphQLClient } from 'graphql-request';
import { User } from 'src/auth/user';
import { Card } from 'src/graphql';

@Injectable()
export class FootballService {
  endpoint = 'https://api.sorare.com/graphql';

  static API_KEY =
    '5a1fdb8121e26fbe9177654a0f4ae9a44b0291ed6a08695c611c1ffa1aa670c897385b42c1ce0a9a3db91c29336ee4513c349d9dee3f5403d554979fdfbsr128';

  constructor() {}

  async getAllCardsFromUser(user: User) {
    // TODO GET USERNAME
    /* let slug : string = user.slug; */
    let slug: string = 'babadinho49';
    let token: string = '`Bearer' + user.jwtToken + '`';

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
        APIKEY: FootballService.API_KEY,
      },
    });

    let cursor = null;

    const variables = {
      slug: slug,
      cursor: cursor,
    };

    console.log('variables avant requete ', variables);

    const data = await graphQLClient.request(AllCardsFromUser, variables);
    const paginatedCards = data['user']['paginatedCards'];

    let cards: any = [];
    let slugs : string[] = [];
    paginatedCards['nodes'].forEach((card) => {
      slugs.push(card.slug);
      cards.push(card);
    });
    return await this.getCards(slugs, token);

    // GET CARD ONE BY ONE
    /* const loadedCards = [];
    for (let index = 0; index < cards.length; index++) {
      const card = cards[index];
      const cardLoaded = await this.getCard(card.slug, token);
      loadedCards.push(cardLoaded);
    }
    return loadedCards; */

    /* do {
      console.log('Page starting from cursor', cursor);
      const data = await graphQLClient.request(AllCardsFromUser, variables);
      const paginatedCards = data['user']['paginatedCards'];
      console.log('paginated cards ' , paginatedCards);
      
      paginatedCards['nodes'].forEach((card) => {
        console.log('Carte on pagination' , card);
      });
      cursor = paginatedCards['pageInfo']['endCursor'];
    } while (cursor != null); */
  }

  async getCard(slug: any, token: any) {
    const getCard = gql`
      query card($slug: String!) {
        card(slug: $slug) {
          assetId
          slug
          rarity
          serialNumber
          name
          pictureUrl
          position
          xp
          xpNeededForNextGrade
          player {
            displayName
            activeClub {
              name
              pictureUrl
            }
          }
        }
      }
    `;

    const variables = {
      slug: slug,
    };

    const graphQLClient = new GraphQLClient('https://api.sorare.com/graphql', {
      headers: {
        Authorization: token,
        APIKEY: FootballService.API_KEY,
      },
    });
    const data: Card = await graphQLClient.request(getCard, variables);
    return data;
  }

  async getCards(slugs: string[], token: any) {
    const getCards = gql`
      query cards($slugs: [String!]) {
        cards(slugs: $slugs) {
          assetId
          slug
          rarity
          serialNumber
          name
          pictureUrl
          position
          xp
          xpNeededForNextGrade
          player {
            displayName
            activeClub {
              name
              pictureUrl
            }
          }
        }
      }
    `;

    const variables = {
      slugs: slugs,
    };

    const graphQLClient = new GraphQLClient('https://api.sorare.com/graphql', {
      headers: {
        Authorization: token,
        APIKEY: FootballService.API_KEY,
      },
    });
    const data: Card = await graphQLClient.request(getCards, variables);
    return data;
  }


}
