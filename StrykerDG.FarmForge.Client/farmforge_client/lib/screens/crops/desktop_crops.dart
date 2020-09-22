import 'package:farmforge_client/main.dart';
import 'package:farmforge_client/models/crops/crop.dart';
import 'package:farmforge_client/provider/data_provider.dart';
import 'package:farmforge_client/widgets/crops/add_crop_log.dart';
import 'package:flutter/material.dart';
import 'package:intl/intl.dart';

import 'package:farmforge_client/screens/base/desktop/base_desktop.dart';

import 'package:farmforge_client/widgets/crops/add_crop.dart';
import 'package:farmforge_client/widgets/farmforge_dialog.dart';

import 'package:farmforge_client/utilities/constants.dart';
import 'package:provider/provider.dart';

class DesktopCrops extends StatefulWidget {
  final DateTime searchBegin;
  final DateTime searchEnd;

  DesktopCrops({@required this.searchBegin, this.searchEnd});

  @override
  _DesktopCropsState createState() => _DesktopCropsState();
}

class _DesktopCropsState extends State<DesktopCrops> {
  List<Crop> _crops = [];
  final GlobalKey<FormState> _formKey = GlobalKey<FormState>();
  TextEditingController _searchController = TextEditingController();

  void handleAddCrop(BuildContext context) {
    showDialog(
      context: context,
      builder: (context) => FarmForgeDialog(
        title: 'Add New Crop',
        content: AddCrop(),
      )
    );
  }

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();

    setState(() {
      _crops = Provider.of<DataProvider>(context).crops;
    });
  }

  @override
  void dispose() {
    _searchController.dispose();

    super.dispose();
  }

  void handleAddLog(Crop crop) {
    showDialog(
      context: context,
      builder: (context) => FarmForgeDialog(
        title: 'Add ${crop.cropType.label} Log',
        content: AddCropLog(crop: crop),
      ),
    );
  }

  void handleRowClick(Crop crop) {
    // showDialog(
    //   context: context,
    //   builder: (context) => FarmForgeDialog(
    //     title: 'Add ${crop.cropType.label} Log',
    //     content: AddCropLog(crop: crop),
    //   ),
    // );
  }

  List<DataColumn> getCropColumns() {
    return [
      DataColumn(label: Text('Type')),
      DataColumn(label: Text('Variety')),
      DataColumn(label: Text('Location')),
      DataColumn(label: Text('Status')),
      DataColumn(label: Text('Quantity')),
      DataColumn(label: Text('Planted At')),
      DataColumn(label: Text(''))
    ];
  }

  List<DataRow> configureTableData() {
    return _crops.map((c) => 
      DataRow(
        cells: [
          DataCell(Text(c?.cropType?.label ?? "")),
          DataCell(Text(c?.cropVariety?.label ?? "")),
          DataCell(Text(c?.location?.label ?? "")),
          DataCell(Text(c?.status?.label ?? "")),
          DataCell(Text(c?.quantity?.toString() ?? "")),
          DataCell(Text(DateFormat.yMd().format(c?.plantedAt) ?? "")),
          DataCell(
            IconButton(
              icon: Icon(Icons.note),
              onPressed: () { handleAddLog(c); },
            )
          )
        ],
        onSelectChanged: (bool value) { handleRowClick(c); }
      )
    ).toList();
  }

  @override
  Widget build(BuildContext context) {
    String _searchStartString = DateFormat.yMd().format(widget.searchBegin);
    String _searchEndString = DateFormat.yMd().format(widget.searchEnd);

    List<DataColumn> cropColumns = getCropColumns();
    List<DataRow> data = configureTableData();

    return BaseDesktop(
      title: 'Crops',
      action: handleAddCrop,
      content: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          // Search bar
          Padding(
            padding: EdgeInsets.symmetric(vertical: kSmallPadding),
            child: Row(
              children: [
                // Search box
                Padding(
                  padding: EdgeInsets.symmetric(horizontal: kMediumPadding),
                  child: Container(
                    width: 300,
                    child: Form(
                      key: _formKey,
                      child: TextFormField(
                        controller: _searchController,
                        decoration: InputDecoration(
                          prefixIcon: Icon(Icons.search)
                        ),
                      ),
                    )
                  ),
                ),
                // Filter button
                GestureDetector(
                  child: Icon(Icons.filter_list),
                  onTap: () { print('Displaying filter options'); },
                ),
                Expanded(
                  child: Container(),
                ),
                GestureDetector(
                  child: Icon(Icons.calendar_today),
                  onTap: () { print('Displaying calendar options'); },
                ),
                Padding(
                  padding: EdgeInsets.symmetric(horizontal: kMediumPadding),
                  child: Text('$_searchStartString - $_searchEndString'),
                )
              ],
            ),
          ),

          DataTable(
            columns: cropColumns,
            rows: data,
            showCheckboxColumn: false,
          )
        ],
      )
    );
  }
}