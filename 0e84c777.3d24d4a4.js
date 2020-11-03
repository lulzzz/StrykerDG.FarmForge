(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{101:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return h}));var i=a(0),n=a.n(i);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=n.a.createContext({}),b=function(e){var t=n.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=b(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},u=n.a.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=b(a),u=i,h=d["".concat(l,".").concat(u)]||d[u]||p[u]||r;return a?n.a.createElement(h,o(o({ref:t},s),{},{components:a})):n.a.createElement(h,o({ref:t},s))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var s=2;s<r;s++)l[s]=a[s];return n.a.createElement.apply(null,l)}return n.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},60:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return b}));var i=a(2),n=a(6),r=(a(0),a(101)),l={id:"client",title:"Client",sidebar_label:"Client"},o={unversionedId:"development/client",id:"development/client",isDocsHomePage:!1,title:"Client",description:"Description",source:"@site/docs\\development\\client.md",slug:"/development/client",permalink:"/docs/development/client",editUrl:"https://github.com/StrykerDG/StrykerDG.FarmForge/tree/master/StrykerDG.FarmForge.Documentation/docs/development/client.md",version:"current",sidebar_label:"Client",sidebar:"someSidebar",previous:{title:"Devices",permalink:"/docs/development/devices"},next:{title:"API",permalink:"/docs/development/api"}},c=[{value:"Description",id:"description",children:[]},{value:"Dependencies",id:"dependencies",children:[]},{value:"Models",id:"models",children:[{value:"FarmForgeResponse",id:"farmforgeresponse",children:[]},{value:"FarmForgeModel",id:"farmforgemodel",children:[]},{value:"FarmForgeDataTableColumn",id:"farmforgedatatablecolumn",children:[]},{value:"KpiModel",id:"kpimodel",children:[]},{value:"Enums",id:"enums",children:[]},{value:"MultiSelectOption",id:"multiselectoption",children:[]}]},{value:"Providers",id:"providers",children:[{value:"CoreProvider",id:"coreprovider",children:[]},{value:"DataProvider",id:"dataprovider",children:[]},{value:"UserProvider",id:"userprovider",children:[]}]},{value:"Screens",id:"screens",children:[{value:"Login",id:"login",children:[]},{value:"Dashboard",id:"dashboard",children:[]},{value:"Crops",id:"crops",children:[]},{value:"Inventory",id:"inventory",children:[]},{value:"Settings",id:"settings",children:[]}]},{value:"Services",id:"services",children:[{value:"FarmForgeApiService",id:"farmforgeapiservice",children:[]}]},{value:"Utilities",id:"utilities",children:[{value:"Constants",id:"constants",children:[]},{value:"Settings",id:"settings-1",children:[]},{value:"Themes",id:"themes",children:[]},{value:"Validation",id:"validation",children:[]},{value:"Utility",id:"utility",children:[]},{value:"DateTimeUtility",id:"datetimeutility",children:[]},{value:"UiUtility",id:"uiutility",children:[]}]},{value:"Widgets",id:"widgets",children:[{value:"FarmForgeDialog",id:"farmforgedialog",children:[]},{value:"FarmForgeDataTable",id:"farmforgedatatable",children:[]},{value:"DateRangePicker",id:"daterangepicker",children:[]},{value:"KpiCard",id:"kpicard",children:[]},{value:"KpiChart",id:"kpichart",children:[]},{value:"MultiSelectDialog",id:"multiselectdialog",children:[]},{value:"SettingsExpansionTile",id:"settingsexpansiontile",children:[]}]}],s={rightToc:c};function b(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"description"},"Description"),Object(r.b)("p",null,"The FarmForge Client is written in ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://dart.dev/"}),"Dart")," and ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://flutter.dev/"}),"Flutter")," and provides the Farm Management aspect of FarmForge. It also\nprovides a central area to view and manage all of your devices. The project\nstructure is as follows:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"#models"}),"models"),": Provides a definition for FarmForge data models and DTOs that are used\nby the client"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"#providers"}),"provider"),": All provider / state management related files and definitions. CoreProvider are the core items used throughout the app, where as DataProvider is\nwhere all of the data retrieved from the API is stored."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"#screens"}),"screens"),": All screens for the app. Each screen should have a main file that\nutilizes a LayoutBuilder to display a small, medium, or large version of the\ncontent."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"#services"}),"services"),": Any services used by the client. Services will typically be utilized\nthrough CoreProvider"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"#utilities"}),"utilities"),": Any utilities that store re-used logic throughout the app. Examples\ninclude settings, themes, and validation."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"#widgets"}),"widgets"),": Custom widgets that are utilized by the screens")),Object(r.b)("h2",{id:"dependencies"},"Dependencies"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://pub.dev/packages/provider"}),"provider")," for State Management"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://pub.dev/packages/http"}),"http")," for web requests"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://pub.dev/packages/intl"}),"intl")," for date formatting")),Object(r.b)("h2",{id:"models"},"Models"),Object(r.b)("p",null,"Most of the models within the client are adaptations from the DataModel or API\nDTOs to make working with the data easier, and since dart is strongly typed. That\nbeing said, there are several client-specific models as well."),Object(r.b)("h3",{id:"farmforgeresponse"},"FarmForgeResponse"),Object(r.b)("p",null,"FarmForgeResponse is represents responses from the FarmForge API, and all valid\nAPI responses should return as a FarmForgeResponse. If a request is successful,\nthe data field will be populated, and if there was a handled error, the error\nfield will be populated."),Object(r.b)("h4",{id:"properties"},"Properties"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"data (dynamic): The data returned from an api query"),Object(r.b)("li",{parentName:"ul"},"error (string): The error returned from an api query")),Object(r.b)("h4",{id:"example"},"Example"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{}),"FarmForgeResponse result = await Provider.of<CoreProvider>(context, listen: false)\n    .farmForgeService.getLocations();\n")),Object(r.b)("h3",{id:"farmforgemodel"},"FarmForgeModel"),Object(r.b)("p",null,"FarmForgeModel is an interface that other FarmForge models (Crop, CropType, etc)\nshould extend if they are to be used in a generic or templated Widget. If a model\nextends FarmForgeModel, that model's type should be added to _constructors map."),Object(r.b)("h4",{id:"properties-1"},"Properties"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"_constructors(Map<Type, Function>): Contains a map of constructors for each\ntype of FarmForgeModel")),Object(r.b)("h4",{id:"methods"},"Methods"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Map<String, dynamic> toMap(): abstract method that is implemented in classes\nthat extend FarmForgeModel. Turns the Type T into a Map<String, dynamic>"),Object(r.b)("li",{parentName:"ul"},"static FarmForgeModel create(Type T, Map<String, dynamic> data): Method that\nuses the _constructors map to create an object of type T from a given Map<String, dynamic>")),Object(r.b)("h4",{id:"example-1"},"Example"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{}),"static final _constructors = {\n    <TYPE>:(Map<String, dynamic> data) => <TYPE>.fromMap(data)\n}\n\n--- \n\nCrop c = FarmForgeModel.create(T, dataMaps.elementAt(index));\n")),Object(r.b)("h3",{id:"farmforgedatatablecolumn"},"FarmForgeDataTableColumn"),Object(r.b)("p",null,"FarmForgeDataTableColumns are a model that define columns for a given\nFarmForgeDataTable"),Object(r.b)("h4",{id:"properties-2"},"Properties"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"label (String): The label of the column"),Object(r.b)("li",{parentName:"ul"},"property (String): The property displayed in the column, in dot notation"),Object(r.b)("li",{parentName:"ul"},"propertyFunc (Function): A function that displays a widget in the column. Takes\nprecedence over property"),Object(r.b)("li",{parentName:"ul"},"canSort (bool): specifies whether you can sort a column. Defaults to true"),Object(r.b)("li",{parentName:"ul"},"canFilter (bool): specifies whether you can filter a column. Defaults to true"),Object(r.b)("li",{parentName:"ul"},"canEdit (bool): specifies whether you can edit a property in line. Defaults to\nfalse")),Object(r.b)("h4",{id:"example-2"},"Example"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{}),"List<FarmForgeDataTableColumn> generateColumns() {\n    return [\n        FarmForgeDataTableColumn(\n            label: 'Type',\n            property: 'CropType.Label'\n        ),\n        FarmForgeDataTableColumn(\n            label: 'Variety',\n            property: 'CropVariety.Label'\n        ),\n        FarmForgeDataTableColumn(\n            label: 'Location',\n            property: 'Location.Label'\n        ),\n    ];\n}\n")),Object(r.b)("h3",{id:"kpimodel"},"KpiModel"),Object(r.b)("p",null,"KpiModel is a generic model that is used for displaying data in charts."),Object(r.b)("h4",{id:"properties-3"},"Properties"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"measure (String): The label of the KPI"),Object(r.b)("li",{parentName:"ul"},"value (int): The value of the KPI")),Object(r.b)("h3",{id:"enums"},"Enums"),Object(r.b)("p",null,"Enums is a generic file that houses enumerations used within the FarmForge client."),Object(r.b)("h4",{id:"inventoryaction"},"InventoryAction"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"A list of actions that can be performed on inventory")),Object(r.b)("h3",{id:"multiselectoption"},"MultiSelectOption"),Object(r.b)("p",null,"MultiSelectOption is provided to MultiSelectDialog do display an option that can\nbe selected by the user"),Object(r.b)("h4",{id:"properties-4"},"Properties"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"value (int): The value of the option, typically an items primary key"),Object(r.b)("li",{parentName:"ul"},"label (string): The label that is shown to the user")),Object(r.b)("h2",{id:"providers"},"Providers"),Object(r.b)("p",null,"Providers are the state management for FarmForge."),Object(r.b)("h3",{id:"coreprovider"},"CoreProvider"),Object(r.b)("p",null,"CoreProvider contains the state of core components within the FarmForge client.\nServices are initialized here as singletons."),Object(r.b)("h4",{id:"properties-5"},"Properties"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"farmForgeService (FarmForgeApiService): The service that houses all api calls"),Object(r.b)("li",{parentName:"ul"},"currentTheme (ThemeData): The currently selected theme for the app. Options are\nprimaryTheme, lightTheme, and darkTheme"),Object(r.b)("li",{parentName:"ul"},"appContent (Widget): The currently active Widget / content"),Object(r.b)("li",{parentName:"ul"},"appTitle (String): The current area's title"),Object(r.b)("li",{parentName:"ul"},"fabIcon (IconData): The icon of the area's FloatingActionButton"),Object(r.b)("li",{parentName:"ul"},"fabAction (Function): The function that triggers when clicking the FloatingActionButton")),Object(r.b)("h4",{id:"methods-1"},"Methods"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"void toggleTheme(ThemeType type): Toggles the current theme of the app"),Object(r.b)("li",{parentName:"ul"},"void setAppContent(Widget content, String title, IconData icon, Function action):\nupdates the currently active Widget / content")),Object(r.b)("h3",{id:"dataprovider"},"DataProvider"),Object(r.b)("p",null,"DataProvider stores the data utilized in various areas of the FarmForge app."),Object(r.b)("h4",{id:"properties-6"},"Properties"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},'defaultDate (DateTime): Default "begin" date used for searching'),Object(r.b)("li",{parentName:"ul"},"crops (List): List of Crops that have been planted "),Object(r.b)("li",{parentName:"ul"},"cropTypes (List): List of available CropTypes that you can plant"),Object(r.b)("li",{parentName:"ul"},"cropClassifications (List): List of classifications that a crop can be"),Object(r.b)("li",{parentName:"ul"},"inventory (List): List of products that are currently in inventory"),Object(r.b)("li",{parentName:"ul"},"locations (List): List of available locations"),Object(r.b)("li",{parentName:"ul"},"logTypes (List): List of available log types"),Object(r.b)("li",{parentName:"ul"},"productTypes (List): List of available product types"),Object(r.b)("li",{parentName:"ul"},"ProductCategories (List): List of available product categories"),Object(r.b)("li",{parentName:"ul"},"statuses (List): List of available statuses"),Object(r.b)("li",{parentName:"ul"},"suppliers (List): List of available suppliers"),Object(r.b)("li",{parentName:"ul"},"unitTypes (List): List of available unit types"),Object(r.b)("li",{parentName:"ul"},"unitTypeConversions (List): List of available unit type conversions"),Object(r.b)("li",{parentName:"ul"},"users (List): List of available users")),Object(r.b)("h4",{id:"methods-2"},"Methods"),Object(r.b)("p",null,"There are a variety of methods for clearing, setting, and updating the various\nproperties. Typically they're in the form setCrops(), updateCrop(), etc."),Object(r.b)("h3",{id:"userprovider"},"UserProvider"),Object(r.b)("p",null,"The UserProvider stores information related to the currently logged in user"),Object(r.b)("h4",{id:"properties-7"},"Properties"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"username (String): The username of the currently logged in user")),Object(r.b)("h4",{id:"methods-3"},"Methods"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"void setUsername(String user): Sets the name of the currently logged in user")),Object(r.b)("h2",{id:"screens"},"Screens"),Object(r.b)("p",null,"Screens are the various areas that you can be in the app."),Object(r.b)("h3",{id:"login"},"Login"),Object(r.b)("p",null,"The login screen is the first screen you come to. The initial user on a fresh install is Admin / FarmForgeAdmin"),Object(r.b)("h3",{id:"dashboard"},"Dashboard"),Object(r.b)("p",null,"The dashboard is the home screen after logging in. This is where you will see a\nsummary of your farm and statistics."),Object(r.b)("h3",{id:"crops"},"Crops"),Object(r.b)("p",null,"From the crops page, you can plant new crops, update their status, create logs, and\nview crop detils."),Object(r.b)("h3",{id:"inventory"},"Inventory"),Object(r.b)("p",null,"The inventory page allows you to view current inventory as well as add\ninventory, move inventory to different locations, consume inventory, and convert\ninventory from one unit to another"),Object(r.b)("h3",{id:"settings"},"Settings"),Object(r.b)("p",null,"The settings page allows you to create and delete users, crops, crop types, and\nlocations. You can also manage products, product types, units, unit conversions,\nand suppliers"),Object(r.b)("h2",{id:"services"},"Services"),Object(r.b)("p",null,"Services are utilized to interact with external providers"),Object(r.b)("h3",{id:"farmforgeapiservice"},"FarmForgeApiService"),Object(r.b)("p",null,"The FarmForgeApiService is used to interact with the API."),Object(r.b)("h4",{id:"properties-8"},"Properties"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"token (String): The jwt received from the API during login"),Object(r.b)("li",{parentName:"ul"},"apiURL (String): the url of the FarmForge API")),Object(r.b)("h4",{id:"methods-4"},"Methods"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Future request(String uri, dynamic body, String method): The common method used\nwhen making an api request. ")),Object(r.b)("h2",{id:"utilities"},"Utilities"),Object(r.b)("p",null,"Utilities are a central place to store logic that is used throughout the app."),Object(r.b)("h3",{id:"constants"},"Constants"),Object(r.b)("p",null,"Constants contains all of the constants used throughout the app. It has values\nfor the following"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Device widths"),Object(r.b)("li",{parentName:"ul"},"AppBar"),Object(r.b)("li",{parentName:"ul"},"Colors"),Object(r.b)("li",{parentName:"ul"},"Padding"),Object(r.b)("li",{parentName:"ul"},"Width"),Object(r.b)("li",{parentName:"ul"},"Radius"),Object(r.b)("li",{parentName:"ul"},"Dialog"),Object(r.b)("li",{parentName:"ul"},"Login Sizes"),Object(r.b)("li",{parentName:"ul"},"Desktop Sizes"),Object(r.b)("li",{parentName:"ul"},"Dividers"),Object(r.b)("li",{parentName:"ul"},"ListView / Tables"),Object(r.b)("li",{parentName:"ul"},"DatePickers")),Object(r.b)("h3",{id:"settings-1"},"Settings"),Object(r.b)("p",null,"Settings contains app-specific settings"),Object(r.b)("h4",{id:"properties-9"},"Properties"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"version (String): The version of the app"),Object(r.b)("li",{parentName:"ul"},"developmentUrl (String): The API url for the development environment"),Object(r.b)("li",{parentName:"ul"},"testUrl (String): The API url for the test environment"),Object(r.b)("li",{parentName:"ul"},"productionUrl (String): The API url for the production environment")),Object(r.b)("h3",{id:"themes"},"Themes"),Object(r.b)("p",null,"Themes contains the various themes definitions for the app. There are currently\n3 themes"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"primaryTheme"),Object(r.b)("li",{parentName:"ul"},"lightTheme"),Object(r.b)("li",{parentName:"ul"},"darkTheme")),Object(r.b)("h3",{id:"validation"},"Validation"),Object(r.b)("p",null,"Validation provides a number of validation methods that can be used for forms."),Object(r.b)("h4",{id:"methods-5"},"Methods"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"static String isNotEmpty(dynamic value): checks whether the provided value is\nempty"),Object(r.b)("li",{parentName:"ul"},"static String isNumeric(String value): checks whether the provided string is\na numeric value"),Object(r.b)("li",{parentName:"ul"},"static String isEmptyOrNumeric(dynamic value): checks whetehr the provided\nvalue is empty or numeric"),Object(r.b)("li",{parentName:"ul"},"static String isValidDate(String value): checks whether the provided string is\na valid DateTime"),Object(r.b)("li",{parentName:"ul"},"static String isValidDateRange(String value): checks whether the provided string contains valid DateTimes")),Object(r.b)("h3",{id:"utility"},"Utility"),Object(r.b)("p",null,"Utility is used to store common logic that doesn't nescessarily fit in a\nutility class of it's own."),Object(r.b)("h4",{id:"methods-6"},"Methods"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"static Map<String, dynamic> parseJWT(String token): Parses the jwt and returns\nthe decoded string"),Object(r.b)("li",{parentName:"ul"},"static String decodeBase64(String str): Decodes a base 64 string")),Object(r.b)("h3",{id:"datetimeutility"},"DateTimeUtility"),Object(r.b)("p",null,"DateTimeUtility houses all DateTime-related methods"),Object(r.b)("h4",{id:"methods-7"},"Methods"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},'static String formateDateTimeRange(DateTimeRange dateRange): Formats a given\nDateTimeRange as "YYYY-MM-DD - YYYY-MM-DD"'),Object(r.b)("li",{parentName:"ul"},'static String formatDateTime(DateTime date): Formats a given DateTime as\n"YYYY-MM-DD"'),Object(r.b)("li",{parentName:"ul"},'static String formatShortDateTime(DateTime date): Formats a given DateTime as\n"MM/DD"')),Object(r.b)("h3",{id:"uiutility"},"UiUtility"),Object(r.b)("p",null,"UiUtility contains helper methods for displaying different UI components"),Object(r.b)("h4",{id:"methods-8"},"Methods"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"static handleError(BuildContext context, String title, String error): Uses\nthe given title and error to display an error dialog")),Object(r.b)("h2",{id:"widgets"},"Widgets"),Object(r.b)("p",null,"Widgets are the individual components that are used in various areas throughout\nthe app. Within the widgits directory, there are subdirectories that contain\nthe widgets used for that specific section. For example, you can find the\nwidgets used in the Crop workarea by looking at widgets/crops/..."),Object(r.b)("p",null,"Common widgets are in the base widit directory"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{}),"- lib\n    - widgets\n        - crops\n            - crops widget a\n            - crops widget b\n        - settings\n            - setting widget a\n        - common widget a\n        - common widget b\n")),Object(r.b)("h3",{id:"farmforgedialog"},"FarmForgeDialog"),Object(r.b)("p",null,"FarmForgeDialog is a common dialog widget that can be utilized everywhere"),Object(r.b)("h4",{id:"properties-10"},"Properties"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"title (String): The title of the dialog"),Object(r.b)("li",{parentName:"ul"},"content (Widget): The content that will be displayed in the dialog"),Object(r.b)("li",{parentName:"ul"},"width (double): How wide the dialog should be")),Object(r.b)("h4",{id:"example-3"},"Example"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{}),"  void handleAddVariety(int cropTypeId) {\n    showDialog(\n      context: context,\n      builder: (context) => FarmForgeDialog(\n        title: 'Add New Variety',\n        content: AddCropVarieity(cropTypeId: cropTypeId),\n        width: kSmallDesktopModalWidth,\n      )\n    );\n  }\n")),Object(r.b)("h3",{id:"farmforgedatatable"},"FarmForgeDataTable"),Object(r.b)("p",null,"FarmForgeDataTable is a generalized DataTable that has built in sorting and\nfiltering. Clicking the column header once will sort based on that column, while\ndouble clicking a column header will present a TextField which adds a filter to\nthat column"),Object(r.b)("h4",{id:"properties-11"},"Properties"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"data (List): A list of data to display. The list must be of a type that extends ",Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"#FarmForgeModel"}),"FarmForgeModel")),Object(r.b)("li",{parentName:"ul"},"columns (List): A list of column definitions. The list must be of type\n",Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"#FarmForgeDataTableColumn"}),"FarmForgeDataTableColumn")),Object(r.b)("li",{parentName:"ul"},"onRowClick (Function): The callback method that should fire when selecting\na row. The method should take two paramters: a boolean value, followed by a Map of type String, dynamic"),Object(r.b)("li",{parentName:"ul"},"showCheckBoxes (bool): Specifies whether checkboxes should be shown on the\ndata table. Defaults to false")),Object(r.b)("h4",{id:"example-4"},"Example"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{}),"@override\nWidget build(BuildContext context) {\n\n    double dataTableHeight = \n        MediaQuery.of(context).size.height - kAppBarHeight - kSerachBarHeight;\n\n    return Container(\n        height: dataTableHeight,\n        child: SingleChildScrollView(\n            scrollDirection: Axis.vertical,\n            child: FarmForgeDataTable<Crop>(\n                columns: _columns,\n                data: _crops,\n                onRowClick: handleRowClick,\n                showCheckBoxes: false,\n            ),\n        ),\n    );\n}\n")),Object(r.b)("h3",{id:"daterangepicker"},"DateRangePicker"),Object(r.b)("p",null,'DateRangePicker is a widget that displays a date range that you can change, in\naddition to a "search" button that will execute a callback function.'),Object(r.b)("h4",{id:"properties-12"},"Properties"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"initialDateRange (DateTimeRange): The initial date range to display"),Object(r.b)("li",{parentName:"ul"},"onSearch (Function): The callback method that is executed when the search\nbutton is pressed. onSearch will receive a DateTimeRange as a parameter")),Object(r.b)("h4",{id:"example-5"},"Example"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{}),"@override\n  Widget build(BuildContext context) {\n\n    return Padding(\n        padding: EdgeInsets.symmetric(vertical: kSmallPadding),\n        child: DateRangePicker(\n            initialDateRange: _dateSearchRange,\n            onSearch: handleSearch,\n        ),\n    );\n}\n")),Object(r.b)("h3",{id:"kpicard"},"KpiCard"),Object(r.b)("p",null,"KpiCards are components that display key performance indicators on the dashboard"),Object(r.b)("h4",{id:"properties-13"},"Properties"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"width (double): how wide the card is"),Object(r.b)("li",{parentName:"ul"},"height (double): how high the card is"),Object(r.b)("li",{parentName:"ul"},"title (String): The title of the KPI"),Object(r.b)("li",{parentName:"ul"},"kpi (String): The value of the KPI to display")),Object(r.b)("h4",{id:"example-6"},"Example"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{}),"@override\n  Widget build(BuildContext context) {\n\n    return KpiCard(\n        width: kMediumCardWidth,\n        height: kMediumCardHeight,\n        title: 'Crops Planted',\n        kpi: crops?.length?.toString() ?? \"\",\n    );\n}\n")),Object(r.b)("h3",{id:"kpichart"},"KpiChart"),Object(r.b)("p",null,"KpiCharts are similar to KpiCards, but show charted values instead of a text\nvalue."),Object(r.b)("h4",{id:"properties-14"},"Properties"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"width (double): the width of the card"),Object(r.b)("li",{parentName:"ul"},"height (double): the height of the card"),Object(r.b)("li",{parentName:"ul"},"title (String): the title of the KPI"),Object(r.b)("li",{parentName:"ul"},"Data (List): the data that should be charted / displayed. The data should be\na list of TYPE that extends KpiModel")),Object(r.b)("h4",{id:"example-7"},"Example"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{}),"@override\n  Widget build(BuildContext context) {\n\n    return KpiChart(\n        width: kLargeCardHeight,\n        height: kLargeCardHeight,\n        title: 'Crops By Location',\n        data: cropsByLocation,\n    );\n}\n")),Object(r.b)("h3",{id:"multiselectdialog"},"MultiSelectDialog"),Object(r.b)("p",null,"MultiSelectDialog is a widget that functions similar to a dropdown, but allows\nyou to select multiple options."),Object(r.b)("h4",{id:"properties-15"},"Properties"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"options (List): a list of MultiSelectOptions that specify what options will\nshow up in the dialog"),Object(r.b)("li",{parentName:"ul"},"defaultValues (List): a list of items that will be selected by default")),Object(r.b)("h4",{id:"example-8"},"Example"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{}),"List<MultiSelectOption> _productTypeOptions = [\n    _productTypes.map((t) =>\n        MultiSelectOption(value: t.productTypeId, label: t.label)\n    ).toList()\n];\n\nList<int> _selectedSupplierProducts = [];\n\nvoid handleMultiSelectTap() async {\n    List<int> results = await showDialog(\n        context: context,\n        builder: (context) => MultiSelectDialog(\n            options: _productTypeOptions,\n            defaultValues: _selectedSupplierProducts\n        )\n    );\n}\n")),Object(r.b)("h3",{id:"settingsexpansiontile"},"SettingsExpansionTile"),Object(r.b)("p",null,"SettingsExpansionTiles are used within the settings area to display an\nexpandable tile containing related settings."),Object(r.b)("h4",{id:"properties-16"},"Properties"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"title (String): The title displayed by the expansion tile"),Object(r.b)("li",{parentName:"ul"},"content (Widget): The content that will be displayed once the tile has been\nexpanded")),Object(r.b)("h4",{id:"example-9"},"Example"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{}),"@override\n  Widget build(BuildContext context) {\n\n    return SettingsExpansionTile(\n        title: 'Crops',\n        content: CropContent()\n    );\n}\n")))}b.isMDXComponent=!0}}]);