export class Company {
    title!:String;
    uuid!:String;
    description!:Description;
    thumbnail!:Thumbnail;
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