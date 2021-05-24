import React from 'react';
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

import {CreateDataTableModel, CreateDataTableColumnModel, CreateDataTableActionModel, DataTableQueryModel} from './ModDataTableSchemaCreator';

const demoTableSchema = CreateDataTableModel(
    'Tasks',
    [
        new CreateDataTableColumnModel('id','number','מזהה',true,200), 
        new CreateDataTableColumnModel('name','text','שם משימה',true,200), 
        new CreateDataTableColumnModel('status','text','סטטוס',true,200)
    ],
    [
        new DataTableQueryModel('All','הכל'), 
        new DataTableQueryModel('InProgress','פתוח'), 
        new DataTableQueryModel('Done','גמור')
    ],
    (item) => console.log(item),
    [
        new CreateDataTableActionModel('action1','שמור','primary','contained',<SaveIcon/>,console.log),
        new CreateDataTableActionModel('action2','העלה','secondary','contained',<CloudUploadIcon/>,console.error),
        new CreateDataTableActionModel('action3','מחק','danger','contained',<DeleteIcon/>,console.log)
    ]
    );

export default demoTableSchema;