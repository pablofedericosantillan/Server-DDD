export interface DomainEntityStatic<Entity, Args> {
  new (args: Args): Entity;
  validate(args: Args): void;
}
