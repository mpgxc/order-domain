type ArrayProductLeft = Array<{
  productId: string;
  quantity: number;
}>;

type ArrayProductRight = Array<{
  id: string;
  name: string;
  price: number;
}>;

class PurchaseInputMapper {
  static execute(arrayLeft: ArrayProductLeft, arrayRight: ArrayProductRight) {
    return arrayLeft.map(({ productId, quantity }) => ({
      ...arrayRight.find(({ id }) => id === productId),
      quantity,
      productId,
    }));
  }
}

export { PurchaseInputMapper };
