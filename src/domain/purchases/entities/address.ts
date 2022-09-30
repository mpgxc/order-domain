import { ObjectValue } from '../../commons/object-value';

type AddressProps = {
  city: string;
  zipCode: string;
  number: number;
  street: string;
};

export class Address extends ObjectValue<AddressProps> {
  private constructor(props: AddressProps) {
    super(props);
  }

  get value(): string {
    return `${this._props.street} - 
            ${this._props.number},
            ${this._props.city} -
            ${this._props.zipCode}`;
  }

  // TODO: Implementar a função de validação dos campos do endereço
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  static validate() {}

  static build(props: AddressProps): Address {
    return new this(props);
  }
}
