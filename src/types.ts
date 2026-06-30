export interface CardData {
  id: string;
  tag?: string;
  title: string;
  description: string;
  cardNumber?: string;
}

export interface LectureItem {
  id: string;
  title: string;
  isHighlight?: boolean;
}
