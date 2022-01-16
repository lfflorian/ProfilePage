export class User {
    person: Person;
    strengths: Strengths[]
}

class Person {
    name: string;
    professionalHeadline: string;
    pictureThumbnail: string;
}

class Strengths {
    name: string;
    proficiency: string;
}