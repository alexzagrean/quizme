export class PostEvent {
    constructor(
        public name : string,
        public status: string,
        public noEasy : number,
        public noMedium : number,
        public noDifficult : number,
        public noPersonal : number,
        public noProffesional : number,
        public date : number
    ) { }
}