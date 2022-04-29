abstract class ObjectValue<T = unknown> {
  protected readonly _props: T;

  constructor(props: T) {
    this._props = props;
  }
}

export { ObjectValue };
