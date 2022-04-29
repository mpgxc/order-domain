type CreateProductInput = {
  name: string;
  price: number;
};

interface ICreateProductInteractor<Response = void> {
  handle(props: CreateProductInput): Promise<Response>;
}

export { ICreateProductInteractor, CreateProductInput };
