---
id: 'data_model'
title: 'Data Model'
sidebar_label: 'Data Model'
---

The DataModel is the underlying structure of the FarmForge database, and defines
all of the tables and relations that are used within the API and Web client.

This section is broken out into different areas based on how the tables are related

## Generic Tables
Generic tables are used throughout the app in a number of different areas and ways.

**BaseModel**: A base model that all other tables inherit.

| Column        | Type          | Description  |
|:-------------:|:-------------:|:------------:|
| Created | DateTime | When the object was created |
| Modified | DateTime | When the object was last modified |
| IsDeleted | Bool | If the object should be treated as if it is deleted |

**Log**: Holds various types of system events and messages

| Column        | Type          | Description  |
|:-------------:|:-------------:|:------------:|
| LogId | Int | Primary Key |
| TimeStamp | DateTime | The timestamp of when the log was created |
| Message | String | The message or details of the log |
| Data | String | A JSON string representing any relevant data about the log |
| LogTypeId | Int | The type of log that was recorded. Ties to a LogType object |

**LogType**: Defines various log types

| Column        | Type          | Description  |
|:-------------:|:-------------:|:------------:|
| LogTypeId | Int | Primary Key |
| Name | String | A lowercase, representative name of the log type |
| Label | String | A user facing label for the type of log |
| Description | String | A description of what the log type is for |

**Status**: Defines the statuses of different types of objects

| Column        | Type          | Description  |
|:-------------:|:-------------:|:------------:|
| StatusId | Int | Primary Key |
| EntityType | String | An identifying string that ties to specific type of object and status, for example a Device.Status or Crop.Status |
| Name | String | A lowercase, representative name of the status |
| Label | String | A user facing label for the status |

**User**: Stores the system's user information

| Column        | Type          | Description  |
|:-------------:|:-------------:|:------------:|
| UserId | Int | Primary Key |
| Username | String | An individual's username |
| Password | String | The hash of an invidual's Password |

## Device tables
Device tables are all related to storing data for FarmForge IoT devices.

**Device**: Represents an IoT device that is connected to FarmForge

| Column        | Type          | Description  |
|:-------------:|:-------------:|:------------:|
| DeviceId | Int | Primary Key |
| Name | String | A friendly name of the connected device |
| IpAddress | String | The IP Address of the connected device |
| SerialNumber | String | A unique identifier that ties the FarmForge device to the physical device |
| SecurityToken | String | A security token that allows the api to make POST requests to the device |
| Status | Int | The current status of the device (connected, disconnected, etc) |

**Interface**: Represents an interface on a device, such as a sensor, screen, motor, etc

| Column        | Type          | Description  |
|:-------------:|:-------------:|:------------:|
| InterfaceId | Int | Primary Key |
| DeviceId | Int | The Id of the device that this interface belongs to |
| Name | String | A name corresponding to the interface on the device, such as "clock 1" |
| SerialNumber | String | A Unique Identifier that ties the FarmForge interface to the physical device |
| InterfaceTypeId | Int | Ties the interface to a specific interface type |

**InterfaceType**: Defines different types of interfaces, such as sensors, motors, etc

| Column        | Type          | Description  |
|:-------------:|:-------------:|:------------:|
| InterfaceTypeId | Int | Primary Key |
| Name | String | The name of the Interface type, such as DS1307RTC |
| Label | String | The string representing the interface type that is shown to the user |
| ModelNumber | String | The model number of the particular Interface |
| ParentInterfaceId | Int | An Id that ties to another InterfaceType that parents this, such as one with the name "Real Time Clock" |

**Telemetry**: Describes the telemetry sent from an IoT device to FarmForge

| Column        | Type          | Description  |
|:-------------:|:-------------:|:------------:|
| TelemetryId | Int | Primary Key |
| InterfaceId | Int | The Interface that the telemetry belongs to |
| Value | Double | The number value of the telemetry |
| StringValue | String | The string value of the telemetry |
| BoolValue | Bool | The bool value of the telemetry |

## Crop Tables

**Crop**: Represents a specific crop that is planted and grown

| Column        | Type          | Description  |
|:-------------:|:-------------:|:------------:|
| CropId | Int | Primary Key |
| CropTypeId | Int | Foreign key to the type of crop |
| CropVarietyId | Int | Foreign key to the variety of crop |
| LocationId | Int | Foreign key to the location at which the crop is planted |
| StatusId | Int | Foreign key to the status of the crop |
| PlantedAt | DateTime | The time at which the crop was planted |
| GerminatedAt | DateTime | The time at which the crop germinated |
| HarvestedAt | DateTime | The time at which the crop was first harvested |
| TimeToGerminate | Long | The number of days required for the crop to germinate |
| TimeToHarvest | Long | The number of days required for the crop to be harvested |
| Quantity | Int | The number of items planted |
| QuantityHarvested | Int | The number of items harvested |
| Yield | Double | The yield percentage of the crop |

**CropType**: Defines a type of crop, such as apples, corn, mushrooms, etc

| Column        | Type          | Description  |
|:-------------:|:-------------:|:------------:|
| CropTypeId | Int | Primary Key |
| CropClassificationId | Int | Foreign key to the classification of the crop |
| Name | String | The name of the crop type |
| Label | String | The user facing label of the crop type |
| AverageGermination | Long | The average germination time (in days) for this type of crop |
| AverageTimeToHarvest | Long | The average time to harvest (int days) for this type of crop |
| AverageYield | Double | The average yield percentage for this type of crop |

**CropClassification**: The classification of a crop, such as fruit or vegetable

| Column        | Type          | Description  |
|:-------------:|:-------------:|:------------:|
| CropClassificationId | Int | Primary Key |
| Name | String | The name of the classification |
| Label | String | The user facing label for the classification |
| Description | String | A description of the classification | 

**CropVariety**: The variety of a crop, such as Sugarbaby (watermelon) or Red
Delicious (apple)

| Column        | Type          | Description  |
|:-------------:|:-------------:|:------------:|
| CropVarietyId | Int | Primary Key |
| CropTypeId | Int | Foreign key to the type of crop that this variety belongs to |
| Name | String | The name of the variety |
| Label | String | The user facing label for the variety |

**CropLog**: A log specific to a particular crop

| Column        | Type          | Description  |
|:-------------:|:-------------:|:------------:|\
| CropLogId | Int | Primary Key |
| CropId | Int | Foreign key to the crop that this log is for |
| LogTypeId | Int | Foreign key to the type of log this is (observation, input, etc) |
| Notes | String | Notes specific to this log |