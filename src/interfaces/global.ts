import { ReactElement } from "react";

export interface ICardCategory {
  icon: ReactElement;
  name: string;
  path: string;
}

export interface ICardPraySchedule {
  title: string;
  icon: ReactElement;
  time: string;
}