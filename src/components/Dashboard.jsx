import React from 'react'
import Form from 'react-bootstrap/Form'
import Table from 'react-bootstrap/Table'
import { Link } from 'react-router-dom'
function Dashboard() {
  return<>
  <Form className='container py-4 px-4 dashboard'>
        <div className='container d-flex flex-row justify-content-between'>
            <div><input type="search" placeholder="Search" className="form-control search"/></div>
            <div><i className="fa-regular fa-bell" style={{color: "#989ba0"}}></i></div>
        </div>
        <div className='pt-4 px-3'>
            <div>Sales Information<button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#nav">
            <div className="navbar-toggler-icon"/>
            </button></div>
            <div className='d-flex flex-row flex-lg-nowrap flex-wrap justify-content-between font collapse navbar-collapse' id='nav'>
                <div>
                    <p>Customer</p>
                    <input type="text" placeholder='Enter Customer Name' className="form-control"/>
                </div>
                <div>
                    <p>Invoice Id</p>
                    <input type="text" placeholder='Enter Invoice Id' className="form-control"/>
                </div>
                <div>
                    <p>Start Date</p>
                    <input type="text" placeholder='Start Date' className="form-control"/>
                </div>
                <div>
                    <p>End Date</p>
                    <input type="text" placeholder='End Date' className="form-control"/>
                </div>
            </div>
        </div>
        <div className='px-3'>
      <Table responsive hover className='table font' >
      <thead className='thead'>
        <tr>
          <th className='py-3'><input type="checkbox" /></th>
          <th className='py-3'>Invoice ID</th>
          <th className='py-3'>Date</th>
          <th className='py-3'>Customer</th>
          <th className='py-3'>Payable Amount</th>
          <th className='py-3'>Paid Amount</th>
          <th className='py-3'>Due</th>
        </tr>
      </thead>
      <tbody>
      <tr>
          <td className='py-3'><input type="checkbox" /></td>
          <td className='py-3'><Link to="/dashboard">#AHGA1</Link></td>
          <td className='py-3'>25/09/2023</td>
          <td className='py-3'>Vignesh</td>
          <td className='py-3'>$100</td>
          <td className='py-3'>$0</td>
          <td className='py-3'>$100</td>
        </tr>
        <tr>
          <td className='py-3'><input type="checkbox" /></td>
          <td className='py-3'><Link to="/dashboard">#AHGA2</Link></td>
          <td className='py-3'>25/09/2023</td>
          <td className='py-3'>Vignesh</td>
          <td className='py-3'>$100</td>
          <td className='py-3'>$0</td>
          <td className='py-3'>$100</td>
        </tr>
        <tr>
          <td className='py-3'><input type="checkbox" /></td>
          <td className='py-3'><Link to="/dashboard">#AHGA3</Link></td>
          <td className='py-3'>25/09/2023</td>
          <td className='py-3'>Vignesh</td>
          <td className='py-3'>$100</td>
          <td className='py-3'>$0</td>
          <td className='py-3'>$100</td>
        </tr>
        <tr>
          <td className='py-3'><input type="checkbox" /></td>
          <td className='py-3'><Link to="/dashboard">#AHGA4</Link></td>
          <td className='py-3'>25/09/2023</td>
          <td className='py-3'>Vignesh</td>
          <td className='py-3'>$100</td>
          <td className='py-3'>$0</td>
          <td className='py-3'>$100</td>
        </tr>
        <tr>
          <td className='py-3'><input type="checkbox" /></td>
          <td className='py-3'><Link to="/dashboard">#AHGA5</Link></td>
          <td className='py-3'>25/09/2023</td>
          <td className='py-3'>Vignesh</td>
          <td className='py-3'>$100</td>
          <td className='py-3'>$0</td>
          <td className='py-3'>$100</td>
        </tr>
        <tr>
          <td className='py-3'><input type="checkbox" /></td>
          <td className='py-3'><Link to="/dashboard">#AHGA6</Link></td>
          <td className='py-3'>25/09/2023</td>
          <td className='py-3'>Vignesh</td>
          <td className='py-3'>$100</td>
          <td className='py-3'>$0</td>
          <td className='py-3'>$100</td>
        </tr>
        <tr>
          <td className='py-3'><input type="checkbox" /></td>
          <td className='py-3'><Link to="/dashboard">#AHGA7</Link></td>
          <td className='py-3'>25/09/2023</td>
          <td className='py-3'>Vignesh</td>
          <td className='py-3'>$100</td>
          <td className='py-3'>$0</td>
          <td className='py-3'>$100</td>
        </tr>
        <tr>
          <td className='py-3'><input type="checkbox" /></td>
          <td className='py-3'><Link to="/dashboard">#AHGA8</Link></td>
          <td className='py-3'>25/09/2023</td>
          <td className='py-3'>Vignesh</td>
          <td className='py-3'>$100</td>
          <td className='py-3'>$0</td>
          <td className='py-3'>$100</td>
        </tr>
        <tr>
          <td className='py-3'><input type="checkbox" /></td>
          <td className='py-3'><Link to="/dashboard">#AHGA9</Link></td>
          <td className='py-3'>25/09/2023</td>
          <td className='py-3'>Vignesh</td>
          <td className='py-3'>$100</td>
          <td className='py-3'>$0</td>
          <td className='py-3'>$100</td>
        </tr>
      </tbody>
    </Table>
    </div>
    </Form>
  </>
}

export default Dashboard