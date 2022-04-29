type CreateCustomerInput = {
  name: string;
};

interface ICreateCustomerInteractor<Response = void> {
  handle(props: CreateCustomerInput): Promise<Response>;
}

export { ICreateCustomerInteractor, CreateCustomerInput };
