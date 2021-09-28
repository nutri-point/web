import { IconType } from 'react-icons/lib';
import {
  RiShieldUserFill as MemberIcon,
  RiAccountCircleLine as GuestIcon,
} from 'react-icons/ri';

interface ITab {
  readonly value: TabsEnum;
  readonly label: string;
  readonly icon: IconType;
}

export enum TabsEnum {
  Members = 'members',
  Guests = 'guests',
}

export const TabValues: ITab[] = [
  { value: TabsEnum.Members, label: 'Members', icon: MemberIcon },
  { value: TabsEnum.Guests, label: 'Guests', icon: GuestIcon },
];
