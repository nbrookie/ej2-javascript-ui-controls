<!-- markdownlint-disable MD010 -->

<!-- markdownlint-disable MD030 -->

<!-- markdownlint-disable MD004 -->

# Changelog

## [Unreleased]

## 16.4.54 (2019-02-19)

### HeatMap

#### Bug Fixes

- The console window exception which is thrown for mouse hovering action on legend labels in Firefox browser has been handled.

## 16.4.40-beta (2018-12-10)

### HeatMap

#### New Features

- Support for toggling the cell visibility with legend selection has been added for fixed type legend in heat map. This support helps to view the data points with values which matches the legend selection.
- Multi-level axis label grouping feature has been added to heat map.
- Cell selection feature has been added to heat map, this feature helps to select single or multiple heat map cells at run-time.
- Support for binding date object to axis labels for cell JSON data has been provided.
- Support for auto generating axis labels for cell JSON data has been provided.
- Provided support for formatting legend label in heat map.
- Provided support for customizing the cell tool tip UI.
- Provided support for customizing the data labels.

## 16.3.27 (2018-10-23)

### HeatMap

#### Bug Fixes

- Axis labels tooltip cropping issue has been fixed
- Issue with heatmap margin with minimum axis label size has been fixed.

## 16.3.24 (2018-10-09)

### HeatMap

#### Bug Fixes

- Issue with rendering heatmap with smaller dimensions has been fixed.

## 16.3.21 (2018-09-22)

### HeatMap

#### New Features

- Bubble tile type support has been included in heatmap for visualizing data points by mapping the data to bubble size and bubble color.
- Axis label increment feature has been added to heat map. It’s is used to display the axis label with regular interval values in numeric and date time axes
- Provided the smart legend feature for fixed type legend.
- Provided the support for nested data binding for JSON data.

## 16.3.17 (2018-09-12)

### HeatMap

#### New Features

- Bubble tile type support has been included in heatmap for visualizing data points by mapping the data to bubble size and bubble color.
- Axis label increment feature has been added to heat map. It’s is used to display the axis label with regular interval values in numeric and date time axes
- Provided the smart legend feature for fixed type legend.
- Provided the support for nested data binding for JSON data.

## 16.2.41 (2018-06-25)

### HeatMap

The HeatMap control is used to visualize a two-dimensional data in which the values are represented in gradient or fixed colors.

- **Axis Types** - Supports three different types of axes to populate the data, namely Numerical, Categorical,and Datetime.
- **Axis Feature** - Supports inverted axis, opposed position and axis intervals.
- **Legend** - Supports legend which provides value information for the colors which represents each values in HeatMap.
- **Data Binding** - Supports binding data in JSON and two-dimensional array formats.
- **Rendering Modes** - Supports automatic switching between SVG and Canvas rendering modes based on the data source length.
