import { Photo } from '../_model/Photo';
import { Stage } from '../_model/Stage';

export interface Tour {
    id: number;
    tourName: string;
    description: string;
    tourStatus: boolean;
    created: Date;
    photoUrl: string;
    photos?: Photo[];
    stages?: Stage[];
}
