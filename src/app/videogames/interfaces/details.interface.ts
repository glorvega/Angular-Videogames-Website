
export interface SteamVideogameDetails {
    imgUrl:      string;
    title:       string;
    developer:   Developer;
    publisher:   Developer;
    released:    string;
    description: string;
    tags:        Tag[];
    allReviews:  AllReviews;
    price:       string;
    DLCs:        any[];
}

export interface AllReviews {
    summary:     string;
    reviewCount: string;
    ratingValue: string;
    bestRating:  string;
    worstRating: string;
}

export interface Developer {
    link: string;
    name: string;
}

export interface Tag {
    url:  string;
    name: string;
}
