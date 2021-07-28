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
  { id: 'name', label: 'Category Name' },
  { id: 'createDate', label: 'Category create date' },
  { id: 'updateDate', label: 'Category update date' },
  { id: 'createBy', label: 'Category create by', disableSorting: true },
]

const CategoryView = () => {

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
        title="Category Manager"
        subTitle="Category Manager Table"
        icon={<PeopleOutlineTwoToneIcon fontSize="large" />}
      />
      <Paper className={classes.pageContent}>
        <Toolbar>
          <Controls.Input
            label="Search Category"
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
      <Button className={classes.AddButton} variant="contained" color="primary" href="/admin/category/create">
        Add Category
      </Button>
    </div>
  );
}

export default CategoryView;