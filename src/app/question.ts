export class Question {
    constructor(
        public type : string,
        public choices: string[],
        public answer : string
    ) { }
}