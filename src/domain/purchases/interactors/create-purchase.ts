type PurchaseProducts = {
  productId: string;
  quantity: number;
};

type CreatePurchaseInput = {
  customerId: string;
  products: Array<PurchaseProducts>;
};

interface ICreatePurchaseInteractor<Response = void> {
  handle(props: CreatePurchaseInput): Promise<Response>;
}

export { ICreatePurchaseInteractor, CreatePurchaseInput };
