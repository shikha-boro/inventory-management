import { getInventory, updateInventory } from '../../product';
import React from 'react';
import styles from './InventoryViewerStyle.module.css';
class InventoryViewer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      inventory: getInventory(),


    }

  }

  updateProduct(cat, subCat, product, mode) {
    console.log(cat, subCat, product, mode)
    for (let eachCat of this.state.inventory) {
      if (eachCat.category === cat) {
        for (let eachSubCat of eachCat.subCategories) {
          if (eachSubCat.subCategory === subCat) {
            for (let eachProduct of eachSubCat.products) {
              if (eachProduct.skuId == product.skuId) {
                if (mode == 'edit') {
                  eachProduct.edit = true;
                  console.log(eachProduct)
                } else {
                  eachProduct.edit = false;
                  eachProduct = product;
                  updateInventory(this.state.inventory);


                }
              }
            }
          }
        }
      }
    }
    this.setState({ inventory: this.state.inventory });
  }



  render() {
    let allTables = <></>
    allTables = this.state.inventory.map(eachCat => {
      return (
        <div className={styles.tableContainer}>

          <table className={styles.tableContents}>
            <thead>
              <tr>
                <th>
                  ITEM NAME
                </th>
                <th>COLOR</th>
                <th>OPTIONS</th>
                <th>SKUID</th>
                <th>STOCKS</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              <tr className={eachCat.hide == true ? styles.hideAll : styles.showAll}>
                <td colSpan="6" >
                  <div className={styles.categoryHeader}>
                    {eachCat.category}
                    <button onClick={_ => {
                      eachCat.hide = !eachCat.hide;
                      this.setState({ inventory: this.state.inventory })
                    }}>
                      {eachCat.hide == true ? "➕" : "➖"}
                    </button>

                  </div>

                </td>
              </tr>
              {eachCat.subCategories.map(subCat => {
                return <>
                  <tr>
                    <td colSpan="6" className={styles.subCategoryHeader}> {subCat.subCategory}</td>
                  </tr>
                  {subCat.products.map(product => {
                    return (<><tr className={styles.subCategoryRow}>
                      <td>{product.name}</td>
                      <td>{product.color}</td>
                      <td>{product.options}</td>
                      <td>{product.skuId}</td>

                      {product.edit === true && <><td className={styles.stocks}>
                        <input type="number" placeholder="Enter quantity value" value={product.stocks.quantity} className={styles.quantity} onChange={evt => {
                          console.log(evt.target.value);
                          product.stocks.quantity = evt.target.value;
                          this.setState({ inventory: this.state.inventory })
                            ;
                        }}></input>
                        <input type="checkbox" checked={product.stocks.unlimited} onChange={evt => {
                          console.log(evt.target.checked);
                          product.stocks.unlimited = evt.target.checked;
                          this.setState({ inventory: this.state.inventory });
                        }} /> Unlimited
                        {!product.stocks.unlimited && !product.stocks.quantity && <><p className={styles.errorMessage}>  Quantity cannot be blank or unlimited should be filled </p></>}
                      </td>


                        <td><button className={styles.saveButton} disabled={!product.stocks.unlimited && !product.stocks.quantity} onClick={_ => { this.updateProduct(eachCat.category, subCat.subCategory, product, 'save') }}>Save</button></td>
                      </>}

                      {product.edit != true && <> <td className={styles.stocks}>
                        {product.stocks.unlimited == true ? 'unlimited' : product.stocks.quantity}
                      </td>
                        <td><button className={styles.editButton} onClick={_ => { this.updateProduct(eachCat.category, subCat.subCategory, product, 'edit') }}>✏️</button></td>
                      </>}

                    </tr>

                    </>)
                  })}
                </>

              })}

            </tbody>
          </table>
        </div>
      )

    })



    let tableContainer = <></>
    tableContainer = <div>
      <div>Inventory Builder</div>
      <div>
        {allTables}
      </div>
    </div>


    return tableContainer;

  }

}
export default InventoryViewer;