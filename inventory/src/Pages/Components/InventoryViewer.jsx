import inventory from '../../product';
import React from 'react';
import styles from './InventoryViewerStyle.module.css';
import product from '../../product';

class InventoryViewer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      inventory: inventory
    }

  }



  render() {
    let allTables = <></>
    allTables = this.state.inventory.map(eachCat => {
      return (
        <div className={styles.tableContainer}>

          <table>
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
              <tr>
                <td colSpan="6" className={styles.categoryHeader}> {eachCat.category}</td>
              </tr>
              {eachCat.subCategories.map(subCat => {
                return <>
                  <tr>
                    <td colSpan="6" className={styles.subCategoryHeader}> {subCat.subCategory}</td>
                  </tr>
                  {subCat.products.map(product => {
                    return (<tr>
                      <td>{product.name}</td>
                      <td>{product.color}</td>
                      <td>{product.options}</td>
                      <td>{product.skuId}</td>
                      <td>{product.stocks.quantity}</td>
                      <td>{product.stocks.unlimited == true ? 'unlimited' : product.stocks.quantity}</td>
                    </tr>)
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