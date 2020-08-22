export const PORT = 8181;
const URL = "https://public-api.wordpress.com/rest/v1.1/sites/";
const SITE_ID = "107403796";
export const BASE_URL = URL + SITE_ID;
export const POST_FIELDS = "ID,slug,title,post_thumbnail,excerpt,date,author,categories";