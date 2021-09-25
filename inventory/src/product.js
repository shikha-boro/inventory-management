export function getInventory() {

  let inventory = localStorage.getItem("inventory");
  if (inventory) {
    return JSON.parse(inventory);

  }
  else {
    return staticInventory;
  }
}

export function updateInventory(inventory) {
  localStorage.setItem("inventory", JSON.stringify(inventory));
}


const staticInventory = [
  {
    category: "Vegetables and Fruits",
    subCategories: [
      {
        subCategory: 'Vegetables',
        products: [
          {
            name: "Cabbage",
            color: "Green",
            options: "large",
            skuId: "sk1",
            stocks: {
              quantity: 20,
              unlimited: false,
            }
          },
          {
            name: "Tomato",
            color: "Red",
            options: "large",
            skuId: "sk2",
            stocks: {
              quantity: 20,
              unlimited: false,
            },
          },
        ]
      },
      {
        subCategory: 'Fruits',
        products: [
          {
            name: "Apple",
            color: "red",
            options: "midium",
            skuId: "sk4",
            stocks: {
              quantity: 30,
              unlimited: false,
            }
          },
        ]
      }],
  },
  {
    category: "Breads and Breakfast",
    subCategories: [
      {
        subCategory: 'Breads',
        products: [
          {
            name: "Brown Bread",
            color: "Brown",
            options: "small",
            skuId: "sk3",
            stocks: {
              quantity: 20,
              unlimited: false,
            },


          },

        ]

      },
      {
        subCategory: 'Breakfast',
        products: [

          {
            name: "Cornflex",
            color: "Brown",
            options: "large",
            skuId: "sk6",
            stocks: {
              quantity: 40,
              unlimited: true,
            },


          }
        ]

      }
    ]
  }
]
