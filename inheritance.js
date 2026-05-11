/*
    Challenge. 

    Disebuah supermarket terdapat banyak sekali product dengan berbagai category, seperti snack, fashion, dan electronic.
    01 - Tentukan entitas/property apa saja yang terdapat di tiap-tiap category product 
    FOOD    : id, name, price, stock, expired, brand, weight, ingridients, category
    FASHION : id, name, price, stock, size, category, brand, material
    ELECTRONIC  : id, name, price, stock, waranty, brand, category 

    02 - Buatkan class untuk tiap category product
*/
class Product {
  id = '';
  name = '';
  price = 0;
  stock = 0;
  category = '';

  constructor(id, name, price, stock, category) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.stock = stock;
    this.category = category;
  }
}

class Food extends Product {
  expired = '';
  brand = '';
  weigt = 0;
  ingridients = '';

  constructor(
    id,
    name,
    price,
    stock,
    category,
    expired,
    brand,
    weight,
    ingridients,
  ) {
    super(id, name, price, stock, category);
    this.expired = expired;
    this.brand = brand;
    this.weigt = weight;
    this.ingridients = ingridients;
  }
}

class Fashion extends Product {
  brand = '';
  material = '';
  size = '';

  constructor(id, name, price, stock, category, brand, material, size) {
    super(id, name, price, stock, category);
    this.brand = brand;
    this.material = material;
    this.size = size;
  }
}

const fashion01 = new Fashion(101, 'Kaos', 150000, 1000, 'ATASAN', 'POLO', 'Cotton', 'XL');