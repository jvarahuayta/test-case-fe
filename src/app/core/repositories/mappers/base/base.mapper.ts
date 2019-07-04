export abstract class BaseMapper<T>{

    protected abstract clazz: new (partial?: Partial<T>) => T;

    mapToBe( entity: T ): any{
        return {
            ...entity
        };
    }

    mapFromBe( beEntity: any ): T{
        return new this.clazz(beEntity);
    }

}