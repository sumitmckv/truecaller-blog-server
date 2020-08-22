export interface RelatedPostResponse {
    total: number;
    max_score: number;
    hits: Hit[];
}

export interface Hit {
    _score: number;
    fields: Field;
}

export interface Field {
    post_id: number;
    blog_id: number;
}