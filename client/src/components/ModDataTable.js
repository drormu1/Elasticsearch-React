import React, { useState, useEffect, useCallback } from 'react';
import { Toolbar, Select, InputLabel,FormControl, TextField, MenuItem, Button  } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { DataGrid } from '@material-ui/data-grid';

import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  rowActionButton: {
    margin: theme.spacing(2),
  },
}));


// const testColumns = [
//   { field: 'id', headerName: 'ID', width: 70 },
//   { field: 'firstName', headerName: 'First name', width: 130 },
//   { field: 'lastName', headerName: 'Last name', width: 130 },
//   { field: 'age', headerName: 'Age', type: 'number', width: 90 },
//   { field: 'fullName', headerName: 'Full name', description: 'This column has a value getter and is not sortable.', sortable: false, width: 160, valueGetter: (params) =>
//       `${params.getValue('firstName') || ''} ${params.getValue('lastName') || ''}`,
//   },
// ];

// const testRows = [
//   { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
//   { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
//   { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
//   { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
//   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
//   { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
//   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
//   { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
//   { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
// ];

export default function ModDataTable(props) {

  const classes = useStyles();

  const [loading, setLoading] = useState(false);
  const [rows, setRows] = useState(props.rows || []);
  const [selectedRows, setSelectedRows] = useState([]); //new Set()
  const [totalRows, setTotalRows] = useState(props.totalRows || 0);
  const [query, setQuery] = useState(props.schema.queries[0] || null);
  const [page, setPage] = useState(props.page || 1);
  const [pageSize, setPageSize] = useState(props.pageSize || 50);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    if(!rows){
      fetchTable()
    }
  }, [rows]);

  // const tableHeight = () => (rows.length + 2) * 53; //eacg row is 52 pixels + header and footer
  //height: tableHeight(),

  function handleSelectionChange(selection){
    const selected = rows.filter(r => selection.selectionModel.indexOf(r.id) > -1);
    setSelectedRows(selected);
    console.log(selected);
  }

  function fetchTable(){
    let url = `${process.env.REACT_APP_API_HOST}/api/${props.schema.entityName}?page=${page}&pageSize=${pageSize}&query=${query.name}&filter=${filter}`;
    console.log(url);
    setLoading(true);
    fetch(url,
      {
        method: "GET",
        headers: new Headers({
          Accept: "application/vnd.github.cloak-preview"
        })
      }
    )
      .then(res => res.json())
      .then(response => {
        console.log(response);
        setRows(response.rows);
        setLoading(false);
      })
      .catch(error => console.log(error));
  }

  function handleFilterKeyDown(e){
    if (e.key === 'Enter') {
      alert(filter);
    }
  } 

  const [editRowsModel, setEditRowsModel] = useState({});

  const handleEditRowModelChange = useCallback((params) => {
    setEditRowsModel(params.model);
  }, []);

  return (
    <>
      <Toolbar>
        {props.schema.queries ? 
        
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">שאילתא</InputLabel>
          <Select labelId="demo-simple-select-label" value={query.name} onChange={e => setQuery(props.schema.queries.find( q => q.name == e.target.value))}>
            {props.schema.queries.map(q => <MenuItem value={q.name}>{q.text}</MenuItem>)}
          </Select>
        </FormControl> : null}

        <TextField id="standard-basic" label="סינון..." onChange={e => setFilter(e.target.value)} onKeyPress={e => handleFilterKeyDown(e)}/>
      
        {props.schema.selectedRowsActions ? 
          props.schema.selectedRowsActions.map(a => 
            <Button className={classes.rowActionButton} variant={a.variant} color={a.color} startIcon={a.icon} onClick={() => a.action(selectedRows)}>{a.text}</Button>) 
          : null}
      </Toolbar>
      <div style={{ width: '100%' }}>
        <DataGrid 
          rows={rows} 
          columns={props.schema.columns} 
          pageSize={pageSize} 
          checkboxSelection={props.schema.selectable} 
          autoHeight={true} 
          page={false} 
          pageSize={pageSize} 
          rowCount={totalRows} 
          paginationMode={'server'} 
          onSelectionModelChange={(model) => handleSelectionChange(model)}
          // onRowDoubleClick={(item) => console.log(item.row)} 
          onPageChange={(item) => console.log(item)} 
          onPageSizeChange={(item) => console.log(item)} 
          loading={false} 
          hideFooter={false} 
          hideFooterPagination={false} 
          hideFooterRowCount={false}
          onFilterModelChange={(model => console.log(model))}
          onColumnOrderChange={(model => console.log(model))}
          disableSelectionOnClick={true}
          isCellEditable={props.schema.editable}
          editRowsModel={editRowsModel}
          onEditRowModelChange={handleEditRowModelChange}
          // editRowsModel={}
          />
      </div>
    </>
  );
}