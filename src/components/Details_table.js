import React from 'react'
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import { forwardRef } from 'react';
import MaterialTable from "material-table";
import Theme from "../Theme"
function Details_table() {
 
    const tableIcons = {
        Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
        Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
        Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
        Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
        DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
        Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
        Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
        Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
        FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
        LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
        NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
        PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
        ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
        Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
        SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
        ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
        ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
      };
      const { useState } = React;

      const [columns, setColumns] = useState([
       
        { title: 'Name', field: 'name',sorting:false,
        
    
    },
        { title: 'Surname', field: 'surname', initialEditValue: 'initial edit value' },
        { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
        {
          title: 'Birth Place',
          field: 'birthCity',
          lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
        },
      ]);
    
      const [data, setData] = useState([
        { name: 'Mehmet', surname: 'aran', birthYear: 1987, birthCity: 63 },
        { name: 'Zerya Betül', surname: 'zaran', birthYear: 1999, birthCity: 34 },
        { name: 'abdgdsfg', surname: 'caran', birthYear: 1520, birthCity: 34 },
        { name: 'bcasf', surname: 'faran', birthYear: 1400, birthCity: 34 },
        { name: 'ddase', surname: 'daran', birthYear: 2020, birthCity: 34 },
        { name: 'ddase', surname: 'daran', birthYear: 2020, birthCity: 34 },
        { name: 'ddase', surname: 'daran', birthYear: 2020, birthCity: 34 },
        { name: 'ddase', surname: 'daran', birthYear: 2020, birthCity: 34 },
        { name: 'ddase', surname: 'daran', birthYear: 2020, birthCity: 34 },
        { name: 'ddase', surname: 'daran', birthYear: 2020, birthCity: 34 },
      ]);
    return (
        <div>
            <MaterialTable
  icons={tableIcons}
  title="Logs"
  columns={columns}
  
  data={data}    
//   actions={[
//     {
//     //   icon: ()=><AddBox />,
//     icon:tableIcons.Export,
//       tooltip: 'Save User',
//       onClick: (event, rowData) => alert("You saved " + rowData.name)
//     },
 
    
//   ]}
  options={{
    actionsColumnIndex: -1,
    sorting: true,
    exportButton: true,
    headerStyle: {
        backgroundColor: '#009700',
        color: '#FFF',
       
       
      },
   pageSize:10,
//    paginationType:"stepped",
// toolbarButtonAlignment:"left",
      filtering:true,
    
  }}
  editable={{
    onRowAdd: newData =>
      new Promise((resolve, reject) => {
        setTimeout(() => {
          setData([...data, newData]);
          
          resolve();
        }, 1000)
      }),
    onRowUpdate: (newData, oldData) =>
      new Promise((resolve, reject) => {
        setTimeout(() => {
          const dataUpdate = [...data];
          const index = oldData.tableData.id;
          dataUpdate[index] = newData;
          setData([...dataUpdate]);

          resolve();
        }, 1000)
      }),
    onRowDelete: oldData =>
      new Promise((resolve, reject) => {
        setTimeout(() => {
          const dataDelete = [...data];
          const index = oldData.tableData.id;
          dataDelete.splice(index, 1);
          setData([...dataDelete]);
          
          resolve()
        }, 1000)
      }),
  }}
  
  
/>
        </div>
    )
}

export default Details_table
