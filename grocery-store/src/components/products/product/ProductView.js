import React, { useState } from 'react'
import { Paper, TableBody, TableRow, TableCell, Toolbar, InputAdornment, Button } from '@material-ui/core';
import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';
import { Search } from "@material-ui/icons";
import PageHeader from '../../UI/pageheader/PageHeader';
import useStyles from './styles3';
import useTable from '../../../hooks/table/useTable';
import Controls from '../../controls/Controls';
import * as employeeService from "../../../services/employeeService";

const headCells = [
  { id: 'name', label: 'Product Name' },
  { id: 'shortDescription', label: 'Product short description' },
  { id: 'description', label: 'Product description' },
  { id: 'price', label: 'Product price' },
  { id: 'brand', label: 'Product brand' },
  { id: 'quantity', label: 'Product quantity' },
  { id: 'category', label: 'Product category' },
  { id: 'counter', label: 'Product counter' },
  { id: 'createDate', label: 'Product create date' },
  { id: 'updateDate', label: 'Product update date' },
]

const BrandView = () => {

  const classes = useStyles();

  const [records, setRecords] = useState(employeeService.getAllEmployees())
  const [filterFn, setFilterFn] = useState({ fn: items => { return items; } })

  const {
    TblContainer,
    TblHead,
    TblPagination,
    recordsAfterPagingAndSorting
  } = useTable(records, headCells, filterFn);

  const handleSearch = e => {
    let target = e.target;
    setFilterFn({
      fn: items => {
        if (target.value === "")
          return items;
        else
          return items.filter(x => x.fullName.toLowerCase().includes(target.value))
      }
    })
  }

  return (
    <div>
      <PageHeader
        title="Product Manager"
        subTitle="Product Manager Table"
        icon={<PeopleOutlineTwoToneIcon fontSize="large" />}
      />
      <Paper className={classes.pageContent}>
        <Toolbar>
          <Controls.Input
            label="Search Product"
            className={classes.searchInput}
            InputProps={{
              startAdornment: (<InputAdornment position="start">
                <Search />
              </InputAdornment>)
            }}
            onChange={handleSearch}
          />
        </Toolbar>
        <TblContainer>
          <TblHead />
          <TableBody>
            {
              recordsAfterPagingAndSorting().map(item =>
              (<TableRow key={item.id}>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.shortDescription}</TableCell>
                <TableCell>{item.description}</TableCell>
                <TableCell>{item.price}</TableCell>
                <TableCell>{item.brand}</TableCell>
                <TableCell>{item.quantity}</TableCell>
                <TableCell>{item.category}</TableCell>
                <TableCell>{item.counter}</TableCell>
                <TableCell>{item.createDate}</TableCell>
                <TableCell>{item.updateDate}</TableCell>
              </TableRow>)
              )
            }
          </TableBody>
        </TblContainer>
        <TblPagination />
      </Paper>
      <Button className={classes.AddButton} variant="contained" color="primary" href="/admin">
        Admin Page
      </Button>
      <Button className={classes.AddButton} variant="contained" color="primary" href="/admin/product/create">
        Add Product
      </Button>
    </div>
  );
}

export default BrandView;