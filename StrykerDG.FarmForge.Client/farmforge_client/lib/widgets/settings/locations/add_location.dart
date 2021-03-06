import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

import 'package:farmforge_client/provider/core_provider.dart';
import 'package:farmforge_client/provider/data_provider.dart';
import 'package:farmforge_client/models/general/location.dart';
import 'package:farmforge_client/models/farmforge_response.dart';

import 'package:farmforge_client/utilities/constants.dart';
import 'package:farmforge_client/utilities/ui_utility.dart';
import 'package:farmforge_client/utilities/validation.dart';

class AddLocation extends StatefulWidget {
  @override
  _AddLocationState createState() => _AddLocationState();
}

class _AddLocationState extends State<AddLocation> {
  bool isLoading = false;
  final GlobalKey<FormState> _formKey = GlobalKey<FormState>();
  TextEditingController _nameController = new TextEditingController();
  int _parentId;

  void handleParentChange(int newValue) {
    setState(() {
      _parentId = newValue;
    });
  }

  void handleSave() async {
    if(_formKey.currentState.validate()) {
      setState(() {
        isLoading = true;
      });

      try {
        FarmForgeResponse addResponse = await Provider
          .of<CoreProvider>(context, listen: false)
          .farmForgeService
          .addLocation(_nameController.text, _parentId);

        if(addResponse.data != null) {
          Provider.of<DataProvider>(context, listen: false)
            .addLocation(addResponse.data);

          Navigator.pop(context);
        }
        else 
          throw(addResponse.error);
      }
      catch(e) {
        UiUtility.handleError(
          context: context, 
          title: 'Save Error', 
          error: e.toString()
        );
      }
    }
  }

  @override
  void dispose() {
    _nameController.dispose();
    
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {

    List<Location> existingLocations = Provider.of<DataProvider>(context)
      .locations;

    List<DropdownMenuItem<int>> parentOptions = existingLocations.map((location) => 
      DropdownMenuItem<int>(
        value: location.locationId,
        child: Text(location.label),
      )
    ).toList();

    return Column(
      children: [
        Form(
          key: _formKey,
          child: Wrap(
            alignment: WrapAlignment.spaceEvenly,
            children: [
              Container(
                width: kStandardInput,
                child: TextFormField(
                  controller: _nameController,
                  decoration: InputDecoration(
                    labelText: 'Location Name'
                  ),
                  validator: Validation.isNotEmpty,
                ),
              ),
              SizedBox(width: kLargePadding),
              Container(
                width: kStandardInput,
                child: DropdownButtonFormField<int>(
                  value: _parentId,
                  onChanged: handleParentChange,
                  items: parentOptions,
                  decoration: InputDecoration(
                    labelText: 'Parent Location'
                  ),
                ),
              )
            ],
          ),
        ),
        Row(
          children: [
            Expanded(
              child: Container(),
            ),
            RaisedButton(
              child: Text('Save'),
              onPressed: handleSave,
            )
          ],
        )
      ],
    );
  }
}