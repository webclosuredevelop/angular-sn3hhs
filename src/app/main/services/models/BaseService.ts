export interface BaseService {
    [key: string]: Data;
}

export interface Data {
    id: number;
    sequenceNumber: number;
    payload: any;
}