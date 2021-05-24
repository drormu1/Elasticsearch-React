export function DataTableQueryModel(name, text){
  return {
    name: name,
    text: text
  }
}

export function CreateDataTableActionModel(name, text, color, variant, icon, action, doneCallback, errorCallback){
  return {
    name: name,
    text: text,
    icon:icon,
    color:color,
    variant:variant,
    action: action,
    doneCallback: (rows) => doneCallback(rows),
    errorCallback: (rows) => errorCallback(rows)
  }
}
export class DataTableActionModel{
  constructor(name, text, color, variant, icon, action, doneCallback, errorCallback){
    this.name = name;
    this.text = text;
    this.icon = icon;
    this.color = color;
    this.variant = variant;
    this.action = action;
    this.doneCallback = (rows) => doneCallback(rows);
    this.errorCallback = (rows) => errorCallback(rows);
  }
}


export function CreateDataTableColumnModel(field, type, headerName, editable = false, sortable = true, width = null){
  return {
    field: field,
    type: type, //date|datetime|number
    headerName: headerName,
    width: width,
    sortable: sortable,
    editable: editable
  }
}

export class DataTableColumnModel{
  constructor(field, type, headerName, editable = false, sortable = true, width = null){
    this.field = field;
    this.type = type; //date|datetime|number
    this.headerName = headerName;
    this.width = width;
    this.sortable = sortable;
    this.editable = editable;
  }
}

export function CreateDataTableModel(
    entityName,
    columns,
    queries,
    handleDoubleClick = console.log,
    selectedRowsActions = [],
    currentQuery = queries[0],
    idField = 'id',
    pageSizes = [20,50,100,200], 
    selectable = true,
    ){
    return {
        entityName: entityName,
        queries: queries,
        currentQuery: currentQuery,
        pageSizes: pageSizes,
        filter: null,
        idField: idField,
        columns: columns,
        selectable: selectable,
        onDoubleClick: (row) => handleDoubleClick(row),
        selectedRowsActions: selectedRowsActions
    }
}

export function GetDataTableModel(entityName){
  //call the api to get scehma from server (which is derived from db schema and user's permissions)
}

export class DataTableResponse{
  constructor(dtoType, error, message, page, pageSize, total, availableActions, columns, data, filter, sortColumn, sortOrder){
    this.dtoType = dtoType;
    this.error = error;
    this.message = message;
    this.page = page;
    this.pageSize = pageSize;
    this.total = total;
    this.sortColumn = sortColumn;
    this.sortOrder = sortOrder;
    this.filter = filter;
    this.availableActions = availableActions;
    this.columns = columns;
    this.data = data;
  }
}