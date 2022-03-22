import React, { useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
//import useOrders from '../../../../hooks/useOrders';
import { Button, List, ListItem, ListItemText } from '@mui/material';

const columns = [
    { label: 'Ordered Item', minWidth: 200 },
    { label: 'Customer Name', minWidth: 150 },
    {
      label: 'Price',
      minWidth: 120,
      format: (value) => value.toLocaleString('en-US'),
    },
    { label: 'Payment Method', minWidth: 180,},
    { label: 'Status', minWidth: 150,  },
    { label: 'Action', minWidth: 170, },
  ];
  

  
const ManageOrder = () => {

 // const [orders]=useOrders();
  //console.log(orders)
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [orders,setOrders]=useState([]);

  useEffect(()=>{
    fetch('https://limitless-fjord-65876.herokuapp.com/orders')
    .then(res=>res.json())
    .then(data=>setOrders(data));
  },[orders])


  const handleDelete=()=>{

  }


  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
    return (
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={Math.random()}
                  style={{ minWidth: column.minWidth ,fontWeight:'bold'}}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
           {orders?
          <TableBody>
            {orders.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={Math.random()}>

                        <TableCell>
                          {row.orderProduct.map(product=>
                          <List key={Math.random()} sx={{p:0}}>
                          <ListItem disablePadding>
                            <ListItemText primary={product.name.slice(0,20)} />
                          </ListItem>
                          </List>
                            
                            )}
                          
                        </TableCell>
                        <TableCell>
                          {row.name}
                          
                        </TableCell>
                        <TableCell>
                          ${row.totalPrice}
                          
                        </TableCell>
                        <TableCell>
                          <span style={{marginRight:'5px'}}>bKash-</span>
                          {row.bkashNum} <br />
                          TrxID:{row.trxID}
                          
                        </TableCell>
                        <TableCell>Order Status</TableCell>

                        <TableCell ><Button onClick={()=>handleDelete(row._id)} variant="contained" color="error" >Cancle</Button></TableCell>
                     
                  </TableRow>
                );
              })}
          </TableBody>:<></>
          } 
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={orders.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
    );
};

export default ManageOrder;