// export const RolesEnum = Object.freeze({
//     GUEST: Symbol("GUEST"),
//     EDITOR: Symbol("EDITOR"),
//     ADMIN: Symbol("ADMIN")
// });

//https://2ality.com/2020/01/enum-pattern.html
export class RolesEnum {
    static PUBLIC = new SitePrivleges('PUBLIC',false,false,false,false);
    static EDITOR = new SitePrivleges('EDITOR',true,true,true,false);
    static ADMIN = new SitePrivleges('ADMIN',true,true,true,true);
}

export class SitePrivleges{
    constructor(name, allowGuestTablePage, allowEditorTablePage, allowEventTablePage, allowViewAllEvent){
        this.name = name;
        this.allowGuestTablePage = allowGuestTablePage;
        this.allowEditorTablePage = allowEditorTablePage;
        this.allowEventTablePage = allowEventTablePage;
        this.allowAllEvent = allowViewAllEvent;
    }
}