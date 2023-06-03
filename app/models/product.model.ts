export interface Product{
    "category": string;
    cardImg: any;
    map(arg0: (card: any) => JSX.Element): import("react").ReactNode;
    "id": string;
    "title": string;
    "price": string;
    "description": string;
    "type": string;
    "image": any;
    "rating": string;
    "subTitle": string;
    "backgroundImg": any;
    "titleImg": any;
}