"use strict";
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */
exports.__esModule = true;
exports.OfferMigrationInput = exports.NotificationPreferenceInput = exports.NotificationCategoryInput = exports.MintCardsForUsersInput1 = exports.WithdrawalStatus = exports.WalletStatus = exports.UserSportProfileOnboardingStatus = exports.UserAccountEntryState = exports.UserAccountEntryEntry = exports.TransactionStatus = exports.Tradeable = exports.SubscribableType = exports.StatCategory = exports.Sport = exports.SortingOption = exports.So5State = exports.SkinQuality = exports.SkinPosition = exports.ShippingState = exports.RestrictionGroup = exports.ReferralState = exports.Rarity = exports.Position = exports.Period = exports.PaymentIntentState = exports.PaymentCurrency = exports.OwnerTransfer = exports.OnboardingTaskState = exports.OnboardingTaskEnum = exports.OnboardingStepEnum = exports.OfferType = exports.OfferDirection = exports.License = exports.FootballPosition = exports.FiatCurrency = exports.DeckFormation = exports.DeckCategory = exports.CustomSortingOption = exports.Currency = exports.CreditCardBrand = exports.CompetitionType = exports.CompetitionFormat = exports.CardWasUpdatedEvent = exports.CardQuality = exports.Blockchain = exports.BaseballPosition = exports.AwardCategory = exports.Award = exports.AveragePlayerScore = exports.Action = void 0;
exports.Disable2faInput = exports.DetachPaymentMethodInput = exports.DestroyReferralInput = exports.DestroyAccountInput = exports.DeleteUserSo5LineupsInput = exports.DeleteSubscriptionInput = exports.DeleteSo5LineupInput = exports.DeleteCustomDeckInput = exports.CreateWithdrawalInput = exports.CreateSubscriptionInput = exports.CreateSingleSaleOfferInput = exports.CreateSingleBuyOfferInput = exports.CreatePaymentIntentInput = exports.CreateOrUpdateSo5LineupInput = exports.CreateOrUpdateSingleBuyOfferMinPriceInput = exports.CreateFastWithdrawalInput = exports.CreateEthVaultInput = exports.CreateEthMigrationInput = exports.CreateEthBankWithdrawalIntentInput = exports.CreateDirectOfferInput = exports.CreateCustomDeckInput = exports.CreateCardWithdrawalInput = exports.ConfirmSo5LineupsInput = exports.ConfirmEmailInput = exports.CompleteOnboardingTaskInput = exports.ClaimRewardInput = exports.ClaimReferralRewardInput = exports.ClaimCardDropInput = exports.ClaimAwardInput = exports.CheckPhoneNumberVerificationCodeInput = exports.CancelWithdrawalInput = exports.CancelOfferInput = exports.CancelFastWithdrawalInput = exports.CancelEthBankWithdrawalsInput = exports.BuySkinInput = exports.BlockUserOffersInput = exports.BidInput = exports.ApproveMigratorInput = exports.AddFavouriteClubsInput = exports.AddEmailToListInput = exports.AddCardsToDeckInput = exports.AcceptTermsInput = exports.AcceptOfferInput = exports.UtmInput = exports.UserLifecycleInput = exports.UnblockEmailInput = exports.SubscribableInput = exports.StarkSignatureInput = exports.SorarePrivateKeyAttributes = exports.So5AppearanceInput = void 0;
exports.Card = exports.BundledAuctionEdge = exports.BundledAuctionConnection = exports.BundledAuction = exports.BidWithRates = exports.BidEdge = exports.BidConnection = exports.Bid = exports.AverageScorePlayersCount = exports.AverageScoreOpenBoundaries = exports.AuctionNotification = exports.AnonymousUser = exports.AnnouncementNotification = exports.AnnouncementEdge = exports.AnnouncementConnection = exports.Announcement = exports.Age = exports.ActivityActionRewardStatus = exports.ActionReward = exports.Account = exports.VerifyPhoneNumberInput = exports.UpdateUserSettingsInput = exports.UpdateUserProfileInput = exports.UpdateSubscriptionInput = exports.UnblockUserOffersInput = exports.SkipOnboardingInput = exports.SignUpInput = exports.SignInInput = exports.SetDeviceTokenInput = exports.ResumeOnboardingInput = exports.ResetPrivateKeyInput = exports.RequestReceiptInput = exports.RemoveCardFromDeckInput = exports.RelayCallInput = exports.RejectOfferInput = exports.PrepareTokenDepositInput = exports.PrepareOfferInput = exports.PrepareEthDepositInput = exports.PrepareCardWithdrawalInput = exports.PrepareBidInput = exports.PrepareAcceptOfferInput = exports.PickActionRewardPlayersInput = exports.MintCardsForUsersInput = exports.MarkNotificationsAsReadInput = exports.GenerateOtpBackupCodesInput = exports.GenerateActionRewardPickablePlayersInput = exports.Enable2faInput = exports.EditCustomDeckInput = exports.EditCardInDeckInput = exports.DisconnectOmniauthProviderInput = void 0;
exports.ExchangeRate = exports.EthereumTransaction = exports.EthereumAccount = exports.EthMigration = exports.EthDeposit = exports.EthBankWithdrawalIntent = exports.EnglishAuctionEdge = exports.EnglishAuctionConnection = exports.EnglishAuction = exports.EngineConfiguration = exports.EmailSubscriptionPreferences = exports.EmailSubscriptionEdge = exports.EmailSubscriptionConnection = exports.EmailSubscription = exports.DivisionChangeNotification = exports.DeckInFormation = exports.DeckCardEdge = exports.DeckCardConnection = exports.DeckCard = exports.DecisiveActionNotification = exports.CustomDeckEdge = exports.CustomDeckConnection = exports.CustomDeck = exports.CustomBanner = exports.CurrentUser = exports.CreditCard = exports.Country = exports.Contract = exports.Contestant = exports.Config = exports.Competition = exports.CommonAccount = exports.ClubEdge = exports.ClubConnection = exports.Club = exports.ChallengeNotification = exports.Challenge = exports.CardSubscription = exports.CardSeasonSupply = exports.CardPrint = exports.CardOffer = exports.CardNotification = exports.CardLayout = exports.CardEditionsCount = exports.CardEditionCount = exports.CardEdition = exports.CardEdge = exports.CardDrop = exports.CardCount = exports.CardConnection = void 0;
exports.Player = exports.PickablePlayer = exports.PaymentMethod = exports.PaymentIntent = exports.PaymentEdge = exports.PaymentConnection = exports.Payment = exports.PageInfo = exports.Pack = exports.OwnerWithRates = exports.Owner = exports.OrderedSo5Scores = exports.OnboardingTask = exports.Onboarding = exports.OfferNotification = exports.OfferEdge = exports.OfferConnection = exports.Offer = exports.OAuthApplication = exports.Notifications = exports.NotificationPreference = exports.NotificationEdge = exports.NotificationConnection = exports.NationalTeam = exports.IMutation = exports.MintingQuotaUnit = exports.MintingQuotaAllocationEdge = exports.MintingQuotaAllocationConnection = exports.MintingQuotaAllocation = exports.MintingQuota = exports.MembershipEdge = exports.MembershipConnection = exports.Membership = exports.LoomAccount = exports.LimitOrder = exports.LeaderboardRewardsConfig = exports.LandingTheme = exports.LandingClub = exports.JwtToken = exports.Injury = exports.HighlightedDeck = exports.GameEdge = exports.GameConnection = exports.Game = exports.FullWithdrawalRequest = exports.Fiat = exports.Fee = exports.FastWithdrawalWithRates = exports.FastWithdrawal = exports.FaceLandmark = void 0;
exports.So5Reward = exports.So5Rarity = exports.So5RankingsPaginated = exports.So5RankingEdge = exports.So5RankingConnection = exports.So5Ranking = exports.So5LineupNotification = exports.So5LineupEdge = exports.So5LineupConnection = exports.So5Lineup = exports.So5League = exports.So5LeaderboardEdge = exports.So5LeaderboardConnection = exports.So5Leaderboard = exports.So5Game = exports.So5FixtureEdge = exports.So5FixtureConnection = exports.So5Fixture = exports.So5Config = exports.So5AtLeastOfCompetitions = exports.So5AtLeastOfClubs = exports.So5Appearance = exports.SkinEdge = exports.SkinConnection = exports.Skin = exports.SingleSaleOfferEdge = exports.SingleSaleOfferConnection = exports.SingleSaleOffer = exports.SingleBuyOfferMinPrice = exports.SeasonPicture = exports.Season = exports.ScreenshottableCard = exports.SaleNotification = exports.RewardsOverview = exports.RewardCard = exports.ReferralRewardNotification = exports.ReferralReward = exports.ReferralPaginated = exports.ReferralCampaign = exports.Referral = exports.RaritiesCardLayout = exports.Range = exports.IQuery = exports.PowerBreakdown = exports.PlayerWithSupply = exports.PlayerStatus = exports.PlayerPool = exports.PlayerGameStats = exports.PlayerEdge = exports.PlayerConnection = void 0;
exports.UserOwner = exports.UserError = exports.UserEdge = exports.UserConnection = exports.UserAwardNotification = exports.UserAward = exports.UserAccountEntryEdge = exports.UserAccountEntryConnection = exports.UserAccountEntry = exports.User = exports.UnblockEmailPayload = exports.TransferRequest = exports.TransferMarketBanner = exports.TransferMarket = exports.TokenWithdrawal = exports.TokenRoot = exports.TokenOwner = exports.TokenOfferSide = exports.TokenOfferEdge = exports.TokenOfferConnection = exports.TokenOffer = exports.TokenFootballMetadata = exports.TokenDeposit = exports.TokenBidEdge = exports.TokenBidConnection = exports.TokenBid = exports.TokenBaseballMetadata = exports.TokenAuctionEdge = exports.TokenAuctionConnection = exports.TokenAuction = exports.Token = exports.TitleBodyNotificationRendering = exports.TitleBodyNotificationMobileRendering = exports.TieredPlayerPool = exports.ISubscription = exports.Stats = exports.StatScore = exports.StarkwareWithdrawal = exports.StarkwareAccount = exports.SpecialWeeklyBanner = exports.SorarePrivateKey = exports.SocialPictureDerivative = exports.So5ScoreEdge = exports.So5ScoreConnection = exports.So5Score = exports.So5Rules = exports.So5RewardEdge = exports.So5RewardConnection = exports.So5RewardConfig = exports.So5RewardCardConfig = void 0;
exports.DeleteSo5LineupPayload = exports.DeleteCustomDeckPayload = exports.CreateWithdrawalPayload = exports.CreateSubscriptionPayload = exports.CreateSingleSaleOfferPayload = exports.CreateSingleBuyOfferPayload = exports.CreatePaymentIntentPayload = exports.CreateOrUpdateSo5LineupPayload = exports.CreateOrUpdateSingleBuyOfferMinPricePayload = exports.CreateFastWithdrawalPayload = exports.CreateEthVaultPayload = exports.CreateEthMigrationPayload = exports.CreateEthBankWithdrawalIntentPayload = exports.CreateDirectOfferPayload = exports.CreateCustomDeckPayload = exports.CreateCardWithdrawalPayload = exports.ConfirmSo5LineupsPayload = exports.ConfirmEmailPayload = exports.CompleteOnboardingTaskPayload = exports.ClaimRewardPayload = exports.ClaimReferralRewardPayload = exports.ClaimCardDropPayload = exports.ClaimAwardPayload = exports.CheckPhoneNumberVerificationCodePayload = exports.CancelWithdrawalPayload = exports.CancelOfferPayload = exports.CancelFastWithdrawalPayload = exports.CancelEthBankWithdrawalsPayload = exports.BuySkinPayload = exports.BlockUserOffersPayload = exports.BidPayload = exports.ApproveMigratorPayload = exports.AddFavouriteClubsPayload = exports.AddEmailToListPayload = exports.AddCardsToDeckPayload = exports.AcceptTermsPayload = exports.AcceptOfferPayload = exports.WithdrawalWithRates = exports.Withdrawal = exports.ValueOpenBoundaries = exports.ValueBoundaries = exports.Validity = exports.UserWithSubscriptionSlugEdge = exports.UserWithSubscriptionSlugConnection = exports.UserWithSubscriptionSlug = exports.UserSportProfile = exports.UserSource = exports.UserSettings = exports.UserProfile = exports.UserOwnerWithRates = void 0;
exports.VerifyPhoneNumberPayload = exports.UpdateUserSettingsPayload = exports.UpdateUserProfilePayload = exports.UpdateSubscriptionPayload = exports.UnblockUserOffersPayload = exports.SkipOnboardingPayload = exports.SignUpPayload = exports.SignInPayload = exports.SetDeviceTokenPayload = exports.ResumeOnboardingPayload = exports.ResetPrivateKeyPayload = exports.RequestReceiptPayload = exports.RemoveCardFromDeckPayload = exports.RelayCallPayload = exports.RejectOfferPayload = exports.PrepareTokenDepositPayload = exports.PrepareOfferPayload = exports.PrepareEthDepositPayload = exports.PrepareCardWithdrawalPayload = exports.PrepareBidPayload = exports.PrepareAcceptOfferPayload = exports.PickActionRewardPlayersPayload = exports.MintCardsForUsersPayload = exports.MarkNotificationsAsReadPayload = exports.GenerateOtpBackupCodesPayload = exports.GenerateActionRewardPickablePlayersPayload = exports.Enable2faPayload = exports.EditCustomDeckPayload = exports.EditCardInDeckPayload = exports.DisconnectOmniauthProviderPayload = exports.Disable2faPayload = exports.DetachPaymentMethodPayload = exports.DestroyReferralPayload = exports.DestroyAccountPayload = exports.DeleteUserSo5LineupsPayload = exports.DeleteSubscriptionPayload = void 0;
/* tslint:disable */
/* eslint-disable */
var Action;
(function (Action) {
    Action["ACTIVITY"] = "ACTIVITY";
})(Action = exports.Action || (exports.Action = {}));
var AveragePlayerScore;
(function (AveragePlayerScore) {
    AveragePlayerScore["LAST_FIVE_SO5_AVERAGE_SCORE"] = "LAST_FIVE_SO5_AVERAGE_SCORE";
    AveragePlayerScore["LAST_FIFTEEN_SO5_AVERAGE_SCORE"] = "LAST_FIFTEEN_SO5_AVERAGE_SCORE";
})(AveragePlayerScore = exports.AveragePlayerScore || (exports.AveragePlayerScore = {}));
var Award;
(function (Award) {
    Award["YOUR_BIGGEST_FAN"] = "YOUR_BIGGEST_FAN";
    Award["OUT_THE_DOOR"] = "OUT_THE_DOOR";
    Award["NATIONAL_SERVICE"] = "NATIONAL_SERVICE";
    Award["MATCHING_NUMBERS"] = "MATCHING_NUMBERS";
    Award["MAKING_IT_RAIN"] = "MAKING_IT_RAIN";
    Award["HIGHEST_BIDDER"] = "HIGHEST_BIDDER";
    Award["FIRST_DIP"] = "FIRST_DIP";
    Award["FIRST_COME_FIRST_SERVED"] = "FIRST_COME_FIRST_SERVED";
    Award["FAVORITE_NUMBER"] = "FAVORITE_NUMBER";
    Award["CHILDHOOD_TEAM"] = "CHILDHOOD_TEAM";
})(Award = exports.Award || (exports.Award = {}));
var AwardCategory;
(function (AwardCategory) {
    AwardCategory["MANAGER"] = "MANAGER";
    AwardCategory["COLLECTOR"] = "COLLECTOR";
})(AwardCategory = exports.AwardCategory || (exports.AwardCategory = {}));
var BaseballPosition;
(function (BaseballPosition) {
    BaseballPosition["UNKNOWN"] = "UNKNOWN";
    BaseballPosition["STARTING_PITCHER"] = "STARTING_PITCHER";
    BaseballPosition["RELIEF_PITCHER"] = "RELIEF_PITCHER";
    BaseballPosition["FIRST_BASE"] = "FIRST_BASE";
    BaseballPosition["THIRD_BASE"] = "THIRD_BASE";
    BaseballPosition["DESIGNATED_HITTER"] = "DESIGNATED_HITTER";
    BaseballPosition["CATCHER"] = "CATCHER";
    BaseballPosition["SECOND_BASE"] = "SECOND_BASE";
    BaseballPosition["SHORTSTOP"] = "SHORTSTOP";
    BaseballPosition["OUTFIELD"] = "OUTFIELD";
})(BaseballPosition = exports.BaseballPosition || (exports.BaseballPosition = {}));
var Blockchain;
(function (Blockchain) {
    Blockchain["ETHEREUM"] = "ETHEREUM";
    Blockchain["LOOM"] = "LOOM";
    Blockchain["NO_BLOCKCHAIN"] = "NO_BLOCKCHAIN";
    Blockchain["STARKWARE"] = "STARKWARE";
})(Blockchain = exports.Blockchain || (exports.Blockchain = {}));
var CardQuality;
(function (CardQuality) {
    CardQuality["TIER_0"] = "TIER_0";
    CardQuality["TIER_1"] = "TIER_1";
    CardQuality["TIER_2"] = "TIER_2";
    CardQuality["TIER_3"] = "TIER_3";
    CardQuality["TIER_4"] = "TIER_4";
})(CardQuality = exports.CardQuality || (exports.CardQuality = {}));
var CardWasUpdatedEvent;
(function (CardWasUpdatedEvent) {
    CardWasUpdatedEvent["offer_event_opened"] = "offer_event_opened";
    CardWasUpdatedEvent["offer_event_cancelled"] = "offer_event_cancelled";
    CardWasUpdatedEvent["offer_event_flagged"] = "offer_event_flagged";
    CardWasUpdatedEvent["offer_event_accepted"] = "offer_event_accepted";
    CardWasUpdatedEvent["auction_event_bid"] = "auction_event_bid";
    CardWasUpdatedEvent["auction_event_successfull"] = "auction_event_successfull";
    CardWasUpdatedEvent["auction_event_closed"] = "auction_event_closed";
    CardWasUpdatedEvent["auction_event_cancelled"] = "auction_event_cancelled";
})(CardWasUpdatedEvent = exports.CardWasUpdatedEvent || (exports.CardWasUpdatedEvent = {}));
var CompetitionFormat;
(function (CompetitionFormat) {
    CompetitionFormat["DOMESTIC_LEAGUE"] = "DOMESTIC_LEAGUE";
    CompetitionFormat["INTERNATIONAL_CUP"] = "INTERNATIONAL_CUP";
    CompetitionFormat["INTERNATIONAL_SUPER_CUP"] = "INTERNATIONAL_SUPER_CUP";
    CompetitionFormat["DOMESTIC_CUP"] = "DOMESTIC_CUP";
    CompetitionFormat["DOMESTIC_SUPER_CUP"] = "DOMESTIC_SUPER_CUP";
})(CompetitionFormat = exports.CompetitionFormat || (exports.CompetitionFormat = {}));
var CompetitionType;
(function (CompetitionType) {
    CompetitionType["CLUB"] = "CLUB";
    CompetitionType["INTERNATIONAL"] = "INTERNATIONAL";
})(CompetitionType = exports.CompetitionType || (exports.CompetitionType = {}));
var CreditCardBrand;
(function (CreditCardBrand) {
    CreditCardBrand["AMERICAN_EXPRESS"] = "AMERICAN_EXPRESS";
    CreditCardBrand["CARTES_BANCAIRES"] = "CARTES_BANCAIRES";
    CreditCardBrand["DINERS_CLUB"] = "DINERS_CLUB";
    CreditCardBrand["DISCOVER"] = "DISCOVER";
    CreditCardBrand["JCB"] = "JCB";
    CreditCardBrand["MASTERCARD"] = "MASTERCARD";
    CreditCardBrand["UNION_PAY"] = "UNION_PAY";
    CreditCardBrand["VISA"] = "VISA";
    CreditCardBrand["UNKNOWN"] = "UNKNOWN";
})(CreditCardBrand = exports.CreditCardBrand || (exports.CreditCardBrand = {}));
var Currency;
(function (Currency) {
    Currency["ETH"] = "ETH";
    Currency["FIAT"] = "FIAT";
})(Currency = exports.Currency || (exports.Currency = {}));
var CustomSortingOption;
(function (CustomSortingOption) {
    CustomSortingOption["DEFAULT"] = "DEFAULT";
    CustomSortingOption["CUSTOM"] = "CUSTOM";
})(CustomSortingOption = exports.CustomSortingOption || (exports.CustomSortingOption = {}));
var DeckCategory;
(function (DeckCategory) {
    DeckCategory["ALL_TIME_BEST"] = "ALL_TIME_BEST";
    DeckCategory["USER_FAVORITE"] = "USER_FAVORITE";
})(DeckCategory = exports.DeckCategory || (exports.DeckCategory = {}));
var DeckFormation;
(function (DeckFormation) {
    DeckFormation["FREE"] = "FREE";
    DeckFormation["TWO_ONE_ONE"] = "TWO_ONE_ONE";
    DeckFormation["ONE_TWO_ONE"] = "ONE_TWO_ONE";
    DeckFormation["ONE_ONE_TWO"] = "ONE_ONE_TWO";
})(DeckFormation = exports.DeckFormation || (exports.DeckFormation = {}));
var FiatCurrency;
(function (FiatCurrency) {
    FiatCurrency["EUR"] = "EUR";
    FiatCurrency["USD"] = "USD";
    FiatCurrency["GBP"] = "GBP";
})(FiatCurrency = exports.FiatCurrency || (exports.FiatCurrency = {}));
var FootballPosition;
(function (FootballPosition) {
    FootballPosition["UNKNOWN"] = "UNKNOWN";
    FootballPosition["FORWARD"] = "FORWARD";
    FootballPosition["MIDFIELDER"] = "MIDFIELDER";
    FootballPosition["DEFENDER"] = "DEFENDER";
    FootballPosition["GOALKEEPER"] = "GOALKEEPER";
    FootballPosition["COACH"] = "COACH";
})(FootballPosition = exports.FootballPosition || (exports.FootballPosition = {}));
var License;
(function (License) {
    License["NOT_LICENSED"] = "NOT_LICENSED";
    License["PLAYERS_AND_CLUB"] = "PLAYERS_AND_CLUB";
    License["PLAYERS_ONLY"] = "PLAYERS_ONLY";
    License["CLUB_ONLY"] = "CLUB_ONLY";
})(License = exports.License || (exports.License = {}));
var OfferDirection;
(function (OfferDirection) {
    OfferDirection["SENT"] = "SENT";
    OfferDirection["RECEIVED"] = "RECEIVED";
})(OfferDirection = exports.OfferDirection || (exports.OfferDirection = {}));
var OfferType;
(function (OfferType) {
    OfferType["SINGLE_SALE_OFFER"] = "SINGLE_SALE_OFFER";
    OfferType["SINGLE_BUY_OFFER"] = "SINGLE_BUY_OFFER";
    OfferType["DIRECT_OFFER"] = "DIRECT_OFFER";
})(OfferType = exports.OfferType || (exports.OfferType = {}));
var OnboardingStepEnum;
(function (OnboardingStepEnum) {
    OnboardingStepEnum["CREATE_YOUR_CLUB"] = "CREATE_YOUR_CLUB";
    OnboardingStepEnum["SELECT_FAVORITE_CLUB"] = "SELECT_FAVORITE_CLUB";
    OnboardingStepEnum["WHAT_ARE_LEAGUES"] = "WHAT_ARE_LEAGUES";
    OnboardingStepEnum["WINNING_A_LEAGUE"] = "WINNING_A_LEAGUE";
    OnboardingStepEnum["EARNING_REWARDS"] = "EARNING_REWARDS";
    OnboardingStepEnum["GET_STARTED"] = "GET_STARTED";
    OnboardingStepEnum["COMPOSE_TEAM"] = "COMPOSE_TEAM";
    OnboardingStepEnum["CARD_SCARCITIES"] = "CARD_SCARCITIES";
    OnboardingStepEnum["CARD_DETAILS"] = "CARD_DETAILS";
    OnboardingStepEnum["FOLLOW_PLAYERS"] = "FOLLOW_PLAYERS";
    OnboardingStepEnum["WELCOME_TO_MARKETPLACE"] = "WELCOME_TO_MARKETPLACE";
    OnboardingStepEnum["MARKETPLACE_WALKTHROUGH"] = "MARKETPLACE_WALKTHROUGH";
    OnboardingStepEnum["CONGRATULATION"] = "CONGRATULATION";
})(OnboardingStepEnum = exports.OnboardingStepEnum || (exports.OnboardingStepEnum = {}));
var OnboardingTaskEnum;
(function (OnboardingTaskEnum) {
    OnboardingTaskEnum["ADD_FAVOURITE_CLUBS"] = "ADD_FAVOURITE_CLUBS";
    OnboardingTaskEnum["JOIN_ROOKIE"] = "JOIN_ROOKIE";
    OnboardingTaskEnum["COMPOSE_TEAM"] = "COMPOSE_TEAM";
    OnboardingTaskEnum["FOLLOW_PLAYER"] = "FOLLOW_PLAYER";
    OnboardingTaskEnum["CONGRATULATION"] = "CONGRATULATION";
    OnboardingTaskEnum["PLACE_FIRST_BID"] = "PLACE_FIRST_BID";
    OnboardingTaskEnum["AFTER_COMPLETE"] = "AFTER_COMPLETE";
})(OnboardingTaskEnum = exports.OnboardingTaskEnum || (exports.OnboardingTaskEnum = {}));
var OnboardingTaskState;
(function (OnboardingTaskState) {
    OnboardingTaskState["TODO"] = "TODO";
    OnboardingTaskState["TO_CLAIM"] = "TO_CLAIM";
    OnboardingTaskState["DONE"] = "DONE";
})(OnboardingTaskState = exports.OnboardingTaskState || (exports.OnboardingTaskState = {}));
var OwnerTransfer;
(function (OwnerTransfer) {
    OwnerTransfer["TRANSFER"] = "TRANSFER";
    OwnerTransfer["MINT"] = "MINT";
    OwnerTransfer["ENGLISH_AUCTION"] = "ENGLISH_AUCTION";
    OwnerTransfer["PACK"] = "PACK";
    OwnerTransfer["SINGLE_SALE_OFFER"] = "SINGLE_SALE_OFFER";
    OwnerTransfer["DIRECT_OFFER"] = "DIRECT_OFFER";
    OwnerTransfer["SINGLE_BUY_OFFER"] = "SINGLE_BUY_OFFER";
    OwnerTransfer["REFERRAL"] = "REFERRAL";
    OwnerTransfer["REWARD"] = "REWARD";
})(OwnerTransfer = exports.OwnerTransfer || (exports.OwnerTransfer = {}));
var PaymentCurrency;
(function (PaymentCurrency) {
    PaymentCurrency["ETH"] = "ETH";
    PaymentCurrency["EUR"] = "EUR";
    PaymentCurrency["USD"] = "USD";
    PaymentCurrency["GBP"] = "GBP";
})(PaymentCurrency = exports.PaymentCurrency || (exports.PaymentCurrency = {}));
var PaymentIntentState;
(function (PaymentIntentState) {
    PaymentIntentState["READY"] = "READY";
    PaymentIntentState["CANCELLED"] = "CANCELLED";
    PaymentIntentState["SPENT"] = "SPENT";
})(PaymentIntentState = exports.PaymentIntentState || (exports.PaymentIntentState = {}));
var Period;
(function (Period) {
    Period["FIRST_HALF"] = "FIRST_HALF";
    Period["SECOND_HALF"] = "SECOND_HALF";
    Period["EXTRA_TIME_FIRST_HALF"] = "EXTRA_TIME_FIRST_HALF";
    Period["EXTRA_TIME_SECOND_HALF"] = "EXTRA_TIME_SECOND_HALF";
    Period["PENALTY_SHOOTOUT"] = "PENALTY_SHOOTOUT";
    Period["HALF_TIME"] = "HALF_TIME";
    Period["END_OF_SECOND_HALF_BEFORE_EXTRA_TIME"] = "END_OF_SECOND_HALF_BEFORE_EXTRA_TIME";
    Period["EXTRA_TIME_HALF_TIME"] = "EXTRA_TIME_HALF_TIME";
    Period["END_OF_EXTRA_TIME_BEFORE_PENALTIES"] = "END_OF_EXTRA_TIME_BEFORE_PENALTIES";
    Period["FULL_TIME"] = "FULL_TIME";
    Period["PRE_MATCH"] = "PRE_MATCH";
})(Period = exports.Period || (exports.Period = {}));
var Position;
(function (Position) {
    Position["Forward"] = "Forward";
    Position["Midfielder"] = "Midfielder";
    Position["Defender"] = "Defender";
    Position["Goalkeeper"] = "Goalkeeper";
    Position["Unknown"] = "Unknown";
    Position["Coach"] = "Coach";
})(Position = exports.Position || (exports.Position = {}));
var Rarity;
(function (Rarity) {
    Rarity["unique"] = "unique";
    Rarity["super_rare"] = "super_rare";
    Rarity["rare"] = "rare";
    Rarity["limited"] = "limited";
    Rarity["common"] = "common";
})(Rarity = exports.Rarity || (exports.Rarity = {}));
var ReferralState;
(function (ReferralState) {
    ReferralState["ALL"] = "ALL";
    ReferralState["EXPIRED"] = "EXPIRED";
    ReferralState["COMPLETED"] = "COMPLETED";
    ReferralState["IN_PROGRESS"] = "IN_PROGRESS";
})(ReferralState = exports.ReferralState || (exports.ReferralState = {}));
var RestrictionGroup;
(function (RestrictionGroup) {
    RestrictionGroup["BLOCKCHAIN_GROUP"] = "BLOCKCHAIN_GROUP";
    RestrictionGroup["ACADEMY_GROUP"] = "ACADEMY_GROUP";
})(RestrictionGroup = exports.RestrictionGroup || (exports.RestrictionGroup = {}));
var ShippingState;
(function (ShippingState) {
    ShippingState["READY_TO_CLAIM"] = "READY_TO_CLAIM";
    ShippingState["CLAIMED"] = "CLAIMED";
})(ShippingState = exports.ShippingState || (exports.ShippingState = {}));
var SkinPosition;
(function (SkinPosition) {
    SkinPosition["BANNER"] = "BANNER";
    SkinPosition["SHIELD"] = "SHIELD";
})(SkinPosition = exports.SkinPosition || (exports.SkinPosition = {}));
var SkinQuality;
(function (SkinQuality) {
    SkinQuality["AMATEUR"] = "AMATEUR";
    SkinQuality["SEMI_PRO"] = "SEMI_PRO";
    SkinQuality["PRO"] = "PRO";
    SkinQuality["LEGEND"] = "LEGEND";
})(SkinQuality = exports.SkinQuality || (exports.SkinQuality = {}));
var So5State;
(function (So5State) {
    So5State["PAST"] = "PAST";
    So5State["LIVE"] = "LIVE";
    So5State["UPCOMING"] = "UPCOMING";
})(So5State = exports.So5State || (exports.So5State = {}));
var SortingOption;
(function (SortingOption) {
    SortingOption["ASC"] = "ASC";
    SortingOption["DESC"] = "DESC";
})(SortingOption = exports.SortingOption || (exports.SortingOption = {}));
var Sport;
(function (Sport) {
    Sport["FOOTBALL"] = "FOOTBALL";
    Sport["BASEBALL"] = "BASEBALL";
})(Sport = exports.Sport || (exports.Sport = {}));
var StatCategory;
(function (StatCategory) {
    StatCategory["GENERAL"] = "GENERAL";
    StatCategory["DEFENDING"] = "DEFENDING";
    StatCategory["POSSESSION"] = "POSSESSION";
    StatCategory["PASSING"] = "PASSING";
    StatCategory["ATTACKING"] = "ATTACKING";
    StatCategory["GOALKEEPING"] = "GOALKEEPING";
    StatCategory["POSITIVE_DECISIVE_STAT"] = "POSITIVE_DECISIVE_STAT";
    StatCategory["NEGATIVE_DECISIVE_STAT"] = "NEGATIVE_DECISIVE_STAT";
    StatCategory["UNKNOWN"] = "UNKNOWN";
})(StatCategory = exports.StatCategory || (exports.StatCategory = {}));
var SubscribableType;
(function (SubscribableType) {
    SubscribableType["CARD"] = "CARD";
    SubscribableType["PLAYER"] = "PLAYER";
    SubscribableType["COUNTRY"] = "COUNTRY";
    SubscribableType["TEAM"] = "TEAM";
    SubscribableType["USER"] = "USER";
    SubscribableType["BASEBALL_CARD"] = "BASEBALL_CARD";
    SubscribableType["BASEBALL_PLAYER"] = "BASEBALL_PLAYER";
})(SubscribableType = exports.SubscribableType || (exports.SubscribableType = {}));
var Tradeable;
(function (Tradeable) {
    Tradeable["INTERNAL"] = "INTERNAL";
    Tradeable["MAPPED"] = "MAPPED";
    Tradeable["NO"] = "NO";
    Tradeable["NOT_YET"] = "NOT_YET";
    Tradeable["ON_SALE"] = "ON_SALE";
    Tradeable["YES"] = "YES";
    Tradeable["UNDEFINED"] = "UNDEFINED";
    Tradeable["DEPOSIT_REQUIRED"] = "DEPOSIT_REQUIRED";
})(Tradeable = exports.Tradeable || (exports.Tradeable = {}));
var TransactionStatus;
(function (TransactionStatus) {
    TransactionStatus["PENDING"] = "PENDING";
    TransactionStatus["CONFIRMED"] = "CONFIRMED";
    TransactionStatus["FAILED"] = "FAILED";
    TransactionStatus["CANCELLED"] = "CANCELLED";
    TransactionStatus["DROPPED"] = "DROPPED";
})(TransactionStatus = exports.TransactionStatus || (exports.TransactionStatus = {}));
var UserAccountEntryEntry;
(function (UserAccountEntryEntry) {
    UserAccountEntryEntry["PAYMENT"] = "PAYMENT";
    UserAccountEntryEntry["DEPOSIT"] = "DEPOSIT";
    UserAccountEntryEntry["WITHDRAWAL"] = "WITHDRAWAL";
    UserAccountEntryEntry["REWARD"] = "REWARD";
    UserAccountEntryEntry["ETH_MIGRATION_ROUNDING"] = "ETH_MIGRATION_ROUNDING";
    UserAccountEntryEntry["WITHDRAWAL_FEE"] = "WITHDRAWAL_FEE";
})(UserAccountEntryEntry = exports.UserAccountEntryEntry || (exports.UserAccountEntryEntry = {}));
var UserAccountEntryState;
(function (UserAccountEntryState) {
    UserAccountEntryState["PENDING"] = "PENDING";
    UserAccountEntryState["CANCELLED"] = "CANCELLED";
    UserAccountEntryState["CONFIRMED"] = "CONFIRMED";
})(UserAccountEntryState = exports.UserAccountEntryState || (exports.UserAccountEntryState = {}));
var UserSportProfileOnboardingStatus;
(function (UserSportProfileOnboardingStatus) {
    UserSportProfileOnboardingStatus["NONE"] = "NONE";
    UserSportProfileOnboardingStatus["STARTED"] = "STARTED";
    UserSportProfileOnboardingStatus["COMPLETED"] = "COMPLETED";
})(UserSportProfileOnboardingStatus = exports.UserSportProfileOnboardingStatus || (exports.UserSportProfileOnboardingStatus = {}));
var WalletStatus;
(function (WalletStatus) {
    WalletStatus["INTERNAL"] = "INTERNAL";
    WalletStatus["MAPPED"] = "MAPPED";
    WalletStatus["UNKNOWN"] = "UNKNOWN";
})(WalletStatus = exports.WalletStatus || (exports.WalletStatus = {}));
var WithdrawalStatus;
(function (WithdrawalStatus) {
    WithdrawalStatus["CREATED"] = "CREATED";
    WithdrawalStatus["CONFIRMED"] = "CONFIRMED";
    WithdrawalStatus["SETTLEMENT_PUBLISHED"] = "SETTLEMENT_PUBLISHED";
    WithdrawalStatus["SETTLED"] = "SETTLED";
    WithdrawalStatus["SETTLEMENT_FAILED"] = "SETTLEMENT_FAILED";
    WithdrawalStatus["CANCELLED"] = "CANCELLED";
})(WithdrawalStatus = exports.WithdrawalStatus || (exports.WithdrawalStatus = {}));
var MintCardsForUsersInput1 = /** @class */ (function () {
    function MintCardsForUsersInput1() {
    }
    return MintCardsForUsersInput1;
}());
exports.MintCardsForUsersInput1 = MintCardsForUsersInput1;
var NotificationCategoryInput = /** @class */ (function () {
    function NotificationCategoryInput() {
    }
    return NotificationCategoryInput;
}());
exports.NotificationCategoryInput = NotificationCategoryInput;
var NotificationPreferenceInput = /** @class */ (function () {
    function NotificationPreferenceInput() {
    }
    return NotificationPreferenceInput;
}());
exports.NotificationPreferenceInput = NotificationPreferenceInput;
var OfferMigrationInput = /** @class */ (function () {
    function OfferMigrationInput() {
    }
    return OfferMigrationInput;
}());
exports.OfferMigrationInput = OfferMigrationInput;
var So5AppearanceInput = /** @class */ (function () {
    function So5AppearanceInput() {
    }
    return So5AppearanceInput;
}());
exports.So5AppearanceInput = So5AppearanceInput;
var SorarePrivateKeyAttributes = /** @class */ (function () {
    function SorarePrivateKeyAttributes() {
    }
    return SorarePrivateKeyAttributes;
}());
exports.SorarePrivateKeyAttributes = SorarePrivateKeyAttributes;
var StarkSignatureInput = /** @class */ (function () {
    function StarkSignatureInput() {
    }
    return StarkSignatureInput;
}());
exports.StarkSignatureInput = StarkSignatureInput;
var SubscribableInput = /** @class */ (function () {
    function SubscribableInput() {
    }
    return SubscribableInput;
}());
exports.SubscribableInput = SubscribableInput;
var UnblockEmailInput = /** @class */ (function () {
    function UnblockEmailInput() {
    }
    return UnblockEmailInput;
}());
exports.UnblockEmailInput = UnblockEmailInput;
var UserLifecycleInput = /** @class */ (function () {
    function UserLifecycleInput() {
    }
    return UserLifecycleInput;
}());
exports.UserLifecycleInput = UserLifecycleInput;
var UtmInput = /** @class */ (function () {
    function UtmInput() {
    }
    return UtmInput;
}());
exports.UtmInput = UtmInput;
var AcceptOfferInput = /** @class */ (function () {
    function AcceptOfferInput() {
    }
    return AcceptOfferInput;
}());
exports.AcceptOfferInput = AcceptOfferInput;
var AcceptTermsInput = /** @class */ (function () {
    function AcceptTermsInput() {
    }
    return AcceptTermsInput;
}());
exports.AcceptTermsInput = AcceptTermsInput;
var AddCardsToDeckInput = /** @class */ (function () {
    function AddCardsToDeckInput() {
    }
    return AddCardsToDeckInput;
}());
exports.AddCardsToDeckInput = AddCardsToDeckInput;
var AddEmailToListInput = /** @class */ (function () {
    function AddEmailToListInput() {
    }
    return AddEmailToListInput;
}());
exports.AddEmailToListInput = AddEmailToListInput;
var AddFavouriteClubsInput = /** @class */ (function () {
    function AddFavouriteClubsInput() {
    }
    return AddFavouriteClubsInput;
}());
exports.AddFavouriteClubsInput = AddFavouriteClubsInput;
var ApproveMigratorInput = /** @class */ (function () {
    function ApproveMigratorInput() {
    }
    return ApproveMigratorInput;
}());
exports.ApproveMigratorInput = ApproveMigratorInput;
var BidInput = /** @class */ (function () {
    function BidInput() {
    }
    return BidInput;
}());
exports.BidInput = BidInput;
var BlockUserOffersInput = /** @class */ (function () {
    function BlockUserOffersInput() {
    }
    return BlockUserOffersInput;
}());
exports.BlockUserOffersInput = BlockUserOffersInput;
var BuySkinInput = /** @class */ (function () {
    function BuySkinInput() {
    }
    return BuySkinInput;
}());
exports.BuySkinInput = BuySkinInput;
var CancelEthBankWithdrawalsInput = /** @class */ (function () {
    function CancelEthBankWithdrawalsInput() {
    }
    return CancelEthBankWithdrawalsInput;
}());
exports.CancelEthBankWithdrawalsInput = CancelEthBankWithdrawalsInput;
var CancelFastWithdrawalInput = /** @class */ (function () {
    function CancelFastWithdrawalInput() {
    }
    return CancelFastWithdrawalInput;
}());
exports.CancelFastWithdrawalInput = CancelFastWithdrawalInput;
var CancelOfferInput = /** @class */ (function () {
    function CancelOfferInput() {
    }
    return CancelOfferInput;
}());
exports.CancelOfferInput = CancelOfferInput;
var CancelWithdrawalInput = /** @class */ (function () {
    function CancelWithdrawalInput() {
    }
    return CancelWithdrawalInput;
}());
exports.CancelWithdrawalInput = CancelWithdrawalInput;
var CheckPhoneNumberVerificationCodeInput = /** @class */ (function () {
    function CheckPhoneNumberVerificationCodeInput() {
    }
    return CheckPhoneNumberVerificationCodeInput;
}());
exports.CheckPhoneNumberVerificationCodeInput = CheckPhoneNumberVerificationCodeInput;
var ClaimAwardInput = /** @class */ (function () {
    function ClaimAwardInput() {
    }
    return ClaimAwardInput;
}());
exports.ClaimAwardInput = ClaimAwardInput;
var ClaimCardDropInput = /** @class */ (function () {
    function ClaimCardDropInput() {
    }
    return ClaimCardDropInput;
}());
exports.ClaimCardDropInput = ClaimCardDropInput;
var ClaimReferralRewardInput = /** @class */ (function () {
    function ClaimReferralRewardInput() {
    }
    return ClaimReferralRewardInput;
}());
exports.ClaimReferralRewardInput = ClaimReferralRewardInput;
var ClaimRewardInput = /** @class */ (function () {
    function ClaimRewardInput() {
    }
    return ClaimRewardInput;
}());
exports.ClaimRewardInput = ClaimRewardInput;
var CompleteOnboardingTaskInput = /** @class */ (function () {
    function CompleteOnboardingTaskInput() {
    }
    return CompleteOnboardingTaskInput;
}());
exports.CompleteOnboardingTaskInput = CompleteOnboardingTaskInput;
var ConfirmEmailInput = /** @class */ (function () {
    function ConfirmEmailInput() {
    }
    return ConfirmEmailInput;
}());
exports.ConfirmEmailInput = ConfirmEmailInput;
var ConfirmSo5LineupsInput = /** @class */ (function () {
    function ConfirmSo5LineupsInput() {
    }
    return ConfirmSo5LineupsInput;
}());
exports.ConfirmSo5LineupsInput = ConfirmSo5LineupsInput;
var CreateCardWithdrawalInput = /** @class */ (function () {
    function CreateCardWithdrawalInput() {
    }
    return CreateCardWithdrawalInput;
}());
exports.CreateCardWithdrawalInput = CreateCardWithdrawalInput;
var CreateCustomDeckInput = /** @class */ (function () {
    function CreateCustomDeckInput() {
    }
    return CreateCustomDeckInput;
}());
exports.CreateCustomDeckInput = CreateCustomDeckInput;
var CreateDirectOfferInput = /** @class */ (function () {
    function CreateDirectOfferInput() {
    }
    return CreateDirectOfferInput;
}());
exports.CreateDirectOfferInput = CreateDirectOfferInput;
var CreateEthBankWithdrawalIntentInput = /** @class */ (function () {
    function CreateEthBankWithdrawalIntentInput() {
    }
    return CreateEthBankWithdrawalIntentInput;
}());
exports.CreateEthBankWithdrawalIntentInput = CreateEthBankWithdrawalIntentInput;
var CreateEthMigrationInput = /** @class */ (function () {
    function CreateEthMigrationInput() {
    }
    return CreateEthMigrationInput;
}());
exports.CreateEthMigrationInput = CreateEthMigrationInput;
var CreateEthVaultInput = /** @class */ (function () {
    function CreateEthVaultInput() {
    }
    return CreateEthVaultInput;
}());
exports.CreateEthVaultInput = CreateEthVaultInput;
var CreateFastWithdrawalInput = /** @class */ (function () {
    function CreateFastWithdrawalInput() {
    }
    return CreateFastWithdrawalInput;
}());
exports.CreateFastWithdrawalInput = CreateFastWithdrawalInput;
var CreateOrUpdateSingleBuyOfferMinPriceInput = /** @class */ (function () {
    function CreateOrUpdateSingleBuyOfferMinPriceInput() {
    }
    return CreateOrUpdateSingleBuyOfferMinPriceInput;
}());
exports.CreateOrUpdateSingleBuyOfferMinPriceInput = CreateOrUpdateSingleBuyOfferMinPriceInput;
var CreateOrUpdateSo5LineupInput = /** @class */ (function () {
    function CreateOrUpdateSo5LineupInput() {
    }
    return CreateOrUpdateSo5LineupInput;
}());
exports.CreateOrUpdateSo5LineupInput = CreateOrUpdateSo5LineupInput;
var CreatePaymentIntentInput = /** @class */ (function () {
    function CreatePaymentIntentInput() {
    }
    return CreatePaymentIntentInput;
}());
exports.CreatePaymentIntentInput = CreatePaymentIntentInput;
var CreateSingleBuyOfferInput = /** @class */ (function () {
    function CreateSingleBuyOfferInput() {
    }
    return CreateSingleBuyOfferInput;
}());
exports.CreateSingleBuyOfferInput = CreateSingleBuyOfferInput;
var CreateSingleSaleOfferInput = /** @class */ (function () {
    function CreateSingleSaleOfferInput() {
    }
    return CreateSingleSaleOfferInput;
}());
exports.CreateSingleSaleOfferInput = CreateSingleSaleOfferInput;
var CreateSubscriptionInput = /** @class */ (function () {
    function CreateSubscriptionInput() {
    }
    return CreateSubscriptionInput;
}());
exports.CreateSubscriptionInput = CreateSubscriptionInput;
var CreateWithdrawalInput = /** @class */ (function () {
    function CreateWithdrawalInput() {
    }
    return CreateWithdrawalInput;
}());
exports.CreateWithdrawalInput = CreateWithdrawalInput;
var DeleteCustomDeckInput = /** @class */ (function () {
    function DeleteCustomDeckInput() {
    }
    return DeleteCustomDeckInput;
}());
exports.DeleteCustomDeckInput = DeleteCustomDeckInput;
var DeleteSo5LineupInput = /** @class */ (function () {
    function DeleteSo5LineupInput() {
    }
    return DeleteSo5LineupInput;
}());
exports.DeleteSo5LineupInput = DeleteSo5LineupInput;
var DeleteSubscriptionInput = /** @class */ (function () {
    function DeleteSubscriptionInput() {
    }
    return DeleteSubscriptionInput;
}());
exports.DeleteSubscriptionInput = DeleteSubscriptionInput;
var DeleteUserSo5LineupsInput = /** @class */ (function () {
    function DeleteUserSo5LineupsInput() {
    }
    return DeleteUserSo5LineupsInput;
}());
exports.DeleteUserSo5LineupsInput = DeleteUserSo5LineupsInput;
var DestroyAccountInput = /** @class */ (function () {
    function DestroyAccountInput() {
    }
    return DestroyAccountInput;
}());
exports.DestroyAccountInput = DestroyAccountInput;
var DestroyReferralInput = /** @class */ (function () {
    function DestroyReferralInput() {
    }
    return DestroyReferralInput;
}());
exports.DestroyReferralInput = DestroyReferralInput;
var DetachPaymentMethodInput = /** @class */ (function () {
    function DetachPaymentMethodInput() {
    }
    return DetachPaymentMethodInput;
}());
exports.DetachPaymentMethodInput = DetachPaymentMethodInput;
var Disable2faInput = /** @class */ (function () {
    function Disable2faInput() {
    }
    return Disable2faInput;
}());
exports.Disable2faInput = Disable2faInput;
var DisconnectOmniauthProviderInput = /** @class */ (function () {
    function DisconnectOmniauthProviderInput() {
    }
    return DisconnectOmniauthProviderInput;
}());
exports.DisconnectOmniauthProviderInput = DisconnectOmniauthProviderInput;
var EditCardInDeckInput = /** @class */ (function () {
    function EditCardInDeckInput() {
    }
    return EditCardInDeckInput;
}());
exports.EditCardInDeckInput = EditCardInDeckInput;
var EditCustomDeckInput = /** @class */ (function () {
    function EditCustomDeckInput() {
    }
    return EditCustomDeckInput;
}());
exports.EditCustomDeckInput = EditCustomDeckInput;
var Enable2faInput = /** @class */ (function () {
    function Enable2faInput() {
    }
    return Enable2faInput;
}());
exports.Enable2faInput = Enable2faInput;
var GenerateActionRewardPickablePlayersInput = /** @class */ (function () {
    function GenerateActionRewardPickablePlayersInput() {
    }
    return GenerateActionRewardPickablePlayersInput;
}());
exports.GenerateActionRewardPickablePlayersInput = GenerateActionRewardPickablePlayersInput;
var GenerateOtpBackupCodesInput = /** @class */ (function () {
    function GenerateOtpBackupCodesInput() {
    }
    return GenerateOtpBackupCodesInput;
}());
exports.GenerateOtpBackupCodesInput = GenerateOtpBackupCodesInput;
var MarkNotificationsAsReadInput = /** @class */ (function () {
    function MarkNotificationsAsReadInput() {
    }
    return MarkNotificationsAsReadInput;
}());
exports.MarkNotificationsAsReadInput = MarkNotificationsAsReadInput;
var MintCardsForUsersInput = /** @class */ (function () {
    function MintCardsForUsersInput() {
    }
    return MintCardsForUsersInput;
}());
exports.MintCardsForUsersInput = MintCardsForUsersInput;
var PickActionRewardPlayersInput = /** @class */ (function () {
    function PickActionRewardPlayersInput() {
    }
    return PickActionRewardPlayersInput;
}());
exports.PickActionRewardPlayersInput = PickActionRewardPlayersInput;
var PrepareAcceptOfferInput = /** @class */ (function () {
    function PrepareAcceptOfferInput() {
    }
    return PrepareAcceptOfferInput;
}());
exports.PrepareAcceptOfferInput = PrepareAcceptOfferInput;
var PrepareBidInput = /** @class */ (function () {
    function PrepareBidInput() {
    }
    return PrepareBidInput;
}());
exports.PrepareBidInput = PrepareBidInput;
var PrepareCardWithdrawalInput = /** @class */ (function () {
    function PrepareCardWithdrawalInput() {
    }
    return PrepareCardWithdrawalInput;
}());
exports.PrepareCardWithdrawalInput = PrepareCardWithdrawalInput;
var PrepareEthDepositInput = /** @class */ (function () {
    function PrepareEthDepositInput() {
    }
    return PrepareEthDepositInput;
}());
exports.PrepareEthDepositInput = PrepareEthDepositInput;
var PrepareOfferInput = /** @class */ (function () {
    function PrepareOfferInput() {
    }
    return PrepareOfferInput;
}());
exports.PrepareOfferInput = PrepareOfferInput;
var PrepareTokenDepositInput = /** @class */ (function () {
    function PrepareTokenDepositInput() {
    }
    return PrepareTokenDepositInput;
}());
exports.PrepareTokenDepositInput = PrepareTokenDepositInput;
var RejectOfferInput = /** @class */ (function () {
    function RejectOfferInput() {
    }
    return RejectOfferInput;
}());
exports.RejectOfferInput = RejectOfferInput;
var RelayCallInput = /** @class */ (function () {
    function RelayCallInput() {
    }
    return RelayCallInput;
}());
exports.RelayCallInput = RelayCallInput;
var RemoveCardFromDeckInput = /** @class */ (function () {
    function RemoveCardFromDeckInput() {
    }
    return RemoveCardFromDeckInput;
}());
exports.RemoveCardFromDeckInput = RemoveCardFromDeckInput;
var RequestReceiptInput = /** @class */ (function () {
    function RequestReceiptInput() {
    }
    return RequestReceiptInput;
}());
exports.RequestReceiptInput = RequestReceiptInput;
var ResetPrivateKeyInput = /** @class */ (function () {
    function ResetPrivateKeyInput() {
    }
    return ResetPrivateKeyInput;
}());
exports.ResetPrivateKeyInput = ResetPrivateKeyInput;
var ResumeOnboardingInput = /** @class */ (function () {
    function ResumeOnboardingInput() {
    }
    return ResumeOnboardingInput;
}());
exports.ResumeOnboardingInput = ResumeOnboardingInput;
var SetDeviceTokenInput = /** @class */ (function () {
    function SetDeviceTokenInput() {
    }
    return SetDeviceTokenInput;
}());
exports.SetDeviceTokenInput = SetDeviceTokenInput;
var SignInInput = /** @class */ (function () {
    function SignInInput() {
    }
    return SignInInput;
}());
exports.SignInInput = SignInInput;
var SignUpInput = /** @class */ (function () {
    function SignUpInput() {
    }
    return SignUpInput;
}());
exports.SignUpInput = SignUpInput;
var SkipOnboardingInput = /** @class */ (function () {
    function SkipOnboardingInput() {
    }
    return SkipOnboardingInput;
}());
exports.SkipOnboardingInput = SkipOnboardingInput;
var UnblockUserOffersInput = /** @class */ (function () {
    function UnblockUserOffersInput() {
    }
    return UnblockUserOffersInput;
}());
exports.UnblockUserOffersInput = UnblockUserOffersInput;
var UpdateSubscriptionInput = /** @class */ (function () {
    function UpdateSubscriptionInput() {
    }
    return UpdateSubscriptionInput;
}());
exports.UpdateSubscriptionInput = UpdateSubscriptionInput;
var UpdateUserProfileInput = /** @class */ (function () {
    function UpdateUserProfileInput() {
    }
    return UpdateUserProfileInput;
}());
exports.UpdateUserProfileInput = UpdateUserProfileInput;
var UpdateUserSettingsInput = /** @class */ (function () {
    function UpdateUserSettingsInput() {
    }
    return UpdateUserSettingsInput;
}());
exports.UpdateUserSettingsInput = UpdateUserSettingsInput;
var VerifyPhoneNumberInput = /** @class */ (function () {
    function VerifyPhoneNumberInput() {
    }
    return VerifyPhoneNumberInput;
}());
exports.VerifyPhoneNumberInput = VerifyPhoneNumberInput;
var Account = /** @class */ (function () {
    function Account() {
    }
    return Account;
}());
exports.Account = Account;
var ActionReward = /** @class */ (function () {
    function ActionReward() {
    }
    return ActionReward;
}());
exports.ActionReward = ActionReward;
var ActivityActionRewardStatus = /** @class */ (function () {
    function ActivityActionRewardStatus() {
    }
    return ActivityActionRewardStatus;
}());
exports.ActivityActionRewardStatus = ActivityActionRewardStatus;
var Age = /** @class */ (function () {
    function Age() {
    }
    return Age;
}());
exports.Age = Age;
var Announcement = /** @class */ (function () {
    function Announcement() {
    }
    return Announcement;
}());
exports.Announcement = Announcement;
var AnnouncementConnection = /** @class */ (function () {
    function AnnouncementConnection() {
    }
    return AnnouncementConnection;
}());
exports.AnnouncementConnection = AnnouncementConnection;
var AnnouncementEdge = /** @class */ (function () {
    function AnnouncementEdge() {
    }
    return AnnouncementEdge;
}());
exports.AnnouncementEdge = AnnouncementEdge;
var AnnouncementNotification = /** @class */ (function () {
    function AnnouncementNotification() {
    }
    return AnnouncementNotification;
}());
exports.AnnouncementNotification = AnnouncementNotification;
var AnonymousUser = /** @class */ (function () {
    function AnonymousUser() {
    }
    return AnonymousUser;
}());
exports.AnonymousUser = AnonymousUser;
var AuctionNotification = /** @class */ (function () {
    function AuctionNotification() {
    }
    return AuctionNotification;
}());
exports.AuctionNotification = AuctionNotification;
var AverageScoreOpenBoundaries = /** @class */ (function () {
    function AverageScoreOpenBoundaries() {
    }
    return AverageScoreOpenBoundaries;
}());
exports.AverageScoreOpenBoundaries = AverageScoreOpenBoundaries;
var AverageScorePlayersCount = /** @class */ (function () {
    function AverageScorePlayersCount() {
    }
    return AverageScorePlayersCount;
}());
exports.AverageScorePlayersCount = AverageScorePlayersCount;
var Bid = /** @class */ (function () {
    function Bid() {
    }
    return Bid;
}());
exports.Bid = Bid;
var BidConnection = /** @class */ (function () {
    function BidConnection() {
    }
    return BidConnection;
}());
exports.BidConnection = BidConnection;
var BidEdge = /** @class */ (function () {
    function BidEdge() {
    }
    return BidEdge;
}());
exports.BidEdge = BidEdge;
var BidWithRates = /** @class */ (function () {
    function BidWithRates() {
    }
    return BidWithRates;
}());
exports.BidWithRates = BidWithRates;
var BundledAuction = /** @class */ (function () {
    function BundledAuction() {
    }
    return BundledAuction;
}());
exports.BundledAuction = BundledAuction;
var BundledAuctionConnection = /** @class */ (function () {
    function BundledAuctionConnection() {
    }
    return BundledAuctionConnection;
}());
exports.BundledAuctionConnection = BundledAuctionConnection;
var BundledAuctionEdge = /** @class */ (function () {
    function BundledAuctionEdge() {
    }
    return BundledAuctionEdge;
}());
exports.BundledAuctionEdge = BundledAuctionEdge;
var Card = /** @class */ (function () {
    function Card() {
    }
    return Card;
}());
exports.Card = Card;
var CardConnection = /** @class */ (function () {
    function CardConnection() {
    }
    return CardConnection;
}());
exports.CardConnection = CardConnection;
var CardCount = /** @class */ (function () {
    function CardCount() {
    }
    return CardCount;
}());
exports.CardCount = CardCount;
var CardDrop = /** @class */ (function () {
    function CardDrop() {
    }
    return CardDrop;
}());
exports.CardDrop = CardDrop;
var CardEdge = /** @class */ (function () {
    function CardEdge() {
    }
    return CardEdge;
}());
exports.CardEdge = CardEdge;
var CardEdition = /** @class */ (function () {
    function CardEdition() {
    }
    return CardEdition;
}());
exports.CardEdition = CardEdition;
var CardEditionCount = /** @class */ (function () {
    function CardEditionCount() {
    }
    return CardEditionCount;
}());
exports.CardEditionCount = CardEditionCount;
var CardEditionsCount = /** @class */ (function () {
    function CardEditionsCount() {
    }
    return CardEditionsCount;
}());
exports.CardEditionsCount = CardEditionsCount;
var CardLayout = /** @class */ (function () {
    function CardLayout() {
    }
    return CardLayout;
}());
exports.CardLayout = CardLayout;
var CardNotification = /** @class */ (function () {
    function CardNotification() {
    }
    return CardNotification;
}());
exports.CardNotification = CardNotification;
var CardOffer = /** @class */ (function () {
    function CardOffer() {
    }
    return CardOffer;
}());
exports.CardOffer = CardOffer;
var CardPrint = /** @class */ (function () {
    function CardPrint() {
    }
    return CardPrint;
}());
exports.CardPrint = CardPrint;
var CardSeasonSupply = /** @class */ (function () {
    function CardSeasonSupply() {
    }
    return CardSeasonSupply;
}());
exports.CardSeasonSupply = CardSeasonSupply;
var CardSubscription = /** @class */ (function () {
    function CardSubscription() {
    }
    return CardSubscription;
}());
exports.CardSubscription = CardSubscription;
var Challenge = /** @class */ (function () {
    function Challenge() {
    }
    return Challenge;
}());
exports.Challenge = Challenge;
var ChallengeNotification = /** @class */ (function () {
    function ChallengeNotification() {
    }
    return ChallengeNotification;
}());
exports.ChallengeNotification = ChallengeNotification;
var Club = /** @class */ (function () {
    function Club() {
    }
    return Club;
}());
exports.Club = Club;
var ClubConnection = /** @class */ (function () {
    function ClubConnection() {
    }
    return ClubConnection;
}());
exports.ClubConnection = ClubConnection;
var ClubEdge = /** @class */ (function () {
    function ClubEdge() {
    }
    return ClubEdge;
}());
exports.ClubEdge = ClubEdge;
var CommonAccount = /** @class */ (function () {
    function CommonAccount() {
    }
    return CommonAccount;
}());
exports.CommonAccount = CommonAccount;
var Competition = /** @class */ (function () {
    function Competition() {
    }
    return Competition;
}());
exports.Competition = Competition;
var Config = /** @class */ (function () {
    function Config() {
    }
    return Config;
}());
exports.Config = Config;
var Contestant = /** @class */ (function () {
    function Contestant() {
    }
    return Contestant;
}());
exports.Contestant = Contestant;
var Contract = /** @class */ (function () {
    function Contract() {
    }
    return Contract;
}());
exports.Contract = Contract;
var Country = /** @class */ (function () {
    function Country() {
    }
    return Country;
}());
exports.Country = Country;
var CreditCard = /** @class */ (function () {
    function CreditCard() {
    }
    return CreditCard;
}());
exports.CreditCard = CreditCard;
var CurrentUser = /** @class */ (function () {
    function CurrentUser() {
    }
    return CurrentUser;
}());
exports.CurrentUser = CurrentUser;
var CustomBanner = /** @class */ (function () {
    function CustomBanner() {
    }
    return CustomBanner;
}());
exports.CustomBanner = CustomBanner;
var CustomDeck = /** @class */ (function () {
    function CustomDeck() {
    }
    return CustomDeck;
}());
exports.CustomDeck = CustomDeck;
var CustomDeckConnection = /** @class */ (function () {
    function CustomDeckConnection() {
    }
    return CustomDeckConnection;
}());
exports.CustomDeckConnection = CustomDeckConnection;
var CustomDeckEdge = /** @class */ (function () {
    function CustomDeckEdge() {
    }
    return CustomDeckEdge;
}());
exports.CustomDeckEdge = CustomDeckEdge;
var DecisiveActionNotification = /** @class */ (function () {
    function DecisiveActionNotification() {
    }
    return DecisiveActionNotification;
}());
exports.DecisiveActionNotification = DecisiveActionNotification;
var DeckCard = /** @class */ (function () {
    function DeckCard() {
    }
    return DeckCard;
}());
exports.DeckCard = DeckCard;
var DeckCardConnection = /** @class */ (function () {
    function DeckCardConnection() {
    }
    return DeckCardConnection;
}());
exports.DeckCardConnection = DeckCardConnection;
var DeckCardEdge = /** @class */ (function () {
    function DeckCardEdge() {
    }
    return DeckCardEdge;
}());
exports.DeckCardEdge = DeckCardEdge;
var DeckInFormation = /** @class */ (function () {
    function DeckInFormation() {
    }
    return DeckInFormation;
}());
exports.DeckInFormation = DeckInFormation;
var DivisionChangeNotification = /** @class */ (function () {
    function DivisionChangeNotification() {
    }
    return DivisionChangeNotification;
}());
exports.DivisionChangeNotification = DivisionChangeNotification;
var EmailSubscription = /** @class */ (function () {
    function EmailSubscription() {
    }
    return EmailSubscription;
}());
exports.EmailSubscription = EmailSubscription;
var EmailSubscriptionConnection = /** @class */ (function () {
    function EmailSubscriptionConnection() {
    }
    return EmailSubscriptionConnection;
}());
exports.EmailSubscriptionConnection = EmailSubscriptionConnection;
var EmailSubscriptionEdge = /** @class */ (function () {
    function EmailSubscriptionEdge() {
    }
    return EmailSubscriptionEdge;
}());
exports.EmailSubscriptionEdge = EmailSubscriptionEdge;
var EmailSubscriptionPreferences = /** @class */ (function () {
    function EmailSubscriptionPreferences() {
    }
    return EmailSubscriptionPreferences;
}());
exports.EmailSubscriptionPreferences = EmailSubscriptionPreferences;
var EngineConfiguration = /** @class */ (function () {
    function EngineConfiguration() {
    }
    return EngineConfiguration;
}());
exports.EngineConfiguration = EngineConfiguration;
var EnglishAuction = /** @class */ (function () {
    function EnglishAuction() {
    }
    return EnglishAuction;
}());
exports.EnglishAuction = EnglishAuction;
var EnglishAuctionConnection = /** @class */ (function () {
    function EnglishAuctionConnection() {
    }
    return EnglishAuctionConnection;
}());
exports.EnglishAuctionConnection = EnglishAuctionConnection;
var EnglishAuctionEdge = /** @class */ (function () {
    function EnglishAuctionEdge() {
    }
    return EnglishAuctionEdge;
}());
exports.EnglishAuctionEdge = EnglishAuctionEdge;
var EthBankWithdrawalIntent = /** @class */ (function () {
    function EthBankWithdrawalIntent() {
    }
    return EthBankWithdrawalIntent;
}());
exports.EthBankWithdrawalIntent = EthBankWithdrawalIntent;
var EthDeposit = /** @class */ (function () {
    function EthDeposit() {
    }
    return EthDeposit;
}());
exports.EthDeposit = EthDeposit;
var EthMigration = /** @class */ (function () {
    function EthMigration() {
    }
    return EthMigration;
}());
exports.EthMigration = EthMigration;
var EthereumAccount = /** @class */ (function () {
    function EthereumAccount() {
    }
    return EthereumAccount;
}());
exports.EthereumAccount = EthereumAccount;
var EthereumTransaction = /** @class */ (function () {
    function EthereumTransaction() {
    }
    return EthereumTransaction;
}());
exports.EthereumTransaction = EthereumTransaction;
var ExchangeRate = /** @class */ (function () {
    function ExchangeRate() {
    }
    return ExchangeRate;
}());
exports.ExchangeRate = ExchangeRate;
var FaceLandmark = /** @class */ (function () {
    function FaceLandmark() {
    }
    return FaceLandmark;
}());
exports.FaceLandmark = FaceLandmark;
var FastWithdrawal = /** @class */ (function () {
    function FastWithdrawal() {
    }
    return FastWithdrawal;
}());
exports.FastWithdrawal = FastWithdrawal;
var FastWithdrawalWithRates = /** @class */ (function () {
    function FastWithdrawalWithRates() {
    }
    return FastWithdrawalWithRates;
}());
exports.FastWithdrawalWithRates = FastWithdrawalWithRates;
var Fee = /** @class */ (function () {
    function Fee() {
    }
    return Fee;
}());
exports.Fee = Fee;
var Fiat = /** @class */ (function () {
    function Fiat() {
    }
    return Fiat;
}());
exports.Fiat = Fiat;
var FullWithdrawalRequest = /** @class */ (function () {
    function FullWithdrawalRequest() {
    }
    return FullWithdrawalRequest;
}());
exports.FullWithdrawalRequest = FullWithdrawalRequest;
var Game = /** @class */ (function () {
    function Game() {
    }
    return Game;
}());
exports.Game = Game;
var GameConnection = /** @class */ (function () {
    function GameConnection() {
    }
    return GameConnection;
}());
exports.GameConnection = GameConnection;
var GameEdge = /** @class */ (function () {
    function GameEdge() {
    }
    return GameEdge;
}());
exports.GameEdge = GameEdge;
var HighlightedDeck = /** @class */ (function () {
    function HighlightedDeck() {
    }
    return HighlightedDeck;
}());
exports.HighlightedDeck = HighlightedDeck;
var Injury = /** @class */ (function () {
    function Injury() {
    }
    return Injury;
}());
exports.Injury = Injury;
var JwtToken = /** @class */ (function () {
    function JwtToken() {
    }
    return JwtToken;
}());
exports.JwtToken = JwtToken;
var LandingClub = /** @class */ (function () {
    function LandingClub() {
    }
    return LandingClub;
}());
exports.LandingClub = LandingClub;
var LandingTheme = /** @class */ (function () {
    function LandingTheme() {
    }
    return LandingTheme;
}());
exports.LandingTheme = LandingTheme;
var LeaderboardRewardsConfig = /** @class */ (function () {
    function LeaderboardRewardsConfig() {
    }
    return LeaderboardRewardsConfig;
}());
exports.LeaderboardRewardsConfig = LeaderboardRewardsConfig;
var LimitOrder = /** @class */ (function () {
    function LimitOrder() {
    }
    return LimitOrder;
}());
exports.LimitOrder = LimitOrder;
var LoomAccount = /** @class */ (function () {
    function LoomAccount() {
    }
    return LoomAccount;
}());
exports.LoomAccount = LoomAccount;
var Membership = /** @class */ (function () {
    function Membership() {
    }
    return Membership;
}());
exports.Membership = Membership;
var MembershipConnection = /** @class */ (function () {
    function MembershipConnection() {
    }
    return MembershipConnection;
}());
exports.MembershipConnection = MembershipConnection;
var MembershipEdge = /** @class */ (function () {
    function MembershipEdge() {
    }
    return MembershipEdge;
}());
exports.MembershipEdge = MembershipEdge;
var MintingQuota = /** @class */ (function () {
    function MintingQuota() {
    }
    return MintingQuota;
}());
exports.MintingQuota = MintingQuota;
var MintingQuotaAllocation = /** @class */ (function () {
    function MintingQuotaAllocation() {
    }
    return MintingQuotaAllocation;
}());
exports.MintingQuotaAllocation = MintingQuotaAllocation;
var MintingQuotaAllocationConnection = /** @class */ (function () {
    function MintingQuotaAllocationConnection() {
    }
    return MintingQuotaAllocationConnection;
}());
exports.MintingQuotaAllocationConnection = MintingQuotaAllocationConnection;
var MintingQuotaAllocationEdge = /** @class */ (function () {
    function MintingQuotaAllocationEdge() {
    }
    return MintingQuotaAllocationEdge;
}());
exports.MintingQuotaAllocationEdge = MintingQuotaAllocationEdge;
var MintingQuotaUnit = /** @class */ (function () {
    function MintingQuotaUnit() {
    }
    return MintingQuotaUnit;
}());
exports.MintingQuotaUnit = MintingQuotaUnit;
var IMutation = /** @class */ (function () {
    function IMutation() {
    }
    return IMutation;
}());
exports.IMutation = IMutation;
var NationalTeam = /** @class */ (function () {
    function NationalTeam() {
    }
    return NationalTeam;
}());
exports.NationalTeam = NationalTeam;
var NotificationConnection = /** @class */ (function () {
    function NotificationConnection() {
    }
    return NotificationConnection;
}());
exports.NotificationConnection = NotificationConnection;
var NotificationEdge = /** @class */ (function () {
    function NotificationEdge() {
    }
    return NotificationEdge;
}());
exports.NotificationEdge = NotificationEdge;
var NotificationPreference = /** @class */ (function () {
    function NotificationPreference() {
    }
    return NotificationPreference;
}());
exports.NotificationPreference = NotificationPreference;
var Notifications = /** @class */ (function () {
    function Notifications() {
    }
    return Notifications;
}());
exports.Notifications = Notifications;
var OAuthApplication = /** @class */ (function () {
    function OAuthApplication() {
    }
    return OAuthApplication;
}());
exports.OAuthApplication = OAuthApplication;
var Offer = /** @class */ (function () {
    function Offer() {
    }
    return Offer;
}());
exports.Offer = Offer;
var OfferConnection = /** @class */ (function () {
    function OfferConnection() {
    }
    return OfferConnection;
}());
exports.OfferConnection = OfferConnection;
var OfferEdge = /** @class */ (function () {
    function OfferEdge() {
    }
    return OfferEdge;
}());
exports.OfferEdge = OfferEdge;
var OfferNotification = /** @class */ (function () {
    function OfferNotification() {
    }
    return OfferNotification;
}());
exports.OfferNotification = OfferNotification;
var Onboarding = /** @class */ (function () {
    function Onboarding() {
    }
    return Onboarding;
}());
exports.Onboarding = Onboarding;
var OnboardingTask = /** @class */ (function () {
    function OnboardingTask() {
    }
    return OnboardingTask;
}());
exports.OnboardingTask = OnboardingTask;
var OrderedSo5Scores = /** @class */ (function () {
    function OrderedSo5Scores() {
    }
    return OrderedSo5Scores;
}());
exports.OrderedSo5Scores = OrderedSo5Scores;
var Owner = /** @class */ (function () {
    function Owner() {
    }
    return Owner;
}());
exports.Owner = Owner;
var OwnerWithRates = /** @class */ (function () {
    function OwnerWithRates() {
    }
    return OwnerWithRates;
}());
exports.OwnerWithRates = OwnerWithRates;
var Pack = /** @class */ (function () {
    function Pack() {
    }
    return Pack;
}());
exports.Pack = Pack;
var PageInfo = /** @class */ (function () {
    function PageInfo() {
    }
    return PageInfo;
}());
exports.PageInfo = PageInfo;
var Payment = /** @class */ (function () {
    function Payment() {
    }
    return Payment;
}());
exports.Payment = Payment;
var PaymentConnection = /** @class */ (function () {
    function PaymentConnection() {
    }
    return PaymentConnection;
}());
exports.PaymentConnection = PaymentConnection;
var PaymentEdge = /** @class */ (function () {
    function PaymentEdge() {
    }
    return PaymentEdge;
}());
exports.PaymentEdge = PaymentEdge;
var PaymentIntent = /** @class */ (function () {
    function PaymentIntent() {
    }
    return PaymentIntent;
}());
exports.PaymentIntent = PaymentIntent;
var PaymentMethod = /** @class */ (function () {
    function PaymentMethod() {
    }
    return PaymentMethod;
}());
exports.PaymentMethod = PaymentMethod;
var PickablePlayer = /** @class */ (function () {
    function PickablePlayer() {
    }
    return PickablePlayer;
}());
exports.PickablePlayer = PickablePlayer;
var Player = /** @class */ (function () {
    function Player() {
    }
    return Player;
}());
exports.Player = Player;
var PlayerConnection = /** @class */ (function () {
    function PlayerConnection() {
    }
    return PlayerConnection;
}());
exports.PlayerConnection = PlayerConnection;
var PlayerEdge = /** @class */ (function () {
    function PlayerEdge() {
    }
    return PlayerEdge;
}());
exports.PlayerEdge = PlayerEdge;
var PlayerGameStats = /** @class */ (function () {
    function PlayerGameStats() {
    }
    return PlayerGameStats;
}());
exports.PlayerGameStats = PlayerGameStats;
var PlayerPool = /** @class */ (function () {
    function PlayerPool() {
    }
    return PlayerPool;
}());
exports.PlayerPool = PlayerPool;
var PlayerStatus = /** @class */ (function () {
    function PlayerStatus() {
    }
    return PlayerStatus;
}());
exports.PlayerStatus = PlayerStatus;
var PlayerWithSupply = /** @class */ (function () {
    function PlayerWithSupply() {
    }
    return PlayerWithSupply;
}());
exports.PlayerWithSupply = PlayerWithSupply;
var PowerBreakdown = /** @class */ (function () {
    function PowerBreakdown() {
    }
    return PowerBreakdown;
}());
exports.PowerBreakdown = PowerBreakdown;
var IQuery = /** @class */ (function () {
    function IQuery() {
    }
    return IQuery;
}());
exports.IQuery = IQuery;
var Range = /** @class */ (function () {
    function Range() {
    }
    return Range;
}());
exports.Range = Range;
var RaritiesCardLayout = /** @class */ (function () {
    function RaritiesCardLayout() {
    }
    return RaritiesCardLayout;
}());
exports.RaritiesCardLayout = RaritiesCardLayout;
var Referral = /** @class */ (function () {
    function Referral() {
    }
    return Referral;
}());
exports.Referral = Referral;
var ReferralCampaign = /** @class */ (function () {
    function ReferralCampaign() {
    }
    return ReferralCampaign;
}());
exports.ReferralCampaign = ReferralCampaign;
var ReferralPaginated = /** @class */ (function () {
    function ReferralPaginated() {
    }
    return ReferralPaginated;
}());
exports.ReferralPaginated = ReferralPaginated;
var ReferralReward = /** @class */ (function () {
    function ReferralReward() {
    }
    return ReferralReward;
}());
exports.ReferralReward = ReferralReward;
var ReferralRewardNotification = /** @class */ (function () {
    function ReferralRewardNotification() {
    }
    return ReferralRewardNotification;
}());
exports.ReferralRewardNotification = ReferralRewardNotification;
var RewardCard = /** @class */ (function () {
    function RewardCard() {
    }
    return RewardCard;
}());
exports.RewardCard = RewardCard;
var RewardsOverview = /** @class */ (function () {
    function RewardsOverview() {
    }
    return RewardsOverview;
}());
exports.RewardsOverview = RewardsOverview;
var SaleNotification = /** @class */ (function () {
    function SaleNotification() {
    }
    return SaleNotification;
}());
exports.SaleNotification = SaleNotification;
var ScreenshottableCard = /** @class */ (function () {
    function ScreenshottableCard() {
    }
    return ScreenshottableCard;
}());
exports.ScreenshottableCard = ScreenshottableCard;
var Season = /** @class */ (function () {
    function Season() {
    }
    return Season;
}());
exports.Season = Season;
var SeasonPicture = /** @class */ (function () {
    function SeasonPicture() {
    }
    return SeasonPicture;
}());
exports.SeasonPicture = SeasonPicture;
var SingleBuyOfferMinPrice = /** @class */ (function () {
    function SingleBuyOfferMinPrice() {
    }
    return SingleBuyOfferMinPrice;
}());
exports.SingleBuyOfferMinPrice = SingleBuyOfferMinPrice;
var SingleSaleOffer = /** @class */ (function () {
    function SingleSaleOffer() {
    }
    return SingleSaleOffer;
}());
exports.SingleSaleOffer = SingleSaleOffer;
var SingleSaleOfferConnection = /** @class */ (function () {
    function SingleSaleOfferConnection() {
    }
    return SingleSaleOfferConnection;
}());
exports.SingleSaleOfferConnection = SingleSaleOfferConnection;
var SingleSaleOfferEdge = /** @class */ (function () {
    function SingleSaleOfferEdge() {
    }
    return SingleSaleOfferEdge;
}());
exports.SingleSaleOfferEdge = SingleSaleOfferEdge;
var Skin = /** @class */ (function () {
    function Skin() {
    }
    return Skin;
}());
exports.Skin = Skin;
var SkinConnection = /** @class */ (function () {
    function SkinConnection() {
    }
    return SkinConnection;
}());
exports.SkinConnection = SkinConnection;
var SkinEdge = /** @class */ (function () {
    function SkinEdge() {
    }
    return SkinEdge;
}());
exports.SkinEdge = SkinEdge;
var So5Appearance = /** @class */ (function () {
    function So5Appearance() {
    }
    return So5Appearance;
}());
exports.So5Appearance = So5Appearance;
var So5AtLeastOfClubs = /** @class */ (function () {
    function So5AtLeastOfClubs() {
    }
    return So5AtLeastOfClubs;
}());
exports.So5AtLeastOfClubs = So5AtLeastOfClubs;
var So5AtLeastOfCompetitions = /** @class */ (function () {
    function So5AtLeastOfCompetitions() {
    }
    return So5AtLeastOfCompetitions;
}());
exports.So5AtLeastOfCompetitions = So5AtLeastOfCompetitions;
var So5Config = /** @class */ (function () {
    function So5Config() {
    }
    return So5Config;
}());
exports.So5Config = So5Config;
var So5Fixture = /** @class */ (function () {
    function So5Fixture() {
    }
    return So5Fixture;
}());
exports.So5Fixture = So5Fixture;
var So5FixtureConnection = /** @class */ (function () {
    function So5FixtureConnection() {
    }
    return So5FixtureConnection;
}());
exports.So5FixtureConnection = So5FixtureConnection;
var So5FixtureEdge = /** @class */ (function () {
    function So5FixtureEdge() {
    }
    return So5FixtureEdge;
}());
exports.So5FixtureEdge = So5FixtureEdge;
var So5Game = /** @class */ (function () {
    function So5Game() {
    }
    return So5Game;
}());
exports.So5Game = So5Game;
var So5Leaderboard = /** @class */ (function () {
    function So5Leaderboard() {
    }
    return So5Leaderboard;
}());
exports.So5Leaderboard = So5Leaderboard;
var So5LeaderboardConnection = /** @class */ (function () {
    function So5LeaderboardConnection() {
    }
    return So5LeaderboardConnection;
}());
exports.So5LeaderboardConnection = So5LeaderboardConnection;
var So5LeaderboardEdge = /** @class */ (function () {
    function So5LeaderboardEdge() {
    }
    return So5LeaderboardEdge;
}());
exports.So5LeaderboardEdge = So5LeaderboardEdge;
var So5League = /** @class */ (function () {
    function So5League() {
    }
    return So5League;
}());
exports.So5League = So5League;
var So5Lineup = /** @class */ (function () {
    function So5Lineup() {
    }
    return So5Lineup;
}());
exports.So5Lineup = So5Lineup;
var So5LineupConnection = /** @class */ (function () {
    function So5LineupConnection() {
    }
    return So5LineupConnection;
}());
exports.So5LineupConnection = So5LineupConnection;
var So5LineupEdge = /** @class */ (function () {
    function So5LineupEdge() {
    }
    return So5LineupEdge;
}());
exports.So5LineupEdge = So5LineupEdge;
var So5LineupNotification = /** @class */ (function () {
    function So5LineupNotification() {
    }
    return So5LineupNotification;
}());
exports.So5LineupNotification = So5LineupNotification;
var So5Ranking = /** @class */ (function () {
    function So5Ranking() {
    }
    return So5Ranking;
}());
exports.So5Ranking = So5Ranking;
var So5RankingConnection = /** @class */ (function () {
    function So5RankingConnection() {
    }
    return So5RankingConnection;
}());
exports.So5RankingConnection = So5RankingConnection;
var So5RankingEdge = /** @class */ (function () {
    function So5RankingEdge() {
    }
    return So5RankingEdge;
}());
exports.So5RankingEdge = So5RankingEdge;
var So5RankingsPaginated = /** @class */ (function () {
    function So5RankingsPaginated() {
    }
    return So5RankingsPaginated;
}());
exports.So5RankingsPaginated = So5RankingsPaginated;
var So5Rarity = /** @class */ (function () {
    function So5Rarity() {
    }
    return So5Rarity;
}());
exports.So5Rarity = So5Rarity;
var So5Reward = /** @class */ (function () {
    function So5Reward() {
    }
    return So5Reward;
}());
exports.So5Reward = So5Reward;
var So5RewardCardConfig = /** @class */ (function () {
    function So5RewardCardConfig() {
    }
    return So5RewardCardConfig;
}());
exports.So5RewardCardConfig = So5RewardCardConfig;
var So5RewardConfig = /** @class */ (function () {
    function So5RewardConfig() {
    }
    return So5RewardConfig;
}());
exports.So5RewardConfig = So5RewardConfig;
var So5RewardConnection = /** @class */ (function () {
    function So5RewardConnection() {
    }
    return So5RewardConnection;
}());
exports.So5RewardConnection = So5RewardConnection;
var So5RewardEdge = /** @class */ (function () {
    function So5RewardEdge() {
    }
    return So5RewardEdge;
}());
exports.So5RewardEdge = So5RewardEdge;
var So5Rules = /** @class */ (function () {
    function So5Rules() {
    }
    return So5Rules;
}());
exports.So5Rules = So5Rules;
var So5Score = /** @class */ (function () {
    function So5Score() {
    }
    return So5Score;
}());
exports.So5Score = So5Score;
var So5ScoreConnection = /** @class */ (function () {
    function So5ScoreConnection() {
    }
    return So5ScoreConnection;
}());
exports.So5ScoreConnection = So5ScoreConnection;
var So5ScoreEdge = /** @class */ (function () {
    function So5ScoreEdge() {
    }
    return So5ScoreEdge;
}());
exports.So5ScoreEdge = So5ScoreEdge;
var SocialPictureDerivative = /** @class */ (function () {
    function SocialPictureDerivative() {
    }
    return SocialPictureDerivative;
}());
exports.SocialPictureDerivative = SocialPictureDerivative;
var SorarePrivateKey = /** @class */ (function () {
    function SorarePrivateKey() {
    }
    return SorarePrivateKey;
}());
exports.SorarePrivateKey = SorarePrivateKey;
var SpecialWeeklyBanner = /** @class */ (function () {
    function SpecialWeeklyBanner() {
    }
    return SpecialWeeklyBanner;
}());
exports.SpecialWeeklyBanner = SpecialWeeklyBanner;
var StarkwareAccount = /** @class */ (function () {
    function StarkwareAccount() {
    }
    return StarkwareAccount;
}());
exports.StarkwareAccount = StarkwareAccount;
var StarkwareWithdrawal = /** @class */ (function () {
    function StarkwareWithdrawal() {
    }
    return StarkwareWithdrawal;
}());
exports.StarkwareWithdrawal = StarkwareWithdrawal;
var StatScore = /** @class */ (function () {
    function StatScore() {
    }
    return StatScore;
}());
exports.StatScore = StatScore;
var Stats = /** @class */ (function () {
    function Stats() {
    }
    return Stats;
}());
exports.Stats = Stats;
var ISubscription = /** @class */ (function () {
    function ISubscription() {
    }
    return ISubscription;
}());
exports.ISubscription = ISubscription;
var TieredPlayerPool = /** @class */ (function () {
    function TieredPlayerPool() {
    }
    return TieredPlayerPool;
}());
exports.TieredPlayerPool = TieredPlayerPool;
var TitleBodyNotificationMobileRendering = /** @class */ (function () {
    function TitleBodyNotificationMobileRendering() {
    }
    return TitleBodyNotificationMobileRendering;
}());
exports.TitleBodyNotificationMobileRendering = TitleBodyNotificationMobileRendering;
var TitleBodyNotificationRendering = /** @class */ (function () {
    function TitleBodyNotificationRendering() {
    }
    return TitleBodyNotificationRendering;
}());
exports.TitleBodyNotificationRendering = TitleBodyNotificationRendering;
var Token = /** @class */ (function () {
    function Token() {
    }
    return Token;
}());
exports.Token = Token;
var TokenAuction = /** @class */ (function () {
    function TokenAuction() {
    }
    return TokenAuction;
}());
exports.TokenAuction = TokenAuction;
var TokenAuctionConnection = /** @class */ (function () {
    function TokenAuctionConnection() {
    }
    return TokenAuctionConnection;
}());
exports.TokenAuctionConnection = TokenAuctionConnection;
var TokenAuctionEdge = /** @class */ (function () {
    function TokenAuctionEdge() {
    }
    return TokenAuctionEdge;
}());
exports.TokenAuctionEdge = TokenAuctionEdge;
var TokenBaseballMetadata = /** @class */ (function () {
    function TokenBaseballMetadata() {
    }
    return TokenBaseballMetadata;
}());
exports.TokenBaseballMetadata = TokenBaseballMetadata;
var TokenBid = /** @class */ (function () {
    function TokenBid() {
    }
    return TokenBid;
}());
exports.TokenBid = TokenBid;
var TokenBidConnection = /** @class */ (function () {
    function TokenBidConnection() {
    }
    return TokenBidConnection;
}());
exports.TokenBidConnection = TokenBidConnection;
var TokenBidEdge = /** @class */ (function () {
    function TokenBidEdge() {
    }
    return TokenBidEdge;
}());
exports.TokenBidEdge = TokenBidEdge;
var TokenDeposit = /** @class */ (function () {
    function TokenDeposit() {
    }
    return TokenDeposit;
}());
exports.TokenDeposit = TokenDeposit;
var TokenFootballMetadata = /** @class */ (function () {
    function TokenFootballMetadata() {
    }
    return TokenFootballMetadata;
}());
exports.TokenFootballMetadata = TokenFootballMetadata;
var TokenOffer = /** @class */ (function () {
    function TokenOffer() {
    }
    return TokenOffer;
}());
exports.TokenOffer = TokenOffer;
var TokenOfferConnection = /** @class */ (function () {
    function TokenOfferConnection() {
    }
    return TokenOfferConnection;
}());
exports.TokenOfferConnection = TokenOfferConnection;
var TokenOfferEdge = /** @class */ (function () {
    function TokenOfferEdge() {
    }
    return TokenOfferEdge;
}());
exports.TokenOfferEdge = TokenOfferEdge;
var TokenOfferSide = /** @class */ (function () {
    function TokenOfferSide() {
    }
    return TokenOfferSide;
}());
exports.TokenOfferSide = TokenOfferSide;
var TokenOwner = /** @class */ (function () {
    function TokenOwner() {
    }
    return TokenOwner;
}());
exports.TokenOwner = TokenOwner;
var TokenRoot = /** @class */ (function () {
    function TokenRoot() {
    }
    return TokenRoot;
}());
exports.TokenRoot = TokenRoot;
var TokenWithdrawal = /** @class */ (function () {
    function TokenWithdrawal() {
    }
    return TokenWithdrawal;
}());
exports.TokenWithdrawal = TokenWithdrawal;
var TransferMarket = /** @class */ (function () {
    function TransferMarket() {
    }
    return TransferMarket;
}());
exports.TransferMarket = TransferMarket;
var TransferMarketBanner = /** @class */ (function () {
    function TransferMarketBanner() {
    }
    return TransferMarketBanner;
}());
exports.TransferMarketBanner = TransferMarketBanner;
var TransferRequest = /** @class */ (function () {
    function TransferRequest() {
    }
    return TransferRequest;
}());
exports.TransferRequest = TransferRequest;
var UnblockEmailPayload = /** @class */ (function () {
    function UnblockEmailPayload() {
    }
    return UnblockEmailPayload;
}());
exports.UnblockEmailPayload = UnblockEmailPayload;
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());
exports.User = User;
var UserAccountEntry = /** @class */ (function () {
    function UserAccountEntry() {
    }
    return UserAccountEntry;
}());
exports.UserAccountEntry = UserAccountEntry;
var UserAccountEntryConnection = /** @class */ (function () {
    function UserAccountEntryConnection() {
    }
    return UserAccountEntryConnection;
}());
exports.UserAccountEntryConnection = UserAccountEntryConnection;
var UserAccountEntryEdge = /** @class */ (function () {
    function UserAccountEntryEdge() {
    }
    return UserAccountEntryEdge;
}());
exports.UserAccountEntryEdge = UserAccountEntryEdge;
var UserAward = /** @class */ (function () {
    function UserAward() {
    }
    return UserAward;
}());
exports.UserAward = UserAward;
var UserAwardNotification = /** @class */ (function () {
    function UserAwardNotification() {
    }
    return UserAwardNotification;
}());
exports.UserAwardNotification = UserAwardNotification;
var UserConnection = /** @class */ (function () {
    function UserConnection() {
    }
    return UserConnection;
}());
exports.UserConnection = UserConnection;
var UserEdge = /** @class */ (function () {
    function UserEdge() {
    }
    return UserEdge;
}());
exports.UserEdge = UserEdge;
var UserError = /** @class */ (function () {
    function UserError() {
    }
    return UserError;
}());
exports.UserError = UserError;
var UserOwner = /** @class */ (function () {
    function UserOwner() {
    }
    return UserOwner;
}());
exports.UserOwner = UserOwner;
var UserOwnerWithRates = /** @class */ (function () {
    function UserOwnerWithRates() {
    }
    return UserOwnerWithRates;
}());
exports.UserOwnerWithRates = UserOwnerWithRates;
var UserProfile = /** @class */ (function () {
    function UserProfile() {
    }
    return UserProfile;
}());
exports.UserProfile = UserProfile;
var UserSettings = /** @class */ (function () {
    function UserSettings() {
    }
    return UserSettings;
}());
exports.UserSettings = UserSettings;
var UserSource = /** @class */ (function () {
    function UserSource() {
    }
    return UserSource;
}());
exports.UserSource = UserSource;
var UserSportProfile = /** @class */ (function () {
    function UserSportProfile() {
    }
    return UserSportProfile;
}());
exports.UserSportProfile = UserSportProfile;
var UserWithSubscriptionSlug = /** @class */ (function () {
    function UserWithSubscriptionSlug() {
    }
    return UserWithSubscriptionSlug;
}());
exports.UserWithSubscriptionSlug = UserWithSubscriptionSlug;
var UserWithSubscriptionSlugConnection = /** @class */ (function () {
    function UserWithSubscriptionSlugConnection() {
    }
    return UserWithSubscriptionSlugConnection;
}());
exports.UserWithSubscriptionSlugConnection = UserWithSubscriptionSlugConnection;
var UserWithSubscriptionSlugEdge = /** @class */ (function () {
    function UserWithSubscriptionSlugEdge() {
    }
    return UserWithSubscriptionSlugEdge;
}());
exports.UserWithSubscriptionSlugEdge = UserWithSubscriptionSlugEdge;
var Validity = /** @class */ (function () {
    function Validity() {
    }
    return Validity;
}());
exports.Validity = Validity;
var ValueBoundaries = /** @class */ (function () {
    function ValueBoundaries() {
    }
    return ValueBoundaries;
}());
exports.ValueBoundaries = ValueBoundaries;
var ValueOpenBoundaries = /** @class */ (function () {
    function ValueOpenBoundaries() {
    }
    return ValueOpenBoundaries;
}());
exports.ValueOpenBoundaries = ValueOpenBoundaries;
var Withdrawal = /** @class */ (function () {
    function Withdrawal() {
    }
    return Withdrawal;
}());
exports.Withdrawal = Withdrawal;
var WithdrawalWithRates = /** @class */ (function () {
    function WithdrawalWithRates() {
    }
    return WithdrawalWithRates;
}());
exports.WithdrawalWithRates = WithdrawalWithRates;
var AcceptOfferPayload = /** @class */ (function () {
    function AcceptOfferPayload() {
    }
    return AcceptOfferPayload;
}());
exports.AcceptOfferPayload = AcceptOfferPayload;
var AcceptTermsPayload = /** @class */ (function () {
    function AcceptTermsPayload() {
    }
    return AcceptTermsPayload;
}());
exports.AcceptTermsPayload = AcceptTermsPayload;
var AddCardsToDeckPayload = /** @class */ (function () {
    function AddCardsToDeckPayload() {
    }
    return AddCardsToDeckPayload;
}());
exports.AddCardsToDeckPayload = AddCardsToDeckPayload;
var AddEmailToListPayload = /** @class */ (function () {
    function AddEmailToListPayload() {
    }
    return AddEmailToListPayload;
}());
exports.AddEmailToListPayload = AddEmailToListPayload;
var AddFavouriteClubsPayload = /** @class */ (function () {
    function AddFavouriteClubsPayload() {
    }
    return AddFavouriteClubsPayload;
}());
exports.AddFavouriteClubsPayload = AddFavouriteClubsPayload;
var ApproveMigratorPayload = /** @class */ (function () {
    function ApproveMigratorPayload() {
    }
    return ApproveMigratorPayload;
}());
exports.ApproveMigratorPayload = ApproveMigratorPayload;
var BidPayload = /** @class */ (function () {
    function BidPayload() {
    }
    return BidPayload;
}());
exports.BidPayload = BidPayload;
var BlockUserOffersPayload = /** @class */ (function () {
    function BlockUserOffersPayload() {
    }
    return BlockUserOffersPayload;
}());
exports.BlockUserOffersPayload = BlockUserOffersPayload;
var BuySkinPayload = /** @class */ (function () {
    function BuySkinPayload() {
    }
    return BuySkinPayload;
}());
exports.BuySkinPayload = BuySkinPayload;
var CancelEthBankWithdrawalsPayload = /** @class */ (function () {
    function CancelEthBankWithdrawalsPayload() {
    }
    return CancelEthBankWithdrawalsPayload;
}());
exports.CancelEthBankWithdrawalsPayload = CancelEthBankWithdrawalsPayload;
var CancelFastWithdrawalPayload = /** @class */ (function () {
    function CancelFastWithdrawalPayload() {
    }
    return CancelFastWithdrawalPayload;
}());
exports.CancelFastWithdrawalPayload = CancelFastWithdrawalPayload;
var CancelOfferPayload = /** @class */ (function () {
    function CancelOfferPayload() {
    }
    return CancelOfferPayload;
}());
exports.CancelOfferPayload = CancelOfferPayload;
var CancelWithdrawalPayload = /** @class */ (function () {
    function CancelWithdrawalPayload() {
    }
    return CancelWithdrawalPayload;
}());
exports.CancelWithdrawalPayload = CancelWithdrawalPayload;
var CheckPhoneNumberVerificationCodePayload = /** @class */ (function () {
    function CheckPhoneNumberVerificationCodePayload() {
    }
    return CheckPhoneNumberVerificationCodePayload;
}());
exports.CheckPhoneNumberVerificationCodePayload = CheckPhoneNumberVerificationCodePayload;
var ClaimAwardPayload = /** @class */ (function () {
    function ClaimAwardPayload() {
    }
    return ClaimAwardPayload;
}());
exports.ClaimAwardPayload = ClaimAwardPayload;
var ClaimCardDropPayload = /** @class */ (function () {
    function ClaimCardDropPayload() {
    }
    return ClaimCardDropPayload;
}());
exports.ClaimCardDropPayload = ClaimCardDropPayload;
var ClaimReferralRewardPayload = /** @class */ (function () {
    function ClaimReferralRewardPayload() {
    }
    return ClaimReferralRewardPayload;
}());
exports.ClaimReferralRewardPayload = ClaimReferralRewardPayload;
var ClaimRewardPayload = /** @class */ (function () {
    function ClaimRewardPayload() {
    }
    return ClaimRewardPayload;
}());
exports.ClaimRewardPayload = ClaimRewardPayload;
var CompleteOnboardingTaskPayload = /** @class */ (function () {
    function CompleteOnboardingTaskPayload() {
    }
    return CompleteOnboardingTaskPayload;
}());
exports.CompleteOnboardingTaskPayload = CompleteOnboardingTaskPayload;
var ConfirmEmailPayload = /** @class */ (function () {
    function ConfirmEmailPayload() {
    }
    return ConfirmEmailPayload;
}());
exports.ConfirmEmailPayload = ConfirmEmailPayload;
var ConfirmSo5LineupsPayload = /** @class */ (function () {
    function ConfirmSo5LineupsPayload() {
    }
    return ConfirmSo5LineupsPayload;
}());
exports.ConfirmSo5LineupsPayload = ConfirmSo5LineupsPayload;
var CreateCardWithdrawalPayload = /** @class */ (function () {
    function CreateCardWithdrawalPayload() {
    }
    return CreateCardWithdrawalPayload;
}());
exports.CreateCardWithdrawalPayload = CreateCardWithdrawalPayload;
var CreateCustomDeckPayload = /** @class */ (function () {
    function CreateCustomDeckPayload() {
    }
    return CreateCustomDeckPayload;
}());
exports.CreateCustomDeckPayload = CreateCustomDeckPayload;
var CreateDirectOfferPayload = /** @class */ (function () {
    function CreateDirectOfferPayload() {
    }
    return CreateDirectOfferPayload;
}());
exports.CreateDirectOfferPayload = CreateDirectOfferPayload;
var CreateEthBankWithdrawalIntentPayload = /** @class */ (function () {
    function CreateEthBankWithdrawalIntentPayload() {
    }
    return CreateEthBankWithdrawalIntentPayload;
}());
exports.CreateEthBankWithdrawalIntentPayload = CreateEthBankWithdrawalIntentPayload;
var CreateEthMigrationPayload = /** @class */ (function () {
    function CreateEthMigrationPayload() {
    }
    return CreateEthMigrationPayload;
}());
exports.CreateEthMigrationPayload = CreateEthMigrationPayload;
var CreateEthVaultPayload = /** @class */ (function () {
    function CreateEthVaultPayload() {
    }
    return CreateEthVaultPayload;
}());
exports.CreateEthVaultPayload = CreateEthVaultPayload;
var CreateFastWithdrawalPayload = /** @class */ (function () {
    function CreateFastWithdrawalPayload() {
    }
    return CreateFastWithdrawalPayload;
}());
exports.CreateFastWithdrawalPayload = CreateFastWithdrawalPayload;
var CreateOrUpdateSingleBuyOfferMinPricePayload = /** @class */ (function () {
    function CreateOrUpdateSingleBuyOfferMinPricePayload() {
    }
    return CreateOrUpdateSingleBuyOfferMinPricePayload;
}());
exports.CreateOrUpdateSingleBuyOfferMinPricePayload = CreateOrUpdateSingleBuyOfferMinPricePayload;
var CreateOrUpdateSo5LineupPayload = /** @class */ (function () {
    function CreateOrUpdateSo5LineupPayload() {
    }
    return CreateOrUpdateSo5LineupPayload;
}());
exports.CreateOrUpdateSo5LineupPayload = CreateOrUpdateSo5LineupPayload;
var CreatePaymentIntentPayload = /** @class */ (function () {
    function CreatePaymentIntentPayload() {
    }
    return CreatePaymentIntentPayload;
}());
exports.CreatePaymentIntentPayload = CreatePaymentIntentPayload;
var CreateSingleBuyOfferPayload = /** @class */ (function () {
    function CreateSingleBuyOfferPayload() {
    }
    return CreateSingleBuyOfferPayload;
}());
exports.CreateSingleBuyOfferPayload = CreateSingleBuyOfferPayload;
var CreateSingleSaleOfferPayload = /** @class */ (function () {
    function CreateSingleSaleOfferPayload() {
    }
    return CreateSingleSaleOfferPayload;
}());
exports.CreateSingleSaleOfferPayload = CreateSingleSaleOfferPayload;
var CreateSubscriptionPayload = /** @class */ (function () {
    function CreateSubscriptionPayload() {
    }
    return CreateSubscriptionPayload;
}());
exports.CreateSubscriptionPayload = CreateSubscriptionPayload;
var CreateWithdrawalPayload = /** @class */ (function () {
    function CreateWithdrawalPayload() {
    }
    return CreateWithdrawalPayload;
}());
exports.CreateWithdrawalPayload = CreateWithdrawalPayload;
var DeleteCustomDeckPayload = /** @class */ (function () {
    function DeleteCustomDeckPayload() {
    }
    return DeleteCustomDeckPayload;
}());
exports.DeleteCustomDeckPayload = DeleteCustomDeckPayload;
var DeleteSo5LineupPayload = /** @class */ (function () {
    function DeleteSo5LineupPayload() {
    }
    return DeleteSo5LineupPayload;
}());
exports.DeleteSo5LineupPayload = DeleteSo5LineupPayload;
var DeleteSubscriptionPayload = /** @class */ (function () {
    function DeleteSubscriptionPayload() {
    }
    return DeleteSubscriptionPayload;
}());
exports.DeleteSubscriptionPayload = DeleteSubscriptionPayload;
var DeleteUserSo5LineupsPayload = /** @class */ (function () {
    function DeleteUserSo5LineupsPayload() {
    }
    return DeleteUserSo5LineupsPayload;
}());
exports.DeleteUserSo5LineupsPayload = DeleteUserSo5LineupsPayload;
var DestroyAccountPayload = /** @class */ (function () {
    function DestroyAccountPayload() {
    }
    return DestroyAccountPayload;
}());
exports.DestroyAccountPayload = DestroyAccountPayload;
var DestroyReferralPayload = /** @class */ (function () {
    function DestroyReferralPayload() {
    }
    return DestroyReferralPayload;
}());
exports.DestroyReferralPayload = DestroyReferralPayload;
var DetachPaymentMethodPayload = /** @class */ (function () {
    function DetachPaymentMethodPayload() {
    }
    return DetachPaymentMethodPayload;
}());
exports.DetachPaymentMethodPayload = DetachPaymentMethodPayload;
var Disable2faPayload = /** @class */ (function () {
    function Disable2faPayload() {
    }
    return Disable2faPayload;
}());
exports.Disable2faPayload = Disable2faPayload;
var DisconnectOmniauthProviderPayload = /** @class */ (function () {
    function DisconnectOmniauthProviderPayload() {
    }
    return DisconnectOmniauthProviderPayload;
}());
exports.DisconnectOmniauthProviderPayload = DisconnectOmniauthProviderPayload;
var EditCardInDeckPayload = /** @class */ (function () {
    function EditCardInDeckPayload() {
    }
    return EditCardInDeckPayload;
}());
exports.EditCardInDeckPayload = EditCardInDeckPayload;
var EditCustomDeckPayload = /** @class */ (function () {
    function EditCustomDeckPayload() {
    }
    return EditCustomDeckPayload;
}());
exports.EditCustomDeckPayload = EditCustomDeckPayload;
var Enable2faPayload = /** @class */ (function () {
    function Enable2faPayload() {
    }
    return Enable2faPayload;
}());
exports.Enable2faPayload = Enable2faPayload;
var GenerateActionRewardPickablePlayersPayload = /** @class */ (function () {
    function GenerateActionRewardPickablePlayersPayload() {
    }
    return GenerateActionRewardPickablePlayersPayload;
}());
exports.GenerateActionRewardPickablePlayersPayload = GenerateActionRewardPickablePlayersPayload;
var GenerateOtpBackupCodesPayload = /** @class */ (function () {
    function GenerateOtpBackupCodesPayload() {
    }
    return GenerateOtpBackupCodesPayload;
}());
exports.GenerateOtpBackupCodesPayload = GenerateOtpBackupCodesPayload;
var MarkNotificationsAsReadPayload = /** @class */ (function () {
    function MarkNotificationsAsReadPayload() {
    }
    return MarkNotificationsAsReadPayload;
}());
exports.MarkNotificationsAsReadPayload = MarkNotificationsAsReadPayload;
var MintCardsForUsersPayload = /** @class */ (function () {
    function MintCardsForUsersPayload() {
    }
    return MintCardsForUsersPayload;
}());
exports.MintCardsForUsersPayload = MintCardsForUsersPayload;
var PickActionRewardPlayersPayload = /** @class */ (function () {
    function PickActionRewardPlayersPayload() {
    }
    return PickActionRewardPlayersPayload;
}());
exports.PickActionRewardPlayersPayload = PickActionRewardPlayersPayload;
var PrepareAcceptOfferPayload = /** @class */ (function () {
    function PrepareAcceptOfferPayload() {
    }
    return PrepareAcceptOfferPayload;
}());
exports.PrepareAcceptOfferPayload = PrepareAcceptOfferPayload;
var PrepareBidPayload = /** @class */ (function () {
    function PrepareBidPayload() {
    }
    return PrepareBidPayload;
}());
exports.PrepareBidPayload = PrepareBidPayload;
var PrepareCardWithdrawalPayload = /** @class */ (function () {
    function PrepareCardWithdrawalPayload() {
    }
    return PrepareCardWithdrawalPayload;
}());
exports.PrepareCardWithdrawalPayload = PrepareCardWithdrawalPayload;
var PrepareEthDepositPayload = /** @class */ (function () {
    function PrepareEthDepositPayload() {
    }
    return PrepareEthDepositPayload;
}());
exports.PrepareEthDepositPayload = PrepareEthDepositPayload;
var PrepareOfferPayload = /** @class */ (function () {
    function PrepareOfferPayload() {
    }
    return PrepareOfferPayload;
}());
exports.PrepareOfferPayload = PrepareOfferPayload;
var PrepareTokenDepositPayload = /** @class */ (function () {
    function PrepareTokenDepositPayload() {
    }
    return PrepareTokenDepositPayload;
}());
exports.PrepareTokenDepositPayload = PrepareTokenDepositPayload;
var RejectOfferPayload = /** @class */ (function () {
    function RejectOfferPayload() {
    }
    return RejectOfferPayload;
}());
exports.RejectOfferPayload = RejectOfferPayload;
var RelayCallPayload = /** @class */ (function () {
    function RelayCallPayload() {
    }
    return RelayCallPayload;
}());
exports.RelayCallPayload = RelayCallPayload;
var RemoveCardFromDeckPayload = /** @class */ (function () {
    function RemoveCardFromDeckPayload() {
    }
    return RemoveCardFromDeckPayload;
}());
exports.RemoveCardFromDeckPayload = RemoveCardFromDeckPayload;
var RequestReceiptPayload = /** @class */ (function () {
    function RequestReceiptPayload() {
    }
    return RequestReceiptPayload;
}());
exports.RequestReceiptPayload = RequestReceiptPayload;
var ResetPrivateKeyPayload = /** @class */ (function () {
    function ResetPrivateKeyPayload() {
    }
    return ResetPrivateKeyPayload;
}());
exports.ResetPrivateKeyPayload = ResetPrivateKeyPayload;
var ResumeOnboardingPayload = /** @class */ (function () {
    function ResumeOnboardingPayload() {
    }
    return ResumeOnboardingPayload;
}());
exports.ResumeOnboardingPayload = ResumeOnboardingPayload;
var SetDeviceTokenPayload = /** @class */ (function () {
    function SetDeviceTokenPayload() {
    }
    return SetDeviceTokenPayload;
}());
exports.SetDeviceTokenPayload = SetDeviceTokenPayload;
var SignInPayload = /** @class */ (function () {
    function SignInPayload() {
    }
    return SignInPayload;
}());
exports.SignInPayload = SignInPayload;
var SignUpPayload = /** @class */ (function () {
    function SignUpPayload() {
    }
    return SignUpPayload;
}());
exports.SignUpPayload = SignUpPayload;
var SkipOnboardingPayload = /** @class */ (function () {
    function SkipOnboardingPayload() {
    }
    return SkipOnboardingPayload;
}());
exports.SkipOnboardingPayload = SkipOnboardingPayload;
var UnblockUserOffersPayload = /** @class */ (function () {
    function UnblockUserOffersPayload() {
    }
    return UnblockUserOffersPayload;
}());
exports.UnblockUserOffersPayload = UnblockUserOffersPayload;
var UpdateSubscriptionPayload = /** @class */ (function () {
    function UpdateSubscriptionPayload() {
    }
    return UpdateSubscriptionPayload;
}());
exports.UpdateSubscriptionPayload = UpdateSubscriptionPayload;
var UpdateUserProfilePayload = /** @class */ (function () {
    function UpdateUserProfilePayload() {
    }
    return UpdateUserProfilePayload;
}());
exports.UpdateUserProfilePayload = UpdateUserProfilePayload;
var UpdateUserSettingsPayload = /** @class */ (function () {
    function UpdateUserSettingsPayload() {
    }
    return UpdateUserSettingsPayload;
}());
exports.UpdateUserSettingsPayload = UpdateUserSettingsPayload;
var VerifyPhoneNumberPayload = /** @class */ (function () {
    function VerifyPhoneNumberPayload() {
    }
    return VerifyPhoneNumberPayload;
}());
exports.VerifyPhoneNumberPayload = VerifyPhoneNumberPayload;
