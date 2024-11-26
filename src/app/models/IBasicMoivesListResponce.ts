import {MoviesListResult} from "@/app/models/MoviesListResult";

export interface IBasicMoivesListResponce {
    page: number,
    results: MoviesListResult[],
    total_pages: number,
    total_results: number
}
