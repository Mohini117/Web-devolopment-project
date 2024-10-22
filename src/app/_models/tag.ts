export class Tag{
    static readonly ANGULAR =  new Tag('Angular','red');
    static readonly TYPESCRIPT =  new Tag('Typescript','darkred');
    static readonly PYTHON =  new Tag('Python','pink');
    static readonly CSHARP =  new Tag('Csharp','green');
    static readonly JAVA =  new Tag('Java','orange');
    static readonly NODEJS =  new Tag('Nodejs','brown');
    static readonly ASPNET =  new Tag('Aspnet','purple');
    static readonly JAVASCRIPT =  new Tag('Javascript','orange');
    static readonly REACT =  new Tag('React','blue');
    static readonly DJANGO =  new Tag('Django','green');


    private constructor(private readonly key:string , public readonly color:string){

    }
    toString(): string{
        return this.key
    }
}