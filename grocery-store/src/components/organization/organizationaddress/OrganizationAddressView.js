import React, { useState } from 'react'
import { Paper, TableBody, TableRow, TableCell, Toolbar, InputAdornment, Button } from '@material-ui/core';
import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';
import { Search } from "@material-ui/icons";
import PageHeader from '../../UI/pageheader/PageHeader';
import useStyles from './styles';
import useTable from '../../../hooks/table/useTable';
import Controls from '../../controls/Controls';
import * as employeeService from "../../../services/employeeService";

const headCells = [
  { id: 'organizationId', label: 'Organization id' },
  { id: 'address', label: 'Organization address' }
]

const OrganizationAddressView = () => {

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
        title="Organization Address Manager"
        subTitle="Organization Address Manager Table"
        icon={<PeopleOutlineTwoToneIcon fontSize="large" />}
      />
      <Paper className={classes.pageContent}>
        <Toolbar>
          <Controls.Input
            label="Search Organization Address"
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
                <TableCell>{item.organizationId}</TableCell>
                <TableCell>{item.address}</TableCell>
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
      <Button className={classes.AddButton} variant="contained" color="primary" href="/admin/organizationaddress/create">
        Add Organization Address
      </Button>
    </div>
  );
}

export default OrganizationAddressView;
