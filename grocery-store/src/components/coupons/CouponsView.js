import React, { useState } from 'react'
import { Paper, TableBody, TableRow, TableCell, Toolbar, InputAdornment, Button } from '@material-ui/core';
import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';
import { Search } from "@material-ui/icons";
import PageHeader from '../UI/pageheader/PageHeader';
import useStyles from './styles';
import useTable from '../../hooks/table/useTable';
import Controls from '../controls/Controls';
import * as employeeService from "../../services/employeeService";

const headCells = [
  { id: 'code', label: 'Coupon code' },
  { id: 'discountAmount', label: 'Coupon discount amount' },
  { id: 'productDiscount', label: 'Coupon product discount' },
  { id: 'discription', label: 'Coupon discription' },
  { id: 'expirationDate', label: 'Coupon expiration date' },
  { id: 'createDate', label: 'Coupon create date' },
  { id: 'updateDate', label: 'Coupon update date' },
  { id: 'createBy', label: 'Coupon create by' },
]

const CouponsView = () => {

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
        title="Coupons Manager"
        subTitle="Coupons Manager Table"
        icon={<PeopleOutlineTwoToneIcon fontSize="large" />}
      />
      <Paper className={classes.pageContent}>
        <Toolbar>
          <Controls.Input
            label="Search Coupons"
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
                <TableCell>{item.code}</TableCell>
                <TableCell>{item.discountAmount}</TableCell>
                <TableCell>{item.productDiscount}</TableCell>
                <TableCell>{item.discription}</TableCell>
                <TableCell>{item.expirationDate}</TableCell>
                <TableCell>{item.createDate}</TableCell>
                <TableCell>{item.updateDate}</TableCell>
                <TableCell>{item.createBy}</TableCell>
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
      <Button className={classes.AddButton} variant="contained" color="primary" href="/admin/coupons/create">
        Add Coupon
      </Button>
    </div>
  );
}

export default CouponsView;
