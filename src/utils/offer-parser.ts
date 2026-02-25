import { HousingType } from '../types/housing-type';
import { Offer } from '../types/offer';
import { OfferDto } from '../types/dto/offer-dto';

function parseHousingType(value: string): HousingType {
  if (Object.values(HousingType).includes(value as HousingType)) {
    return value as HousingType;
  }
  throw new Error(`Invalid housing type: "${value}"`);
}

export function parseOffer(dto: OfferDto): Offer {
  return {
    ...dto,
    type: parseHousingType(dto.type),
    description: dto.description.join(' '),
  };
}

export function parseOffers(dto: OfferDto[]): Offer[] {
  return dto.map(parseOffer);
}
