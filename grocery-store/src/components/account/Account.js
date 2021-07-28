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
  { id: 'userName', label: 'Account username' },
  { id: 'password', label: 'Account password' },
  { id: 'fullName', label: 'Account fullname' },
  { id: 'email', label: 'Account email' },
  { id: 'mobile', label: 'Account phone' },
]

const Account = () => {
  
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
        title="Account Manager"
        subTitle="Account Manager Table"
        icon={<PeopleOutlineTwoToneIcon fontSize="large" />}
      />
      <Paper className={classes.pageContent}>
        <Toolbar>
          <Controls.Input
            label="Search Employees"
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
                <TableCell>{item.userName}</TableCell>
                <TableCell>{item.password}</TableCell>
                <TableCell>{item.fullName}</TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>{item.mobile}</TableCell>
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
    </div>
  );
}

export default Account;
