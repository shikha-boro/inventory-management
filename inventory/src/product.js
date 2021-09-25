export default [
  {
    category: "vegetables and Fruits",
    subCategories: [
      {
        subCategory: 'vegetables',
        products: [
          {
            name: "Cabbage",
            color: "green",
            options: "large",
            skuId: "sk1",
            stocks: {
              quantity: 20,
              unlimited: false,
            }
          },
          {
            name: "Cabbage",
            color: "green",
            options: "large",
            skuId: "sk1",
            stocks: {
              quantity: 20,
              unlimited: false,
            },
          },
        ]
      },
      {
        subCategory: 'fruits',
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
            skuId: "sk2",
            stocks: {
              quantity: 20,
              unlimited: false,
            },
            actions: "",
            subCategory: "bread"
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
