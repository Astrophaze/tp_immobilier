export interface OffreModel {
    id: number,
    libelle: string,
    photoUrl: string,
    surface: number,
    ville: string,
    prix: number,
    isAVendre: boolean,
    isALouer: boolean,
    id_type: number
}