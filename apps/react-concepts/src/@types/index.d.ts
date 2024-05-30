type User = {
    id: number;
    name: string;
    email : string,
    favourite ? : boolean;
}


type UpdateUser = Omit<User,'id'| 'favourite'>