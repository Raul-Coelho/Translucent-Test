export interface Game {
    id: number,
    title: string,
    year: Date,
    console: string,
    completed: boolean,
    dateOfCompletion?: Date,
    personalNotes: string,
}
