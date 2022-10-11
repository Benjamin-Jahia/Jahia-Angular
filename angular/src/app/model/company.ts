export class Company {
    title!:string;
    uuid!:String;
    description!:Description;
    thumbnail!:Thumbnail;
    logo!:Thumbnail;
    industry!:Industry;
    headline!:Description;
}

export class Typed{
    _typename!: String;
}

export class Description extends Typed{
    value!: String;
}

export class Thumbnail extends Typed{
    url!: NodeUrl;
}

export class NodeUrl extends Typed{
    path!: String;
}

export class Industry extends Typed{
    name!: NodeName;
}

export class NodeName extends Typed{
    name!: String;
}